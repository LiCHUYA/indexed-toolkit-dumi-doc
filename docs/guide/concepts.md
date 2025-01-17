# 基础概念

## IndexedDB 简介

IndexedDB 是一个底层的 API，用于在浏览器中存储大量结构化数据。它是一个事务型数据库系统，也是一个基于 JavaScript 的面向对象数据库。

**主要特点:**
- 支持存储大量数据
- 提供索引功能
- 支持事务操作
- 异步 API 设计
- 遵循同源策略

## 核心概念

### 1. 数据库 (Database)

数据库是存储数据的顶层容器。

**特点:**
- 每个域名可以创建多个数据库
- 每个数据库可以设置版本号
- 支持版本升级机制

**示例:**
```typescript
// 创建/打开数据库
const db = await useDatabase('myDB', {
  version: 1,
  onUpgrade: (event) => {
    // 版本升级逻辑
  }
});
```

### 2. 对象仓库 (Object Store)

对象仓库类似于关系型数据库中的表，用于存储具体数据。

**特点:**
- 每个数据库可以包含多个对象仓库
- 支持自增主键
- 可以创建索引
- 支持复合键

**示例:**
```typescript
// 创建对象仓库
await createTable('myDB', 'users', {
  keyPath: 'id',
  autoIncrement: true,
  indexes: [
    { name: 'email', unique: true },
    { name: 'age', unique: false }
  ]
});
```

### 3. 索引 (Index)

索引用于优化数据查询性能。

**索引类型:**
- **普通索引:** 用于常规查询
- **唯一索引:** 确保字段值唯一
- **多值索引:** 支持数组字段查询

**示例:**
```typescript
// 索引配置
interface IndexConfig {
  name: string;           // 索引字段名
  type: IndexType;        // 索引类型
  options?: {
    unique?: boolean;     // 是否唯一
    multiEntry?: boolean; // 是否多值索引
  }
}

// 创建索引示例
const store = db.createObjectStore('users', { keyPath: 'id' });
store.createIndex('email', 'email', { unique: true });
store.createIndex('tags', 'tags', { multiEntry: true });
```

### 4. 事务 (Transaction)

事务用于确保数据操作的原子性。

**特点:**
- 支持只读和读写事务
- 自动提交和回滚
- 保证数据一致性

**示例:**
```typescript
// 事务示例
const transaction = db.transaction(['users'], 'readwrite');
const store = transaction.objectStore('users');

transaction.oncomplete = () => {
  console.log('事务完成');
};

transaction.onerror = () => {
  console.error('事务失败');
};
```

### 5. 游标 (Cursor)

游标用于遍历数据集。

**特点:**
- 支持正向和反向遍历
- 可以设置范围
- 支持过滤和跳过

**示例:**
```typescript
const store = transaction.objectStore('users');
const request = store.openCursor();

request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log('当前数据:', cursor.value);
    cursor.continue();
  }
};
```

## 数据类型支持

IndexedDB 可以存储多种类型的数据：

1. **基础类型**
   - Number
   - String
   - Boolean
   - Date
   - null

2. **复杂类型**
   - Object
   - Array
   - Map
   - Set

3. **二进制数据**
   - ArrayBuffer
   - Blob
   - File

**示例:**
```typescript
// 存储不同类型的数据
const data = {
  id: 1,
  name: 'John',
  active: true,
  birthDate: new Date(),
  scores: [85, 92, 78],
  profile: { city: 'New York' },
  avatar: new Blob(['...'])
};
```

## 异步操作模式

IndexedDB 采用异步操作模式，避免阻塞主线程。

**特点:**
- 所有操作都返回 Promise
- 支持事件监听
- 可以处理大量数据

**示例:**
```typescript
// Promise 方式
const result = await insertOne('myDB', 'users', userData);

// 事件监听方式
const request = store.add(userData);
request.onsuccess = () => {
  console.log('数据插入成功');
};
request.onerror = () => {
  console.error('数据插入失败');
};
```

## 存储限制

浏览器对 IndexedDB 存储有一定限制：

1. **存储配额**
   - 通常在 50MB 到无限制之间
   - 可以请求更多空间
   - 需要处理配额超限

2. **监控存储使用**
```typescript
const { quota, usage } = await navigator.storage.estimate();
console.log(`已使用: ${usage / 1024 / 1024}MB`);
console.log(`总配额: ${quota / 1024 / 1024}MB`);
```

3. **处理存储限制**
```typescript
try {
  await operation();
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    console.error('存储空间不足');
    // 清理旧数据或请求更多空间
  }
}
```
