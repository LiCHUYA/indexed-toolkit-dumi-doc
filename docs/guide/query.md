# 查询构建器

## createQuery - 创建查询构建器

创建一个新的查询构建器实例，用于构建复杂的数据库查询。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称

**返回值:** `QueryBuilder<T>`

**示例:**
```typescript
import { createQuery } from 'indexeddb-toolkit';

// 基础用法
const query = createQuery('myDB', 'users');

// 带类型的查询构建器
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  tags: string[];
}
const query = createQuery<User>('myDB', 'users');
```

## 查询方法

### select - 选择字段

指定要查询的字段。

**参数:**
- `...fields: string[]` - 要选择的字段名称

**返回值:** `this` - 支持链式调用

**示例:**
```typescript
// 选择特定字段
const results = await query.chain
  .select('name', 'email')
  .execute();

// 选择所有字段
const results = await query.chain
  .select('*')
  .execute();
```

### where - 条件查询

添加查询条件。

**参数:**
- `field: string` - 字段名
- `operator: string` - 操作符
- `value: any` - 比较值

**支持的操作符:**
- `=` - 等于
- `!=` - 不等于
- `>` - 大于
- `>=` - 大于等于
- `<` - 小于
- `<=` - 小于等于
- `between` - 范围查询
- `in` - IN 查询
- `like` - 模糊查询

**示例:**
```typescript
// 基础比较
const adults = await query.chain
  .where('age', '>', 18)
  .execute();

// 多条件组合
const activeAdults = await query.chain
  .where('age', '>', 18)
  .where('status', '=', 'active')
  .execute();

// 范围查询
const users = await query.chain
  .where('age', 'between', [18, 30])
  .execute();

// IN 查询
const admins = await query.chain
  .where('role', 'in', ['admin', 'superadmin'])
  .execute();

// 模糊查询
const johns = await query.chain
  .where('name', 'like', 'John%')
  .execute();
```

### orderBy - 排序

指定结果集的排序方式。

**参数:**
- `field: string` - 排序字段
- `direction?: 'asc' | 'desc'` - 排序方向，默认 'asc'

**返回值:** `this` - 支持链式调用

**示例:**
```typescript
// 单字段排序
const results = await query.chain
  .orderBy('age', 'desc')
  .execute();

// 多字段排序
const results = await query.chain
  .orderBy('age', 'desc')
  .orderBy('name', 'asc')
  .execute();
```

### limit & offset - 分页

限制结果集数量和跳过指定数量的记录。

**参数:**
- `limit(value: number)` - 限制返回的记录数
- `offset(value: number)` - 跳过的记录数

**返回值:** `this` - 支持链式调用

**示例:**
```typescript
// 基础分页
const pageSize = 10;
const page = 1;
const results = await query.chain
  .limit(pageSize)
  .offset((page - 1) * pageSize)
  .execute();

// 分页助手函数
async function paginate(page: number, pageSize: number) {
  return query.chain
    .orderBy('id')
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .execute();
}
```

## 配置式查询

除了链式调用，还支持使用配置对象方式构建查询。

**配置接口:**
```typescript
interface QueryConfig {
  select?: string[];
  where?: Array<{
    field: string;
    operator: string;
    value: any;
  }>;
  orderBy?: Array<{
    field: string;
    direction: 'asc' | 'desc';
  }>;
  limit?: number;
  offset?: number;
}
```

**示例:**
```typescript
const config: QueryConfig = {
  select: ['name', 'email'],
  where: [
    { field: 'age', operator: '>', value: 18 },
    { field: 'status', operator: '=', value: 'active' }
  ],
  orderBy: [
    { field: 'name', direction: 'asc' }
  ],
  limit: 10
};

const results = await query.setConfig(config).execute();
```

## 错误处理

```typescript
try {
  const results = await query.chain
    .where('age', '>', 18)
    .execute();

  if (results.code === 200) {
    console.log('查询成功:', results.result);
  } else {
    switch (results.code) {
      case 415:
        console.error('查询失败');
        break;
      case 420:
        console.error('索引名称不能为空');
        break;
      case 422:
        console.error('索引不存在');
        break;
    }
  }
} catch (error) {
  console.error('查询异常:', error);
}
```

## 性能优化建议

1. **使用索引**
   - 为常用查询字段创建索引
   - 优先使用索引字段作为查询条件
   - 避免对非索引字段进行排序

2. **限制结果集**
   - 使用 limit 限制返回数量
   - 实现分页加载
   - 只选择需要的字段

3. **优化查询条件**
   - 合理使用组合查询
   - 避免过于复杂的条件
   - 优先使用精确匹配

4. **缓存策略**
   - 缓存常用查询结果
   - 实现查询结果缓存
   - 设置合理的缓存时间
