# 数据迁移

## migrateData - 数据迁移工具

用于在不同数据库之间迁移数据，支持数据转换和进度监控。

**参数:**
- `sourceDb: string` - 源数据库名称
- `targetDb: string` - 目标数据库名称
- `tables: string[] | '*'` - 要迁移的表，'*' 表示所有表
- `options?: MigrationOptions` - 迁移配置选项

**配置选项:**
```typescript
interface MigrationOptions {
  overwrite?: boolean;      // 是否覆盖已存在的数据
  transform?: (data: any) => any;  // 数据转换函数
  onProgress?: (progress: MigrationProgress) => void; // 进度回调
  validate?: (data: any) => Promise<boolean>;  // 数据验证函数
  onComplete?: (result: any) => Promise<void>; // 完成回调
}

interface MigrationProgress {
  phase: 'reading' | 'writing';  // 当前阶段
  current: number;              // 当前进度
  total: number;               // 总数
  percentage: number;          // 百分比
  message: string;            // 进度信息
}
```

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { migrateData } from 'indexeddb-toolkit';

// 基础迁移 - 迁移所有表
const result = await migrateData('oldDB', 'newDB', '*');

// 选择性迁移 - 只迁移指定表
const result = await migrateData('oldDB', 'newDB', ['users', 'orders']);

// 完整配置迁移
const result = await migrateData('oldDB', 'newDB', '*', {
  overwrite: true,
  transform: (data) => {
    // 数据转换逻辑
    if (data.tableName === 'users') {
      return data.children.map(user => ({
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
        age: Number(user.age),
        status: user.status || 'active',
        updatedAt: new Date().toISOString()
      }));
    }
    return data;
  },
  onProgress: (progress) => {
    console.log(`${progress.phase} 阶段: ${progress.percentage}%`);
    console.log(progress.message);
  }
});
```

## 数据验证

在迁移过程中验证数据的完整性和正确性。

**示例:**
```typescript
// 迁移前验证
const result = await migrateData('oldDB', 'newDB', '*', {
  validate: async (data) => {
    // 验证数据结构
    if (!data.tableName || !Array.isArray(data.children)) {
      throw new Error('无效的数据格式');
    }
    
    // 验证数据完整性
    for (const item of data.children) {
      if (!item.id) {
        throw new Error('数据缺少ID字段');
      }
    }
    
    return true;
  }
});

// 迁移后验证
const result = await migrateData('oldDB', 'newDB', '*', {
  onComplete: async (result) => {
    // 验证迁移结果
    const sourceData = await findDBData('oldDB');
    const targetData = await findDBData('newDB');
    
    // 比较数据数量
    if (sourceData.length !== targetData.length) {
      throw new Error('数据数量不匹配');
    }
    
    // 验证数据一致性
    for (let i = 0; i < sourceData.length; i++) {
      if (!isDataEqual(sourceData[i], targetData[i])) {
        throw new Error(`数据不一致: ${sourceData[i].id}`);
      }
    }
  }
});
```

## 版本升级

在迁移过程中处理数据库版本升级。

**示例:**
```typescript
const result = await migrateData('oldDB', 'newDB', '*', {
  onUpgrade: (event) => {
    const db = event.target.result;
    const oldVersion = event.oldVersion;
    
    if (oldVersion < 2) {
      // 版本1到2的升级
      const store = db.createObjectStore('users', {
        keyPath: 'id',
        autoIncrement: true
      });
      store.createIndex('email', 'email', { unique: true });
    }
    
    if (oldVersion < 3) {
      // 版本2到3的升级
      const store = db.transaction('users', 'readwrite')
        .objectStore('users');
      
      // 添加新索引
      store.createIndex('age', 'age');
      
      // 更新现有数据
      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const data = cursor.value;
          data.age = data.age || 0;
          cursor.update(data);
          cursor.continue();
        }
      };
    }
  }
});
```

## 错误处理

```typescript
try {
  const result = await migrateData('oldDB', 'newDB', '*');
  
  if (result.code === 200) {
    console.log('迁移成功:', result.result);
  } else {
    switch (result.code) {
      case 430:
        console.error('数据迁移失败');
        break;
      case 431:
        console.error('源数据库不存在');
        break;
      case 432:
        console.error('目标数据库创建失败');
        break;
      default:
        console.error('迁移失败:', result.message);
    }
  }
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    console.error('存储空间不足');
  } else if (error.name === 'VersionError') {
    console.error('版本冲突');
  } else {
    console.error('迁移异常:', error);
  }
}
```

## 最佳实践

1. **迁移策略**
   - 制定清晰的迁移计划
   - 分批处理大量数据
   - 实现数据验证机制
   - 保留迁移日志

2. **数据处理**
   - 清理无效数据
   - 转换数据格式
   - 处理特殊字段
   - 保持数据一致性

3. **错误恢复**
   - 实现回滚机制
   - 保存中间状态
   - 支持断点续传
   - 提供重试机制

4. **性能优化**
   - 使用批量操作
   - 控制事务大小
   - 优化内存使用
   - 监控迁移进度

5. **版本管理**
   - 规划版本升级路径
   - 处理版本兼容性
   - 保留版本历史
   - 支持版本回退
