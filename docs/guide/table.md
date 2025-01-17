# 表操作

## createTable - 创建数据库表

用于在指定数据库中创建新的表(对象仓库)。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `options?: TableOptions` - 表配置选项
  - `keyPath?: string` - 主键字段名,默认 'id'
  - `autoIncrement?: boolean` - 是否自增,默认 true
  - `version?: number` - 表版本号
  - `timeout?: number` - 操作超时时间(毫秒)
  - `force?: boolean` - 是否强制创建
  - `indexes?: Array<string | IndexConfig>` - 索引配置

**索引配置:**
```typescript
interface IndexConfig {
  name: string;           // 索引字段名
  type: IndexType;        // 索引类型
  options?: {
    unique?: boolean;     // 是否唯一
    multiEntry?: boolean; // 是否多值索引
  }
}

enum IndexType {
  UNIQUE = 'unique',      // 唯一索引
  MULTI_ENTRY = 'multi',  // 多值索引
  NORMAL = 'normal'       // 普通索引
}
```

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { createTable } from 'indexeddb-toolkit';

// 基础用法 - 只创建表
await createTable('myDB', 'users');

// 创建带索引的表
await createTable('myDB', 'users', {
  keyPath: 'id',
  autoIncrement: true,
  indexes: [
    'name',                          // 普通索引
    { name: 'email', type: IndexType.UNIQUE }, // 唯一索引
    { name: 'tags', type: IndexType.MULTI_ENTRY }, // 多值索引
    { 
      name: 'age',
      type: IndexType.NORMAL,
      options: { unique: false }
    }
  ]
});
```

## insertOne - 插入单条数据

向指定表中插入一条数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `data: T` - 要插入的数据

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { insertOne } from 'indexeddb-toolkit';

// 插入单条数据
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
  tags: ['admin', 'active']
};

const result = await insertOne('myDB', 'users', user);
```

## insertMany - 批量插入数据

向指定表中批量插入多条数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `dataList: T[]` - 要插入的数据数组
- `options?: InsertManyOptions` - 插入配置
  - `skipDuplicates?: boolean` - 是否跳过重复数据
  - `updateDuplicates?: boolean` - 是否更新重复数据
  - `batchSize?: number` - 批量处理大小
  - `onProgress?: (progress: Progress) => void` - 进度回调

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { insertMany } from 'indexeddb-toolkit';

const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
];

// 基础批量插入
await insertMany('myDB', 'users', users);

// 带配置的批量插入
await insertMany('myDB', 'users', users, {
  skipDuplicates: true,
  batchSize: 100,
  onProgress: (progress) => {
    console.log(`插入进度: ${progress.percentage}%`);
  }
});
```

## findByKey - 主键查询

通过主键查询表中的数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `key: any` - 主键值
- `isAll?: boolean` - 是否返回所有匹配记录,默认 false

**返回值:** `Promise<Response<T>>`

**示例:**
```typescript
import { findByKey } from 'indexeddb-toolkit';

// 查询单条记录
const user = await findByKey('myDB', 'users', 1);

// 查询所有匹配记录
const users = await findByKey('myDB', 'users', 1, true);
```

## findByIndex - 索引查询

通过索引查询表中的数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `indexName: string` - 索引名称
- `indexValue: any` - 索引值
- `isAll?: boolean` - 是否返回所有匹配记录,默认 false

**返回值:** `Promise<Response<T>>`

**示例:**
```typescript
import { findByIndex } from 'indexeddb-toolkit';

// 通过邮箱查询单个用户
const user = await findByIndex('myDB', 'users', 'email', 'john@example.com', false);

// 查询所有25岁的用户
const users = await findByIndex('myDB', 'users', 'age', 25, true);

// 查询所有管理员
const admins = await findByIndex('myDB', 'users', 'tags', 'admin', true);
```

## updateDataByPrimaryKey - 主键更新

通过主键更新数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `key: any` - 主键值
- `data: Partial<T>` - 要更新的数据

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { updateDataByPrimaryKey } from 'indexeddb-toolkit';

// 更新单条记录
await updateDataByPrimaryKey('myDB', 'users', 1, {
  age: 26,
  tags: ['admin', 'vip']
});

// 批量更新
const updates = [
  { id: 1, data: { status: 'active' } },
  { id: 2, data: { status: 'inactive' } }
];

for (const update of updates) {
  await updateDataByPrimaryKey('myDB', 'users', update.id, update.data);
}
```

## updateDataByIndex - 索引更新

通过索引更新数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `indexName: string` - 索引名称
- `indexValue: any` - 索引值
- `data: Partial<T>` - 要更新的数据

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { updateDataByIndex } from 'indexeddb-toolkit';

// 通过邮箱更新用户状态
await updateDataByIndex('myDB', 'users', 'email', 'john@example.com', {
  status: 'active',
  lastLogin: new Date()
});
```

## deleteOneByPk - 主键删除

通过主键删除单条数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `key: any` - 主键值

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { deleteOneByPk } from 'indexeddb-toolkit';

// 删除单个用户
await deleteOneByPk('myDB', 'users', 1);
```

## deleteManyByPK - 批量主键删除

通过主键批量删除数据。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `keys: any[]` - 主键值数组

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { deleteManyByPK } from 'indexeddb-toolkit';

// 批量删除用户
await deleteManyByPK('myDB', 'users', [1, 2, 3]);
```

## 事务处理

使用事务确保数据操作的原子性。

**示例:**
```typescript
import { useDatabase } from 'indexeddb-toolkit';

// 积分转账事务示例
async function transferPoints(fromUserId: number, toUserId: number, points: number) {
  const db = await useDatabase('myDB');
  const transaction = db.transaction(['users'], 'readwrite');
  const store = transaction.objectStore('users');

  return new Promise((resolve, reject) => {
    transaction.onerror = () => reject(new Error('事务失败'));
    transaction.oncomplete = () => resolve(true);

    // 扣除积分
    store.get(fromUserId).onsuccess = (event) => {
      const user = event.target.result;
      if (user.points < points) {
        reject(new Error('积分不足'));
        return;
      }
      user.points -= points;
      store.put(user);

      // 增加积分
      store.get(toUserId).onsuccess = (event) => {
        const user = event.target.result;
        user.points += points;
        store.put(user);
      };
    };
  });
}
```

## 错误处理

```typescript
try {
  const result = await operation();
  if (result.code === 200) {
    console.log('操作成功:', result.result);
  } else {
    switch (result.code) {
      case 402:
        console.error('表名不能为空');
        break;
      case 406:
        console.error('表已存在');
        break;
      case 411:
        console.error('表不存在');
        break;
      case 412:
        console.error('数据插入失败');
        break;
      case 416:
        console.error('主键不能为空');
        break;
    }
  }
} catch (error) {
  console.error('操作异常:', error);
}
```

## 最佳实践

1. **表设计**
   - 合理设计主键
   - 适当使用索引
   - 避免过多索引
   - 选择合适的字段类型

2. **数据操作**
   - 使用批量操作提高性能
   - 合理使用事务
   - 处理并发操作
   - 验证数据完整性

3. **索引使用**
   - 针对常用查询建立索引
   - 避免过多索引影响写入性能
   - 合理使用复合索引
   - 及时删除无用索引

4. **性能优化**
   - 批量处理大数据
   - 使用游标处理大结果集
   - 避免频繁的小事务
   - 合理设置批处理大小

5. **错误处理**
   - 实现完整的错误处理
   - 提供友好的错误信息
   - 记录操作日志
   - 实现数据回滚机制

[继续下一部分...]
