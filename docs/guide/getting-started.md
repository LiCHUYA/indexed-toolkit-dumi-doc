# 快速开始

## 安装

使用你喜欢的包管理器安装：

```bash
# npm
npm install indexeddb-toolkit

# yarn 
yarn add indexeddb-toolkit

# pnpm
pnpm add indexeddb-toolkit
```

## 基本使用流程

### 1. 创建/打开数据库

首先需要创建或打开一个数据库：

```typescript
import { useDatabase } from 'indexeddb-toolkit';

// 基础用法
const db = await useDatabase('myDB');

// 带版本控制
const db = await useDatabase('myDB', {
  version: 1,
  onUpgrade: (event) => {
    // 版本升级时的处理逻辑
  }
});
```

### 2. 创建表

创建表来存储数据：

```typescript
import { createTable } from 'indexeddb-toolkit';

// 创建用户表
await createTable('myDB', 'users', {
  keyPath: 'id',                // 主键字段
  autoIncrement: true,          // 自动递增
  indexes: [
    'name',                     // 普通索引
    { name: 'email', type: 'unique' },     // 唯一索引
    { name: 'tags', type: 'multi' }        // 多值索引
  ]
});
```

### 3. 数据操作

#### 插入数据

```typescript
import { insertOne, insertMany } from 'indexeddb-toolkit';

// 插入单条数据
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
  tags: ['admin', 'active']
};
await insertOne('myDB', 'users', user);

// 批量插入
const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
];
await insertMany('myDB', 'users', users);
```

#### 查询数据

```typescript
import { findByKey, findByIndex, createQuery } from 'indexeddb-toolkit';

// 主键查询
const user = await findByKey('myDB', 'users', 1);

// 索引查询
const userByEmail = await findByIndex('myDB', 'users', 'email', 'john@example.com');

// 使用查询构建器
const query = createQuery('myDB', 'users');
const results = await query.chain
  .select('name', 'email')
  .where('age', '>', 18)
  .orderBy('name', 'asc')
  .limit(10)
  .execute();
```

#### 更新数据

```typescript
import { updateDataByPrimaryKey, updateDataByIndex } from 'indexeddb-toolkit';

// 通过主键更新
await updateDataByPrimaryKey('myDB', 'users', 1, {
  age: 26,
  status: 'active'
});

// 通过索引更新
await updateDataByIndex('myDB', 'users', 'email', 'john@example.com', {
  status: 'inactive'
});
```

#### 删除数据

```typescript
import { deleteOneByPk, deleteManyByPK } from 'indexeddb-toolkit';

// 删除单条记录
await deleteOneByPk('myDB', 'users', 1);

// 批量删除
await deleteManyByPK('myDB', 'users', [1, 2, 3]);
```

### 4. 文件存储

```typescript
import { saveFilesToDB, getFileFromDB } from 'indexeddb-toolkit';

// 保存文件
const fileInput = document.querySelector('input[type="file"]');
const result = await saveFilesToDB('myDB', 'files', fileInput.files[0], {
  generateThumbnail: true,  // 生成缩略图
  thumbnailSize: 100       // 缩略图尺寸
});

// 获取文件
const file = await getFileFromDB('myDB', 'files', result.data.id);
```

### 5. 数据迁移

```typescript
import { migrateData } from 'indexeddb-toolkit';

// 数据迁移
await migrateData('oldDB', 'newDB', '*', {
  onProgress: (progress) => {
    console.log(`迁移进度: ${progress.percentage}%`);
  }
});
```

## TypeScript 支持

库提供完整的 TypeScript 类型支持：

```typescript
// 定义数据类型
interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  tags?: string[];
}

// 使用类型
const query = createQuery<User>('myDB', 'users');
const users = await query.chain
  .select('name', 'email')
  .where('age', '>', 18)
  .execute();
// users.result 类型为 User[]
```

## 错误处理

推荐使用 try-catch 处理所有操作：

```typescript
try {
  const result = await operation();
  if (result.code === 200) {
    console.log('操作成功:', result.result);
  } else {
    console.error('操作失败:', result.message);
  }
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    console.error('存储空间不足');
  } else {
    console.error('操作异常:', error);
  }
}
```

## 下一步

- 查看 [数据库操作](./database.md) 了解更多数据库操作
- 查看 [表操作](./table.md) 了解更多表操作
- 查看 [查询构建器](./query.md) 了解高级查询功能
- 查看 [文件存储](./file-storage.md) 了解文件操作
- 查看 [数据迁移](./migration.md) 了解数据迁移功能
