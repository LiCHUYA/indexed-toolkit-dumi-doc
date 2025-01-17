# API 参考

## 数据库操作

### useDatabase
```typescript
function useDatabase(
  dbName: string, 
  options?: {
    version?: number;
    onBlocked?: () => void;
    onUpgrade?: (event: IDBVersionChangeEvent) => void;
    timeout?: number;
    force?: boolean;
  }
): Promise<IDBDatabase>
```
创建或打开数据库。

### deleteDatabase
```typescript
function deleteDatabase(dbName: string): Promise<Response>
```
删除指定数据库。

### deleteAllDatabases
```typescript
function deleteAllDatabases(): Promise<Response>
```
删除所有数据库。

### closeAllConnections
```typescript
function closeAllConnections(): Promise<void>
```
关闭所有数据库连接。

### getTableNames
```typescript
function getTableNames(dbName: string): Promise<Response>
```
获取数据库中的所有表名。

## 表操作

### createTable
```typescript
interface TableOptions {
  keyPath?: string;
  autoIncrement?: boolean;
  version?: number;
  timeout?: number;
  force?: boolean;
  indexes?: Array<string | IndexConfig>;
}

interface IndexConfig {
  name: string;
  type: IndexType;
  options?: {
    unique?: boolean;
    multiEntry?: boolean;
  }
}

enum IndexType {
  UNIQUE = 'unique',
  MULTI_ENTRY = 'multi',
  NORMAL = 'normal'
}

function createTable(
  dbName: string,
  tableName: string,
  options?: TableOptions
): Promise<Response>
```
创建数据库表。

### insertOne
```typescript
function insertOne<T = any>(
  dbName: string,
  tableName: string,
  data: T
): Promise<Response>
```
插入单条数据。

### insertMany
```typescript
interface InsertManyOptions {
  skipDuplicates?: boolean;
  updateDuplicates?: boolean;
  batchSize?: number;
  onProgress?: (progress: Progress) => void;
}

function insertMany<T = any>(
  dbName: string,
  tableName: string,
  dataList: T[],
  options?: InsertManyOptions
): Promise<Response>
```
批量插入数据。

### findByKey
```typescript
function findByKey<T = any>(
  dbName: string,
  tableName: string,
  key: any,
  isAll?: boolean
): Promise<Response<T>>
```
通过主键查询数据。

### findByIndex
```typescript
function findByIndex<T = any>(
  dbName: string,
  tableName: string,
  indexName: string,
  indexValue: any,
  isAll?: boolean
): Promise<Response<T>>
```
通过索引查询数据。

## 查询构建器

### createQuery
```typescript
function createQuery<T = any>(
  dbName: string,
  tableName: string
): QueryBuilder<T>
```
创建查询构建器实例。

### QueryBuilder 类
```typescript
class QueryBuilder<T = any> {
  select(...fields: string[]): this
  where(field: string, operator: string, value: any): this
  orderBy(field: string, direction?: 'asc' | 'desc'): this
  limit(value: number): this
  offset(value: number): this
  setConfig(config: QueryConfig): this
  execute(): Promise<Response<T[]>>
}

interface QueryConfig {
  select?: string[];
  where?: WhereClause[];
  orderBy?: OrderByClause[];
  limit?: number;
  offset?: number;
}
```

## 文件存储

### saveFilesToDB
```typescript
interface SaveFileOptions {
  generateThumbnail?: boolean;
  thumbnailSize?: number;
  generateUrl?: boolean;
  validate?: (file: File) => boolean;
  onProgress?: (progress: Progress) => void;
}

function saveFilesToDB(
  dbName: string,
  tableName: string,
  file: File,
  options?: SaveFileOptions
): Promise<Response>
```
保存文件到数据库。

### getFileFromDB
```typescript
interface GetFileOptions {
  generateUrl?: boolean;
  type?: 'raw' | 'handled';
}

function getFileFromDB(
  dbName: string,
  tableName: string,
  fileId: number,
  options?: GetFileOptions
): Promise<Response>
```
从数据库获取文件。

### downloadFileFromDB
```typescript
interface DownloadOptions {
  type?: 'raw' | 'handled';
  fileName?: string;
}

function downloadFileFromDB(
  dbName: string,
  tableName: string,
  fileId: number,
  options?: DownloadOptions
): Promise<Response>
```
下载数据库中的文件。

## 数据迁移

### migrateData
```typescript
interface MigrationOptions {
  overwrite?: boolean;
  transform?: (data: any) => any;
  onProgress?: (progress: MigrationProgress) => void;
  validate?: (data: any) => Promise<boolean>;
  onComplete?: (result: any) => Promise<void>;
}

function migrateData(
  sourceDb: string,
  targetDb: string,
  tables: string[] | '*',
  options?: MigrationOptions
): Promise<Response>
```
数据迁移工具。

## 通用类型

### Response
```typescript
interface Response<T = any> {
  code: number;
  message: string;
  result?: T;
}
```

### Progress
```typescript
interface Progress {
  current: number;
  total: number;
  percentage: number;
  message?: string;
}
```

## 错误码

| 状态码 | 说明                   |
|--------|------------------------|
| 200    | 操作成功               |
| 401    | 数据库名称不能为空     |
| 402    | 表名不能为空           |
| 403    | 数据库打开失败         |
| 405    | 表打开失败             |
| 406    | 数据库/表已存在        |
| 407    | 数据库删除失败         |
| 408    | 表删除失败             |
| 411    | 表不存在               |
| 412    | 数据插入失败           |
| 415    | 数据查询失败           |
| 416    | 主键不能为空           |
| 430    | 数据迁移失败           |
| 436    | 文件格式不支持         |
| 437    | 文件大小超出限制       |
| 500    | 操作失败(一般错误)     |
