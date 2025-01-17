# 数据库操作

## useDatabase - 创建/打开数据库

用于创建新的数据库或打开已存在的数据库。

**参数:**
- `dbName: string` - 数据库名称
- `options?: DatabaseOptions` - 配置选项
  - `version?: number` - 数据库版本号
  - `onBlocked?: () => void` - 数据库被阻塞时的回调
  - `onUpgrade?: (event: IDBVersionChangeEvent) => void` - 版本升级时的回调
  - `timeout?: number` - 操作超时时间(毫秒)
  - `force?: boolean` - 是否强制打开数据库

**返回值:** `Promise<IDBDatabase>`

**示例:**
```typescript
import { useDatabase } from 'indexeddb-toolkit';

// 基础用法
const db = await useDatabase('myDB');

// 完整配置
const db = await useDatabase('myDB', {
  version: 2,
  timeout: 5000,
  force: true,
  onBlocked: () => {
    console.log('等待其他连接关闭...');
  },
  onUpgrade: (event) => {
    if (event.oldVersion < 2) {
      // 版本1到2的升级逻辑
    }
  }
});
```

## deleteDatabase - 删除数据库

删除指定名称的数据库。

**参数:**
- `dbName: string` - 要删除的数据库名称

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { deleteDatabase } from 'indexeddb-toolkit';

// 基础用法
const result = await deleteDatabase('myDB');

// 带确认的删除
const confirmDelete = window.confirm('确定要删除数据库吗?');
if (confirmDelete) {
  try {
    await deleteDatabase('myDB');
    console.log('数据库删除成功');
  } catch (error) {
    console.error('删除失败:', error);
  }
}
```

## deleteAllDatabases - 删除所有数据库

删除浏览器中所有的 IndexedDB 数据库。此操作需谨慎使用。

**参数:** 无

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { deleteAllDatabases } from 'indexeddb-toolkit';

try {
  const result = await deleteAllDatabases();
  if (result.code === 200) {
    console.log('所有数据库已删除');
  }
} catch (error) {
  console.error('删除失败:', error);
}
```

## getTableNames - 获取数据库表名

获取指定数据库中的所有表名。

**参数:**
- `dbName: string` - 数据库名称

**返回值:** `Promise<Response>` - 返回表名数组

**示例:**
```typescript
import { getTableNames } from 'indexeddb-toolkit';

const result = await getTableNames('myDB');
if (result.code === 200) {
  console.log('数据库表:', result.result);
}
```

## closeAllConnections - 关闭所有连接

关闭所有打开的数据库连接。通常在数据库操作完成后调用。

**参数:** 无

**返回值:** `Promise<void>`

**示例:**
```typescript
import { closeAllConnections } from 'indexeddb-toolkit';

// 操作完成后关闭连接
await closeAllConnections();
```

## 错误处理

每个数据库操作都可能遇到以下错误:

1. **版本冲突 (VersionError)**
   - 原因: 数据库版本不匹配
   - 处理: 检查版本号或强制升级

2. **存储空间不足 (QuotaExceededError)**
   - 原因: 超出浏览器存储限制
   - 处理: 清理数据或请求更多空间

3. **数据库被阻塞 (BlockedError)**
   - 原因: 其他连接未关闭
   - 处理: 等待或强制关闭连接

**示例:**
```typescript
try {
  const db = await useDatabase('myDB');
} catch (error) {
  switch (error.name) {
    case 'VersionError':
      console.error('数据库版本冲突');
      break;
    case 'QuotaExceededError':
      console.error('存储空间不足');
      break;
    case 'BlockedError':
      console.error('数据库被阻塞');
      break;
    default:
      console.error('操作失败:', error);
  }
}
```

## 最佳实践

1. **版本管理**
   - 合理规划数据库版本
   - 实现版本升级逻辑
   - 处理版本冲突

2. **连接管理**
   - 及时关闭不用的连接
   - 处理阻塞事件
   - 实现超时机制

3. **错误处理**
   - 捕获所有可能的错误
   - 实现错误恢复机制
   - 提供用户友好的错误提示
