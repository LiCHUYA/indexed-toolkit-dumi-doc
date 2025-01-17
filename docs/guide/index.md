# IndexedDB Toolkit

IndexedDB Toolkit 是一个现代化的 IndexedDB 工具库，提供了简单易用的 API 来操作浏览器的 IndexedDB 数据库。

## 特性

### 1. 简单易用
- 提供 Promise 化的 API
- 支持链式调用
- 自动处理连接管理
- 简化错误处理

### 2. 功能完整
- 完整的数据库操作
- 强大的查询构建器
- 文件存储支持
- 数据迁移工具

### 3. 类型安全
- 完整的 TypeScript 支持
- 智能类型推导
- 运行时类型检查
- 类型安全的查询

### 4. 性能优化
- 自动索引管理
- 批量操作支持
- 连接池优化
- 内存使用优化

### 5. 开发友好
- 详细的错误信息
- 完整的进度回调
- 丰富的调试信息
- 支持异步/await

## 快速开始

### 安装

```bash
# npm
npm install indexeddb-toolkit

# yarn
yarn add indexeddb-toolkit

# pnpm
pnpm add indexeddb-toolkit
```

### 基础示例

```typescript
import { useDatabase, createTable, insertOne } from 'indexeddb-toolkit';

// 创建数据库和表
await useDatabase('myDB');
await createTable('myDB', 'users', {
  keyPath: 'id',
  indexes: ['name', 'email']
});

// 插入数据
await insertOne('myDB', 'users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// 使用查询构建器
const query = createQuery('myDB', 'users');
const users = await query.chain
  .where('age', '>', 18)
  .orderBy('name')
  .limit(10)
  .execute();
```

## 核心功能

### 数据库操作
- 创建/打开数据库
- 删除数据库
- 版本管理
- 连接管理

### 表操作
- 创建/删除表
- 索引管理
- 数据增删改查
- 批量操作

### 查询构建器
- 条件查询
- 排序分页
- 链式调用
- 类型安全

### 文件存储
- 文件保存
- 缩略图生成
- 文件下载
- 批量处理

### 数据迁移
- 数据导入导出
- 版本升级
- 数据验证
- 进度监控

## 使用指南

1. [快速开始](./getting-started.md) - 5分钟上手教程
2. [基础概念](./concepts.md) - 了解核心概念
3. [数据库操作](./database.md) - 数据库管理指南
4. [表操作](./table.md) - 表和索引操作
5. [查询构建器](./query.md) - 高级查询功能
6. [文件存储](./file-storage.md) - 文件操作指南
7. [数据迁移](./migration.md) - 数据迁移工具
8. [API 参考](./api-reference.md) - 详细 API 文档

## 贡献指南

我们欢迎所有形式的贡献：

- 提交 Issue 报告问题
- 提交 PR 改进代码
- 完善文档
- 分享使用经验

## 许可证

MIT License - [查看详情](../../LICENSE)
