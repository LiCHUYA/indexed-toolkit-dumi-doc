"use strict";(self.webpackChunkindexeddb=self.webpackChunkindexeddb||[]).push([[904],{20910:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(30533),t={}},2953:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(5671),t={}},66378:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(89065),t={}},24012:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(78013),t={}},5406:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(77511),t={}},59894:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(34637),t={}},5142:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(61378),t={}},71319:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(50084),t={}},77259:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(79779),t={}},35917:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(62207),t={}},81238:function(r,a,e){e.r(a),e.d(a,{demos:function(){return t}});var d=e(75271),n=e(38337),t={}},92033:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(30533);const n=[{value:`function useDatabase(\r
  dbName: string, \r
  options?: {\r
    version?: number;\r
    onBlocked?: () => void;\r
    onUpgrade?: (event: IDBVersionChangeEvent) => void;\r
    timeout?: number;\r
    force?: boolean;\r
  }\r
): Promise<IDBDatabase>
`,paraId:0,tocIndex:2},{value:"\u521B\u5EFA\u6216\u6253\u5F00\u6570\u636E\u5E93\u3002",paraId:1,tocIndex:2},{value:`function deleteDatabase(dbName: string): Promise<Response>
`,paraId:2,tocIndex:3},{value:"\u5220\u9664\u6307\u5B9A\u6570\u636E\u5E93\u3002",paraId:3,tocIndex:3},{value:`function deleteAllDatabases(): Promise<Response>
`,paraId:4,tocIndex:4},{value:"\u5220\u9664\u6240\u6709\u6570\u636E\u5E93\u3002",paraId:5,tocIndex:4},{value:`function closeAllConnections(): Promise<void>
`,paraId:6,tocIndex:5},{value:"\u5173\u95ED\u6240\u6709\u6570\u636E\u5E93\u8FDE\u63A5\u3002",paraId:7,tocIndex:5},{value:`function getTableNames(dbName: string): Promise<Response>
`,paraId:8,tocIndex:6},{value:"\u83B7\u53D6\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868\u540D\u3002",paraId:9,tocIndex:6},{value:`interface TableOptions {\r
  keyPath?: string;\r
  autoIncrement?: boolean;\r
  version?: number;\r
  timeout?: number;\r
  force?: boolean;\r
  indexes?: Array<string | IndexConfig>;\r
}\r
\r
interface IndexConfig {\r
  name: string;\r
  type: IndexType;\r
  options?: {\r
    unique?: boolean;\r
    multiEntry?: boolean;\r
  }\r
}\r
\r
enum IndexType {\r
  UNIQUE = 'unique',\r
  MULTI_ENTRY = 'multi',\r
  NORMAL = 'normal'\r
}\r
\r
function createTable(\r
  dbName: string,\r
  tableName: string,\r
  options?: TableOptions\r
): Promise<Response>
`,paraId:10,tocIndex:8},{value:"\u521B\u5EFA\u6570\u636E\u5E93\u8868\u3002",paraId:11,tocIndex:8},{value:`function insertOne<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  data: T\r
): Promise<Response>
`,paraId:12,tocIndex:9},{value:"\u63D2\u5165\u5355\u6761\u6570\u636E\u3002",paraId:13,tocIndex:9},{value:`interface InsertManyOptions {\r
  skipDuplicates?: boolean;\r
  updateDuplicates?: boolean;\r
  batchSize?: number;\r
  onProgress?: (progress: Progress) => void;\r
}\r
\r
function insertMany<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  dataList: T[],\r
  options?: InsertManyOptions\r
): Promise<Response>
`,paraId:14,tocIndex:10},{value:"\u6279\u91CF\u63D2\u5165\u6570\u636E\u3002",paraId:15,tocIndex:10},{value:`function findByKey<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  key: any,\r
  isAll?: boolean\r
): Promise<Response<T>>
`,paraId:16,tocIndex:11},{value:"\u901A\u8FC7\u4E3B\u952E\u67E5\u8BE2\u6570\u636E\u3002",paraId:17,tocIndex:11},{value:`function findByIndex<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  indexName: string,\r
  indexValue: any,\r
  isAll?: boolean\r
): Promise<Response<T>>
`,paraId:18,tocIndex:12},{value:"\u901A\u8FC7\u7D22\u5F15\u67E5\u8BE2\u6570\u636E\u3002",paraId:19,tocIndex:12},{value:`function createQuery<T = any>(\r
  dbName: string,\r
  tableName: string\r
): QueryBuilder<T>
`,paraId:20,tocIndex:14},{value:"\u521B\u5EFA\u67E5\u8BE2\u6784\u5EFA\u5668\u5B9E\u4F8B\u3002",paraId:21,tocIndex:14},{value:`class QueryBuilder<T = any> {\r
  select(...fields: string[]): this\r
  where(field: string, operator: string, value: any): this\r
  orderBy(field: string, direction?: 'asc' | 'desc'): this\r
  limit(value: number): this\r
  offset(value: number): this\r
  setConfig(config: QueryConfig): this\r
  execute(): Promise<Response<T[]>>\r
}\r
\r
interface QueryConfig {\r
  select?: string[];\r
  where?: WhereClause[];\r
  orderBy?: OrderByClause[];\r
  limit?: number;\r
  offset?: number;\r
}
`,paraId:22,tocIndex:15},{value:`interface SaveFileOptions {\r
  generateThumbnail?: boolean;\r
  thumbnailSize?: number;\r
  generateUrl?: boolean;\r
  validate?: (file: File) => boolean;\r
  onProgress?: (progress: Progress) => void;\r
}\r
\r
function saveFilesToDB(\r
  dbName: string,\r
  tableName: string,\r
  file: File,\r
  options?: SaveFileOptions\r
): Promise<Response>
`,paraId:23,tocIndex:17},{value:"\u4FDD\u5B58\u6587\u4EF6\u5230\u6570\u636E\u5E93\u3002",paraId:24,tocIndex:17},{value:`interface GetFileOptions {\r
  generateUrl?: boolean;\r
  type?: 'raw' | 'handled';\r
}\r
\r
function getFileFromDB(\r
  dbName: string,\r
  tableName: string,\r
  fileId: number,\r
  options?: GetFileOptions\r
): Promise<Response>
`,paraId:25,tocIndex:18},{value:"\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u6587\u4EF6\u3002",paraId:26,tocIndex:18},{value:`interface DownloadOptions {\r
  type?: 'raw' | 'handled';\r
  fileName?: string;\r
}\r
\r
function downloadFileFromDB(\r
  dbName: string,\r
  tableName: string,\r
  fileId: number,\r
  options?: DownloadOptions\r
): Promise<Response>
`,paraId:27,tocIndex:19},{value:"\u4E0B\u8F7D\u6570\u636E\u5E93\u4E2D\u7684\u6587\u4EF6\u3002",paraId:28,tocIndex:19},{value:`interface MigrationOptions {\r
  overwrite?: boolean;\r
  transform?: (data: any) => any;\r
  onProgress?: (progress: MigrationProgress) => void;\r
  validate?: (data: any) => Promise<boolean>;\r
  onComplete?: (result: any) => Promise<void>;\r
}\r
\r
function migrateData(\r
  sourceDb: string,\r
  targetDb: string,\r
  tables: string[] | '*',\r
  options?: MigrationOptions\r
): Promise<Response>
`,paraId:29,tocIndex:21},{value:"\u6570\u636E\u8FC1\u79FB\u5DE5\u5177\u3002",paraId:30,tocIndex:21},{value:`interface Response<T = any> {\r
  code: number;\r
  message: string;\r
  result?: T;\r
}
`,paraId:31,tocIndex:23},{value:`interface Progress {\r
  current: number;\r
  total: number;\r
  percentage: number;\r
  message?: string;\r
}
`,paraId:32,tocIndex:24},{value:"\u72B6\u6001\u7801",paraId:33,tocIndex:25},{value:"\u8BF4\u660E",paraId:33,tocIndex:25},{value:"200",paraId:33,tocIndex:25},{value:"\u64CD\u4F5C\u6210\u529F",paraId:33,tocIndex:25},{value:"401",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"402",paraId:33,tocIndex:25},{value:"\u8868\u540D\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"403",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25",paraId:33,tocIndex:25},{value:"405",paraId:33,tocIndex:25},{value:"\u8868\u6253\u5F00\u5931\u8D25",paraId:33,tocIndex:25},{value:"406",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93/\u8868\u5DF2\u5B58\u5728",paraId:33,tocIndex:25},{value:"407",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u5220\u9664\u5931\u8D25",paraId:33,tocIndex:25},{value:"408",paraId:33,tocIndex:25},{value:"\u8868\u5220\u9664\u5931\u8D25",paraId:33,tocIndex:25},{value:"411",paraId:33,tocIndex:25},{value:"\u8868\u4E0D\u5B58\u5728",paraId:33,tocIndex:25},{value:"412",paraId:33,tocIndex:25},{value:"\u6570\u636E\u63D2\u5165\u5931\u8D25",paraId:33,tocIndex:25},{value:"415",paraId:33,tocIndex:25},{value:"\u6570\u636E\u67E5\u8BE2\u5931\u8D25",paraId:33,tocIndex:25},{value:"416",paraId:33,tocIndex:25},{value:"\u4E3B\u952E\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"430",paraId:33,tocIndex:25},{value:"\u6570\u636E\u8FC1\u79FB\u5931\u8D25",paraId:33,tocIndex:25},{value:"436",paraId:33,tocIndex:25},{value:"\u6587\u4EF6\u683C\u5F0F\u4E0D\u652F\u6301",paraId:33,tocIndex:25},{value:"437",paraId:33,tocIndex:25},{value:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",paraId:33,tocIndex:25},{value:"500",paraId:33,tocIndex:25},{value:"\u64CD\u4F5C\u5931\u8D25(\u4E00\u822C\u9519\u8BEF)",paraId:33,tocIndex:25}]},96879:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(5671);const n=[{value:`function useDatabase(\r
  dbName: string, \r
  options?: {\r
    version?: number;\r
    onBlocked?: () => void;\r
    onUpgrade?: (event: IDBVersionChangeEvent) => void;\r
    timeout?: number;\r
    force?: boolean;\r
  }\r
): Promise<IDBDatabase>
`,paraId:0,tocIndex:2},{value:"\u521B\u5EFA\u6216\u6253\u5F00\u6570\u636E\u5E93\u3002",paraId:1,tocIndex:2},{value:`function deleteDatabase(dbName: string): Promise<Response>
`,paraId:2,tocIndex:3},{value:"\u5220\u9664\u6307\u5B9A\u6570\u636E\u5E93\u3002",paraId:3,tocIndex:3},{value:`function deleteAllDatabases(): Promise<Response>
`,paraId:4,tocIndex:4},{value:"\u5220\u9664\u6240\u6709\u6570\u636E\u5E93\u3002",paraId:5,tocIndex:4},{value:`function closeAllConnections(): Promise<void>
`,paraId:6,tocIndex:5},{value:"\u5173\u95ED\u6240\u6709\u6570\u636E\u5E93\u8FDE\u63A5\u3002",paraId:7,tocIndex:5},{value:`function getTableNames(dbName: string): Promise<Response>
`,paraId:8,tocIndex:6},{value:"\u83B7\u53D6\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868\u540D\u3002",paraId:9,tocIndex:6},{value:`interface TableOptions {\r
  keyPath?: string;\r
  autoIncrement?: boolean;\r
  version?: number;\r
  timeout?: number;\r
  force?: boolean;\r
  indexes?: Array<string | IndexConfig>;\r
}\r
\r
interface IndexConfig {\r
  name: string;\r
  type: IndexType;\r
  options?: {\r
    unique?: boolean;\r
    multiEntry?: boolean;\r
  }\r
}\r
\r
enum IndexType {\r
  UNIQUE = 'unique',\r
  MULTI_ENTRY = 'multi',\r
  NORMAL = 'normal'\r
}\r
\r
function createTable(\r
  dbName: string,\r
  tableName: string,\r
  options?: TableOptions\r
): Promise<Response>
`,paraId:10,tocIndex:8},{value:"\u521B\u5EFA\u6570\u636E\u5E93\u8868\u3002",paraId:11,tocIndex:8},{value:`function insertOne<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  data: T\r
): Promise<Response>
`,paraId:12,tocIndex:9},{value:"\u63D2\u5165\u5355\u6761\u6570\u636E\u3002",paraId:13,tocIndex:9},{value:`interface InsertManyOptions {\r
  skipDuplicates?: boolean;\r
  updateDuplicates?: boolean;\r
  batchSize?: number;\r
  onProgress?: (progress: Progress) => void;\r
}\r
\r
function insertMany<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  dataList: T[],\r
  options?: InsertManyOptions\r
): Promise<Response>
`,paraId:14,tocIndex:10},{value:"\u6279\u91CF\u63D2\u5165\u6570\u636E\u3002",paraId:15,tocIndex:10},{value:`function findByKey<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  key: any,\r
  isAll?: boolean\r
): Promise<Response<T>>
`,paraId:16,tocIndex:11},{value:"\u901A\u8FC7\u4E3B\u952E\u67E5\u8BE2\u6570\u636E\u3002",paraId:17,tocIndex:11},{value:`function findByIndex<T = any>(\r
  dbName: string,\r
  tableName: string,\r
  indexName: string,\r
  indexValue: any,\r
  isAll?: boolean\r
): Promise<Response<T>>
`,paraId:18,tocIndex:12},{value:"\u901A\u8FC7\u7D22\u5F15\u67E5\u8BE2\u6570\u636E\u3002",paraId:19,tocIndex:12},{value:`function createQuery<T = any>(\r
  dbName: string,\r
  tableName: string\r
): QueryBuilder<T>
`,paraId:20,tocIndex:14},{value:"\u521B\u5EFA\u67E5\u8BE2\u6784\u5EFA\u5668\u5B9E\u4F8B\u3002",paraId:21,tocIndex:14},{value:`class QueryBuilder<T = any> {\r
  select(...fields: string[]): this\r
  where(field: string, operator: string, value: any): this\r
  orderBy(field: string, direction?: 'asc' | 'desc'): this\r
  limit(value: number): this\r
  offset(value: number): this\r
  setConfig(config: QueryConfig): this\r
  execute(): Promise<Response<T[]>>\r
}\r
\r
interface QueryConfig {\r
  select?: string[];\r
  where?: WhereClause[];\r
  orderBy?: OrderByClause[];\r
  limit?: number;\r
  offset?: number;\r
}
`,paraId:22,tocIndex:15},{value:`interface SaveFileOptions {\r
  generateThumbnail?: boolean;\r
  thumbnailSize?: number;\r
  generateUrl?: boolean;\r
  validate?: (file: File) => boolean;\r
  onProgress?: (progress: Progress) => void;\r
}\r
\r
function saveFilesToDB(\r
  dbName: string,\r
  tableName: string,\r
  file: File,\r
  options?: SaveFileOptions\r
): Promise<Response>
`,paraId:23,tocIndex:17},{value:"\u4FDD\u5B58\u6587\u4EF6\u5230\u6570\u636E\u5E93\u3002",paraId:24,tocIndex:17},{value:`interface GetFileOptions {\r
  generateUrl?: boolean;\r
  type?: 'raw' | 'handled';\r
}\r
\r
function getFileFromDB(\r
  dbName: string,\r
  tableName: string,\r
  fileId: number,\r
  options?: GetFileOptions\r
): Promise<Response>
`,paraId:25,tocIndex:18},{value:"\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u6587\u4EF6\u3002",paraId:26,tocIndex:18},{value:`interface DownloadOptions {\r
  type?: 'raw' | 'handled';\r
  fileName?: string;\r
}\r
\r
function downloadFileFromDB(\r
  dbName: string,\r
  tableName: string,\r
  fileId: number,\r
  options?: DownloadOptions\r
): Promise<Response>
`,paraId:27,tocIndex:19},{value:"\u4E0B\u8F7D\u6570\u636E\u5E93\u4E2D\u7684\u6587\u4EF6\u3002",paraId:28,tocIndex:19},{value:`interface MigrationOptions {\r
  overwrite?: boolean;\r
  transform?: (data: any) => any;\r
  onProgress?: (progress: MigrationProgress) => void;\r
  validate?: (data: any) => Promise<boolean>;\r
  onComplete?: (result: any) => Promise<void>;\r
}\r
\r
function migrateData(\r
  sourceDb: string,\r
  targetDb: string,\r
  tables: string[] | '*',\r
  options?: MigrationOptions\r
): Promise<Response>
`,paraId:29,tocIndex:21},{value:"\u6570\u636E\u8FC1\u79FB\u5DE5\u5177\u3002",paraId:30,tocIndex:21},{value:`interface Response<T = any> {\r
  code: number;\r
  message: string;\r
  result?: T;\r
}
`,paraId:31,tocIndex:23},{value:`interface Progress {\r
  current: number;\r
  total: number;\r
  percentage: number;\r
  message?: string;\r
}
`,paraId:32,tocIndex:24},{value:"\u72B6\u6001\u7801",paraId:33,tocIndex:25},{value:"\u8BF4\u660E",paraId:33,tocIndex:25},{value:"200",paraId:33,tocIndex:25},{value:"\u64CD\u4F5C\u6210\u529F",paraId:33,tocIndex:25},{value:"401",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"402",paraId:33,tocIndex:25},{value:"\u8868\u540D\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"403",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u6253\u5F00\u5931\u8D25",paraId:33,tocIndex:25},{value:"405",paraId:33,tocIndex:25},{value:"\u8868\u6253\u5F00\u5931\u8D25",paraId:33,tocIndex:25},{value:"406",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93/\u8868\u5DF2\u5B58\u5728",paraId:33,tocIndex:25},{value:"407",paraId:33,tocIndex:25},{value:"\u6570\u636E\u5E93\u5220\u9664\u5931\u8D25",paraId:33,tocIndex:25},{value:"408",paraId:33,tocIndex:25},{value:"\u8868\u5220\u9664\u5931\u8D25",paraId:33,tocIndex:25},{value:"411",paraId:33,tocIndex:25},{value:"\u8868\u4E0D\u5B58\u5728",paraId:33,tocIndex:25},{value:"412",paraId:33,tocIndex:25},{value:"\u6570\u636E\u63D2\u5165\u5931\u8D25",paraId:33,tocIndex:25},{value:"415",paraId:33,tocIndex:25},{value:"\u6570\u636E\u67E5\u8BE2\u5931\u8D25",paraId:33,tocIndex:25},{value:"416",paraId:33,tocIndex:25},{value:"\u4E3B\u952E\u4E0D\u80FD\u4E3A\u7A7A",paraId:33,tocIndex:25},{value:"430",paraId:33,tocIndex:25},{value:"\u6570\u636E\u8FC1\u79FB\u5931\u8D25",paraId:33,tocIndex:25},{value:"436",paraId:33,tocIndex:25},{value:"\u6587\u4EF6\u683C\u5F0F\u4E0D\u652F\u6301",paraId:33,tocIndex:25},{value:"437",paraId:33,tocIndex:25},{value:"\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236",paraId:33,tocIndex:25},{value:"500",paraId:33,tocIndex:25},{value:"\u64CD\u4F5C\u5931\u8D25(\u4E00\u822C\u9519\u8BEF)",paraId:33,tocIndex:25}]},36158:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(89065);const n=[{value:"IndexedDB \u662F\u4E00\u4E2A\u5E95\u5C42\u7684 API\uFF0C\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u4E2D\u5B58\u50A8\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E\u3002\u5B83\u662F\u4E00\u4E2A\u4E8B\u52A1\u578B\u6570\u636E\u5E93\u7CFB\u7EDF\uFF0C\u4E5F\u662F\u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u9762\u5411\u5BF9\u8C61\u6570\u636E\u5E93\u3002",paraId:0,tocIndex:1},{value:"\u4E3B\u8981\u7279\u70B9:",paraId:1,tocIndex:1},{value:"\u652F\u6301\u5B58\u50A8\u5927\u91CF\u6570\u636E",paraId:2,tocIndex:1},{value:"\u63D0\u4F9B\u7D22\u5F15\u529F\u80FD",paraId:2,tocIndex:1},{value:"\u652F\u6301\u4E8B\u52A1\u64CD\u4F5C",paraId:2,tocIndex:1},{value:"\u5F02\u6B65 API \u8BBE\u8BA1",paraId:2,tocIndex:1},{value:"\u9075\u5FAA\u540C\u6E90\u7B56\u7565",paraId:2,tocIndex:1},{value:"\u6570\u636E\u5E93\u662F\u5B58\u50A8\u6570\u636E\u7684\u9876\u5C42\u5BB9\u5668\u3002",paraId:3,tocIndex:3},{value:"\u7279\u70B9:",paraId:4,tocIndex:3},{value:"\u6BCF\u4E2A\u57DF\u540D\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u6570\u636E\u5E93",paraId:5,tocIndex:3},{value:"\u6BCF\u4E2A\u6570\u636E\u5E93\u53EF\u4EE5\u8BBE\u7F6E\u7248\u672C\u53F7",paraId:5,tocIndex:3},{value:"\u652F\u6301\u7248\u672C\u5347\u7EA7\u673A\u5236",paraId:5,tocIndex:3},{value:"\u793A\u4F8B:",paraId:6,tocIndex:3},{value:`// \u521B\u5EFA/\u6253\u5F00\u6570\u636E\u5E93\r
const db = await useDatabase('myDB', {\r
  version: 1,\r
  onUpgrade: (event) => {\r
    // \u7248\u672C\u5347\u7EA7\u903B\u8F91\r
  }\r
});
`,paraId:7,tocIndex:3},{value:"\u5BF9\u8C61\u4ED3\u5E93\u7C7B\u4F3C\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u7684\u8868\uFF0C\u7528\u4E8E\u5B58\u50A8\u5177\u4F53\u6570\u636E\u3002",paraId:8,tocIndex:4},{value:"\u7279\u70B9:",paraId:9,tocIndex:4},{value:"\u6BCF\u4E2A\u6570\u636E\u5E93\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u5BF9\u8C61\u4ED3\u5E93",paraId:10,tocIndex:4},{value:"\u652F\u6301\u81EA\u589E\u4E3B\u952E",paraId:10,tocIndex:4},{value:"\u53EF\u4EE5\u521B\u5EFA\u7D22\u5F15",paraId:10,tocIndex:4},{value:"\u652F\u6301\u590D\u5408\u952E",paraId:10,tocIndex:4},{value:"\u793A\u4F8B:",paraId:11,tocIndex:4},{value:`// \u521B\u5EFA\u5BF9\u8C61\u4ED3\u5E93\r
await createTable('myDB', 'users', {\r
  keyPath: 'id',\r
  autoIncrement: true,\r
  indexes: [\r
    { name: 'email', unique: true },\r
    { name: 'age', unique: false }\r
  ]\r
});
`,paraId:12,tocIndex:4},{value:"\u7D22\u5F15\u7528\u4E8E\u4F18\u5316\u6570\u636E\u67E5\u8BE2\u6027\u80FD\u3002",paraId:13,tocIndex:5},{value:"\u7D22\u5F15\u7C7B\u578B:",paraId:14,tocIndex:5},{value:"\u666E\u901A\u7D22\u5F15:",paraId:15,tocIndex:5},{value:" \u7528\u4E8E\u5E38\u89C4\u67E5\u8BE2",paraId:15,tocIndex:5},{value:"\u552F\u4E00\u7D22\u5F15:",paraId:15,tocIndex:5},{value:" \u786E\u4FDD\u5B57\u6BB5\u503C\u552F\u4E00",paraId:15,tocIndex:5},{value:"\u591A\u503C\u7D22\u5F15:",paraId:15,tocIndex:5},{value:" \u652F\u6301\u6570\u7EC4\u5B57\u6BB5\u67E5\u8BE2",paraId:15,tocIndex:5},{value:"\u793A\u4F8B:",paraId:16,tocIndex:5},{value:`// \u7D22\u5F15\u914D\u7F6E\r
interface IndexConfig {\r
  name: string;           // \u7D22\u5F15\u5B57\u6BB5\u540D\r
  type: IndexType;        // \u7D22\u5F15\u7C7B\u578B\r
  options?: {\r
    unique?: boolean;     // \u662F\u5426\u552F\u4E00\r
    multiEntry?: boolean; // \u662F\u5426\u591A\u503C\u7D22\u5F15\r
  }\r
}\r
\r
// \u521B\u5EFA\u7D22\u5F15\u793A\u4F8B\r
const store = db.createObjectStore('users', { keyPath: 'id' });\r
store.createIndex('email', 'email', { unique: true });\r
store.createIndex('tags', 'tags', { multiEntry: true });
`,paraId:17,tocIndex:5},{value:"\u4E8B\u52A1\u7528\u4E8E\u786E\u4FDD\u6570\u636E\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u3002",paraId:18,tocIndex:6},{value:"\u7279\u70B9:",paraId:19,tocIndex:6},{value:"\u652F\u6301\u53EA\u8BFB\u548C\u8BFB\u5199\u4E8B\u52A1",paraId:20,tocIndex:6},{value:"\u81EA\u52A8\u63D0\u4EA4\u548C\u56DE\u6EDA",paraId:20,tocIndex:6},{value:"\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027",paraId:20,tocIndex:6},{value:"\u793A\u4F8B:",paraId:21,tocIndex:6},{value:`// \u4E8B\u52A1\u793A\u4F8B\r
const transaction = db.transaction(['users'], 'readwrite');\r
const store = transaction.objectStore('users');\r
\r
transaction.oncomplete = () => {\r
  console.log('\u4E8B\u52A1\u5B8C\u6210');\r
};\r
\r
transaction.onerror = () => {\r
  console.error('\u4E8B\u52A1\u5931\u8D25');\r
};
`,paraId:22,tocIndex:6},{value:"\u6E38\u6807\u7528\u4E8E\u904D\u5386\u6570\u636E\u96C6\u3002",paraId:23,tocIndex:7},{value:"\u7279\u70B9:",paraId:24,tocIndex:7},{value:"\u652F\u6301\u6B63\u5411\u548C\u53CD\u5411\u904D\u5386",paraId:25,tocIndex:7},{value:"\u53EF\u4EE5\u8BBE\u7F6E\u8303\u56F4",paraId:25,tocIndex:7},{value:"\u652F\u6301\u8FC7\u6EE4\u548C\u8DF3\u8FC7",paraId:25,tocIndex:7},{value:"\u793A\u4F8B:",paraId:26,tocIndex:7},{value:`const store = transaction.objectStore('users');\r
const request = store.openCursor();\r
\r
request.onsuccess = (event) => {\r
  const cursor = event.target.result;\r
  if (cursor) {\r
    console.log('\u5F53\u524D\u6570\u636E:', cursor.value);\r
    cursor.continue();\r
  }\r
};
`,paraId:27,tocIndex:7},{value:"IndexedDB \u53EF\u4EE5\u5B58\u50A8\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E\uFF1A",paraId:28,tocIndex:8},{value:"\u57FA\u7840\u7C7B\u578B",paraId:29,tocIndex:8},{value:"Number",paraId:30,tocIndex:8},{value:"String",paraId:30,tocIndex:8},{value:"Boolean",paraId:30,tocIndex:8},{value:"Date",paraId:30,tocIndex:8},{value:"null",paraId:30,tocIndex:8},{value:"\u590D\u6742\u7C7B\u578B",paraId:31,tocIndex:8},{value:"Object",paraId:32,tocIndex:8},{value:"Array",paraId:32,tocIndex:8},{value:"Map",paraId:32,tocIndex:8},{value:"Set",paraId:32,tocIndex:8},{value:"\u4E8C\u8FDB\u5236\u6570\u636E",paraId:33,tocIndex:8},{value:"ArrayBuffer",paraId:34,tocIndex:8},{value:"Blob",paraId:34,tocIndex:8},{value:"File",paraId:34,tocIndex:8},{value:"\u793A\u4F8B:",paraId:35,tocIndex:8},{value:`// \u5B58\u50A8\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\r
const data = {\r
  id: 1,\r
  name: 'John',\r
  active: true,\r
  birthDate: new Date(),\r
  scores: [85, 92, 78],\r
  profile: { city: 'New York' },\r
  avatar: new Blob(['...'])\r
};
`,paraId:36,tocIndex:8},{value:"IndexedDB \u91C7\u7528\u5F02\u6B65\u64CD\u4F5C\u6A21\u5F0F\uFF0C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B\u3002",paraId:37,tocIndex:9},{value:"\u7279\u70B9:",paraId:38,tocIndex:9},{value:"\u6240\u6709\u64CD\u4F5C\u90FD\u8FD4\u56DE Promise",paraId:39,tocIndex:9},{value:"\u652F\u6301\u4E8B\u4EF6\u76D1\u542C",paraId:39,tocIndex:9},{value:"\u53EF\u4EE5\u5904\u7406\u5927\u91CF\u6570\u636E",paraId:39,tocIndex:9},{value:"\u793A\u4F8B:",paraId:40,tocIndex:9},{value:`// Promise \u65B9\u5F0F\r
const result = await insertOne('myDB', 'users', userData);\r
\r
// \u4E8B\u4EF6\u76D1\u542C\u65B9\u5F0F\r
const request = store.add(userData);\r
request.onsuccess = () => {\r
  console.log('\u6570\u636E\u63D2\u5165\u6210\u529F');\r
};\r
request.onerror = () => {\r
  console.error('\u6570\u636E\u63D2\u5165\u5931\u8D25');\r
};
`,paraId:41,tocIndex:9},{value:"\u6D4F\u89C8\u5668\u5BF9 IndexedDB \u5B58\u50A8\u6709\u4E00\u5B9A\u9650\u5236\uFF1A",paraId:42,tocIndex:10},{value:"\u5B58\u50A8\u914D\u989D",paraId:43,tocIndex:10},{value:"\u901A\u5E38\u5728 50MB \u5230\u65E0\u9650\u5236\u4E4B\u95F4",paraId:44,tocIndex:10},{value:"\u53EF\u4EE5\u8BF7\u6C42\u66F4\u591A\u7A7A\u95F4",paraId:44,tocIndex:10},{value:"\u9700\u8981\u5904\u7406\u914D\u989D\u8D85\u9650",paraId:44,tocIndex:10},{value:"\u76D1\u63A7\u5B58\u50A8\u4F7F\u7528",paraId:45,tocIndex:10},{value:"const { quota, usage } = await navigator.storage.estimate();\r\nconsole.log(`\u5DF2\u4F7F\u7528: ${usage / 1024 / 1024}MB`);\r\nconsole.log(`\u603B\u914D\u989D: ${quota / 1024 / 1024}MB`);\n",paraId:46,tocIndex:10},{value:"\u5904\u7406\u5B58\u50A8\u9650\u5236",paraId:47,tocIndex:10},{value:`try {\r
  await operation();\r
} catch (error) {\r
  if (error.name === 'QuotaExceededError') {\r
    console.error('\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3');\r
    // \u6E05\u7406\u65E7\u6570\u636E\u6216\u8BF7\u6C42\u66F4\u591A\u7A7A\u95F4\r
  }\r
}
`,paraId:48,tocIndex:10}]},43093:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(78013);const n=[{value:"\u7528\u4E8E\u521B\u5EFA\u65B0\u7684\u6570\u636E\u5E93\u6216\u6253\u5F00\u5DF2\u5B58\u5728\u7684\u6570\u636E\u5E93\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570:",paraId:1,tocIndex:1},{value:"dbName: string",paraId:2,tocIndex:1},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"options?: DatabaseOptions",paraId:2,tocIndex:1},{value:` - \u914D\u7F6E\u9009\u9879
`,paraId:2,tocIndex:1},{value:"version?: number",paraId:3,tocIndex:1},{value:" - \u6570\u636E\u5E93\u7248\u672C\u53F7",paraId:3,tocIndex:1},{value:"onBlocked?: () => void",paraId:3,tocIndex:1},{value:" - \u6570\u636E\u5E93\u88AB\u963B\u585E\u65F6\u7684\u56DE\u8C03",paraId:3,tocIndex:1},{value:"onUpgrade?: (event: IDBVersionChangeEvent) => void",paraId:3,tocIndex:1},{value:" - \u7248\u672C\u5347\u7EA7\u65F6\u7684\u56DE\u8C03",paraId:3,tocIndex:1},{value:"timeout?: number",paraId:3,tocIndex:1},{value:" - \u64CD\u4F5C\u8D85\u65F6\u65F6\u95F4(\u6BEB\u79D2)",paraId:3,tocIndex:1},{value:"force?: boolean",paraId:3,tocIndex:1},{value:" - \u662F\u5426\u5F3A\u5236\u6253\u5F00\u6570\u636E\u5E93",paraId:3,tocIndex:1},{value:"\u8FD4\u56DE\u503C:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Promise<IDBDatabase>",paraId:4,tocIndex:1},{value:"\u793A\u4F8B:",paraId:5,tocIndex:1},{value:`import { useDatabase } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5\r
const db = await useDatabase('myDB');\r
\r
// \u5B8C\u6574\u914D\u7F6E\r
const db = await useDatabase('myDB', {\r
  version: 2,\r
  timeout: 5000,\r
  force: true,\r
  onBlocked: () => {\r
    console.log('\u7B49\u5F85\u5176\u4ED6\u8FDE\u63A5\u5173\u95ED...');\r
  },\r
  onUpgrade: (event) => {\r
    if (event.oldVersion < 2) {\r
      // \u7248\u672C1\u52302\u7684\u5347\u7EA7\u903B\u8F91\r
    }\r
  }\r
});
`,paraId:6,tocIndex:1},{value:"\u5220\u9664\u6307\u5B9A\u540D\u79F0\u7684\u6570\u636E\u5E93\u3002",paraId:7,tocIndex:2},{value:"\u53C2\u6570:",paraId:8,tocIndex:2},{value:"dbName: string",paraId:9,tocIndex:2},{value:" - \u8981\u5220\u9664\u7684\u6570\u636E\u5E93\u540D\u79F0",paraId:9,tocIndex:2},{value:"\u8FD4\u56DE\u503C:",paraId:10,tocIndex:2},{value:" ",paraId:10,tocIndex:2},{value:"Promise<Response>",paraId:10,tocIndex:2},{value:"\u793A\u4F8B:",paraId:11,tocIndex:2},{value:`import { deleteDatabase } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5\r
const result = await deleteDatabase('myDB');\r
\r
// \u5E26\u786E\u8BA4\u7684\u5220\u9664\r
const confirmDelete = window.confirm('\u786E\u5B9A\u8981\u5220\u9664\u6570\u636E\u5E93\u5417?');\r
if (confirmDelete) {\r
  try {\r
    await deleteDatabase('myDB');\r
    console.log('\u6570\u636E\u5E93\u5220\u9664\u6210\u529F');\r
  } catch (error) {\r
    console.error('\u5220\u9664\u5931\u8D25:', error);\r
  }\r
}
`,paraId:12,tocIndex:2},{value:"\u5220\u9664\u6D4F\u89C8\u5668\u4E2D\u6240\u6709\u7684 IndexedDB \u6570\u636E\u5E93\u3002\u6B64\u64CD\u4F5C\u9700\u8C28\u614E\u4F7F\u7528\u3002",paraId:13,tocIndex:3},{value:"\u53C2\u6570:",paraId:14,tocIndex:3},{value:" \u65E0",paraId:14,tocIndex:3},{value:"\u8FD4\u56DE\u503C:",paraId:15,tocIndex:3},{value:" ",paraId:15,tocIndex:3},{value:"Promise<Response>",paraId:15,tocIndex:3},{value:"\u793A\u4F8B:",paraId:16,tocIndex:3},{value:`import { deleteAllDatabases } from 'indexeddb-toolkit';\r
\r
try {\r
  const result = await deleteAllDatabases();\r
  if (result.code === 200) {\r
    console.log('\u6240\u6709\u6570\u636E\u5E93\u5DF2\u5220\u9664');\r
  }\r
} catch (error) {\r
  console.error('\u5220\u9664\u5931\u8D25:', error);\r
}
`,paraId:17,tocIndex:3},{value:"\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868\u540D\u3002",paraId:18,tocIndex:4},{value:"\u53C2\u6570:",paraId:19,tocIndex:4},{value:"dbName: string",paraId:20,tocIndex:4},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:20,tocIndex:4},{value:"\u8FD4\u56DE\u503C:",paraId:21,tocIndex:4},{value:" ",paraId:21,tocIndex:4},{value:"Promise<Response>",paraId:21,tocIndex:4},{value:" - \u8FD4\u56DE\u8868\u540D\u6570\u7EC4",paraId:21,tocIndex:4},{value:"\u793A\u4F8B:",paraId:22,tocIndex:4},{value:`import { getTableNames } from 'indexeddb-toolkit';\r
\r
const result = await getTableNames('myDB');\r
if (result.code === 200) {\r
  console.log('\u6570\u636E\u5E93\u8868:', result.result);\r
}
`,paraId:23,tocIndex:4},{value:"\u5173\u95ED\u6240\u6709\u6253\u5F00\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002\u901A\u5E38\u5728\u6570\u636E\u5E93\u64CD\u4F5C\u5B8C\u6210\u540E\u8C03\u7528\u3002",paraId:24,tocIndex:5},{value:"\u53C2\u6570:",paraId:25,tocIndex:5},{value:" \u65E0",paraId:25,tocIndex:5},{value:"\u8FD4\u56DE\u503C:",paraId:26,tocIndex:5},{value:" ",paraId:26,tocIndex:5},{value:"Promise<void>",paraId:26,tocIndex:5},{value:"\u793A\u4F8B:",paraId:27,tocIndex:5},{value:`import { closeAllConnections } from 'indexeddb-toolkit';\r
\r
// \u64CD\u4F5C\u5B8C\u6210\u540E\u5173\u95ED\u8FDE\u63A5\r
await closeAllConnections();
`,paraId:28,tocIndex:5},{value:"\u6BCF\u4E2A\u6570\u636E\u5E93\u64CD\u4F5C\u90FD\u53EF\u80FD\u9047\u5230\u4EE5\u4E0B\u9519\u8BEF:",paraId:29,tocIndex:6},{value:"\u7248\u672C\u51B2\u7A81 (VersionError)",paraId:30,tocIndex:6},{value:"\u539F\u56E0: \u6570\u636E\u5E93\u7248\u672C\u4E0D\u5339\u914D",paraId:31,tocIndex:6},{value:"\u5904\u7406: \u68C0\u67E5\u7248\u672C\u53F7\u6216\u5F3A\u5236\u5347\u7EA7",paraId:31,tocIndex:6},{value:"\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3 (QuotaExceededError)",paraId:32,tocIndex:6},{value:"\u539F\u56E0: \u8D85\u51FA\u6D4F\u89C8\u5668\u5B58\u50A8\u9650\u5236",paraId:33,tocIndex:6},{value:"\u5904\u7406: \u6E05\u7406\u6570\u636E\u6216\u8BF7\u6C42\u66F4\u591A\u7A7A\u95F4",paraId:33,tocIndex:6},{value:"\u6570\u636E\u5E93\u88AB\u963B\u585E (BlockedError)",paraId:34,tocIndex:6},{value:"\u539F\u56E0: \u5176\u4ED6\u8FDE\u63A5\u672A\u5173\u95ED",paraId:35,tocIndex:6},{value:"\u5904\u7406: \u7B49\u5F85\u6216\u5F3A\u5236\u5173\u95ED\u8FDE\u63A5",paraId:35,tocIndex:6},{value:"\u793A\u4F8B:",paraId:36,tocIndex:6},{value:`try {\r
  const db = await useDatabase('myDB');\r
} catch (error) {\r
  switch (error.name) {\r
    case 'VersionError':\r
      console.error('\u6570\u636E\u5E93\u7248\u672C\u51B2\u7A81');\r
      break;\r
    case 'QuotaExceededError':\r
      console.error('\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3');\r
      break;\r
    case 'BlockedError':\r
      console.error('\u6570\u636E\u5E93\u88AB\u963B\u585E');\r
      break;\r
    default:\r
      console.error('\u64CD\u4F5C\u5931\u8D25:', error);\r
  }\r
}
`,paraId:37,tocIndex:6},{value:"\u7248\u672C\u7BA1\u7406",paraId:38,tocIndex:7},{value:"\u5408\u7406\u89C4\u5212\u6570\u636E\u5E93\u7248\u672C",paraId:39,tocIndex:7},{value:"\u5B9E\u73B0\u7248\u672C\u5347\u7EA7\u903B\u8F91",paraId:39,tocIndex:7},{value:"\u5904\u7406\u7248\u672C\u51B2\u7A81",paraId:39,tocIndex:7},{value:"\u8FDE\u63A5\u7BA1\u7406",paraId:40,tocIndex:7},{value:"\u53CA\u65F6\u5173\u95ED\u4E0D\u7528\u7684\u8FDE\u63A5",paraId:41,tocIndex:7},{value:"\u5904\u7406\u963B\u585E\u4E8B\u4EF6",paraId:41,tocIndex:7},{value:"\u5B9E\u73B0\u8D85\u65F6\u673A\u5236",paraId:41,tocIndex:7},{value:"\u9519\u8BEF\u5904\u7406",paraId:42,tocIndex:7},{value:"\u6355\u83B7\u6240\u6709\u53EF\u80FD\u7684\u9519\u8BEF",paraId:43,tocIndex:7},{value:"\u5B9E\u73B0\u9519\u8BEF\u6062\u590D\u673A\u5236",paraId:43,tocIndex:7},{value:"\u63D0\u4F9B\u7528\u6237\u53CB\u597D\u7684\u9519\u8BEF\u63D0\u793A",paraId:43,tocIndex:7}]},29565:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(77511);const n=[{value:"\u5C06\u6587\u4EF6\u4FDD\u5B58\u5230 IndexedDB \u6570\u636E\u5E93\u4E2D\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570:",paraId:1,tocIndex:1},{value:"dbName: string",paraId:2,tocIndex:1},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"tableName: string",paraId:2,tocIndex:1},{value:" - \u8868\u540D\u79F0",paraId:2,tocIndex:1},{value:"file: File",paraId:2,tocIndex:1},{value:" - \u8981\u4FDD\u5B58\u7684\u6587\u4EF6",paraId:2,tocIndex:1},{value:"options?: SaveFileOptions",paraId:2,tocIndex:1},{value:` - \u4FDD\u5B58\u9009\u9879
`,paraId:2,tocIndex:1},{value:"generateThumbnail?: boolean",paraId:3,tocIndex:1},{value:" - \u662F\u5426\u751F\u6210\u7F29\u7565\u56FE(\u4EC5\u56FE\u7247)",paraId:3,tocIndex:1},{value:"thumbnailSize?: number",paraId:3,tocIndex:1},{value:" - \u7F29\u7565\u56FE\u5C3A\u5BF8",paraId:3,tocIndex:1},{value:"generateUrl?: boolean",paraId:3,tocIndex:1},{value:" - \u662F\u5426\u751F\u6210 URL",paraId:3,tocIndex:1},{value:"validate?: (file: File) => boolean",paraId:3,tocIndex:1},{value:" - \u6587\u4EF6\u9A8C\u8BC1\u51FD\u6570",paraId:3,tocIndex:1},{value:"onProgress?: (progress: Progress) => void",paraId:3,tocIndex:1},{value:" - \u8FDB\u5EA6\u56DE\u8C03",paraId:3,tocIndex:1},{value:"\u8FD4\u56DE\u503C:",paraId:4,tocIndex:1},{value:" ",paraId:4,tocIndex:1},{value:"Promise<Response<FileData>>",paraId:4,tocIndex:1},{value:"\u793A\u4F8B:",paraId:5,tocIndex:1},{value:`import { saveFilesToDB } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5\r
const fileInput = document.querySelector('input[type="file"]');\r
const result = await saveFilesToDB('myDB', 'files', fileInput.files[0]);\r
\r
// \u5B8C\u6574\u914D\u7F6E\r
const result = await saveFilesToDB('myDB', 'files', file, {\r
  generateThumbnail: true,\r
  thumbnailSize: 100,\r
  generateUrl: true,\r
  validate: (file) => {\r
    // \u9A8C\u8BC1\u6587\u4EF6\u7C7B\u578B\u548C\u5927\u5C0F\r
    const validTypes = ['image/jpeg', 'image/png'];\r
    const maxSize = 5 * 1024 * 1024; // 5MB\r
    return validTypes.includes(file.type) && file.size <= maxSize;\r
  },\r
  onProgress: (progress) => {\r
    console.log(\`\u4FDD\u5B58\u8FDB\u5EA6: \${progress.percentage}%\`);\r
  }\r
});
`,paraId:6,tocIndex:1},{value:"\u4ECE\u6570\u636E\u5E93\u83B7\u53D6\u5DF2\u4FDD\u5B58\u7684\u6587\u4EF6\u3002",paraId:7,tocIndex:2},{value:"\u53C2\u6570:",paraId:8,tocIndex:2},{value:"dbName: string",paraId:9,tocIndex:2},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:9,tocIndex:2},{value:"tableName: string",paraId:9,tocIndex:2},{value:" - \u8868\u540D\u79F0",paraId:9,tocIndex:2},{value:"fileId: number",paraId:9,tocIndex:2},{value:" - \u6587\u4EF6ID",paraId:9,tocIndex:2},{value:"options?: GetFileOptions",paraId:9,tocIndex:2},{value:` - \u83B7\u53D6\u9009\u9879
`,paraId:9,tocIndex:2},{value:"generateUrl?: boolean",paraId:10,tocIndex:2},{value:" - \u662F\u5426\u751F\u6210 URL",paraId:10,tocIndex:2},{value:"type?: 'raw' | 'handled'",paraId:10,tocIndex:2},{value:" - \u83B7\u53D6\u539F\u59CB\u6587\u4EF6\u8FD8\u662F\u5904\u7406\u540E\u7684\u6587\u4EF6",paraId:10,tocIndex:2},{value:"\u8FD4\u56DE\u503C:",paraId:11,tocIndex:2},{value:" ",paraId:11,tocIndex:2},{value:"Promise<Response<FileData>>",paraId:11,tocIndex:2},{value:"\u793A\u4F8B:",paraId:12,tocIndex:2},{value:`import { getFileFromDB } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u83B7\u53D6\r
const file = await getFileFromDB('myDB', 'files', fileId);\r
\r
// \u83B7\u53D6\u5904\u7406\u540E\u7684\u6587\u4EF6\r
const file = await getFileFromDB('myDB', 'files', fileId, {\r
  type: 'handled',\r
  generateUrl: true\r
});\r
\r
// \u4F7F\u7528\u6587\u4EF6\r
if (file.code === 200) {\r
  const img = document.createElement('img');\r
  img.src = file.result.url;\r
  document.body.appendChild(img);\r
}
`,paraId:13,tocIndex:2},{value:"\u4ECE\u6570\u636E\u5E93\u4E0B\u8F7D\u6587\u4EF6\u3002",paraId:14,tocIndex:3},{value:"\u53C2\u6570:",paraId:15,tocIndex:3},{value:"dbName: string",paraId:16,tocIndex:3},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:16,tocIndex:3},{value:"tableName: string",paraId:16,tocIndex:3},{value:" - \u8868\u540D\u79F0",paraId:16,tocIndex:3},{value:"fileId: number",paraId:16,tocIndex:3},{value:" - \u6587\u4EF6ID",paraId:16,tocIndex:3},{value:"options?: DownloadOptions",paraId:16,tocIndex:3},{value:` - \u4E0B\u8F7D\u9009\u9879
`,paraId:16,tocIndex:3},{value:"type?: 'raw' | 'handled'",paraId:17,tocIndex:3},{value:" - \u4E0B\u8F7D\u539F\u59CB\u6587\u4EF6\u8FD8\u662F\u5904\u7406\u540E\u7684\u6587\u4EF6",paraId:17,tocIndex:3},{value:"fileName?: string",paraId:17,tocIndex:3},{value:" - \u81EA\u5B9A\u4E49\u6587\u4EF6\u540D",paraId:17,tocIndex:3},{value:"\u8FD4\u56DE\u503C:",paraId:18,tocIndex:3},{value:" ",paraId:18,tocIndex:3},{value:"Promise<Response>",paraId:18,tocIndex:3},{value:"\u793A\u4F8B:",paraId:19,tocIndex:3},{value:`import { downloadFileFromDB } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u4E0B\u8F7D\r
await downloadFileFromDB('myDB', 'files', fileId);\r
\r
// \u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u4E0B\u8F7D\r
await downloadFileFromDB('myDB', 'files', fileId, {\r
  type: 'handled',\r
  fileName: 'custom-name.jpg'\r
});
`,paraId:20,tocIndex:3},{value:"\u83B7\u53D6\u8868\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u3002",paraId:21,tocIndex:4},{value:"\u53C2\u6570:",paraId:22,tocIndex:4},{value:"dbName: string",paraId:23,tocIndex:4},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:23,tocIndex:4},{value:"tableName: string",paraId:23,tocIndex:4},{value:" - \u8868\u540D\u79F0",paraId:23,tocIndex:4},{value:"options?: GetAllFilesOptions",paraId:23,tocIndex:4},{value:` - \u83B7\u53D6\u9009\u9879
`,paraId:23,tocIndex:4},{value:"generateUrl?: boolean",paraId:24,tocIndex:4},{value:" - \u662F\u5426\u751F\u6210 URL",paraId:24,tocIndex:4},{value:"page?: number",paraId:24,tocIndex:4},{value:" - \u9875\u7801",paraId:24,tocIndex:4},{value:"pageSize?: number",paraId:24,tocIndex:4},{value:" - \u6BCF\u9875\u6570\u91CF",paraId:24,tocIndex:4},{value:"\u8FD4\u56DE\u503C:",paraId:25,tocIndex:4},{value:" ",paraId:25,tocIndex:4},{value:"Promise<Response<FileData[]>>",paraId:25,tocIndex:4},{value:"\u793A\u4F8B:",paraId:26,tocIndex:4},{value:`import { getAllFiles } from 'indexeddb-toolkit';\r
\r
// \u83B7\u53D6\u6240\u6709\u6587\u4EF6\r
const files = await getAllFiles('myDB', 'files');\r
\r
// \u5206\u9875\u83B7\u53D6\r
const files = await getAllFiles('myDB', 'files', {\r
  generateUrl: true,\r
  page: 1,\r
  pageSize: 10\r
});
`,paraId:27,tocIndex:4},{value:"\u6279\u91CF\u4E0B\u8F7D\u591A\u4E2A\u6587\u4EF6\u3002",paraId:28,tocIndex:5},{value:"\u53C2\u6570:",paraId:29,tocIndex:5},{value:"dbName: string",paraId:30,tocIndex:5},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:30,tocIndex:5},{value:"tableName: string",paraId:30,tocIndex:5},{value:" - \u8868\u540D\u79F0",paraId:30,tocIndex:5},{value:"options?: DownloadAllOptions",paraId:30,tocIndex:5},{value:` - \u4E0B\u8F7D\u9009\u9879
`,paraId:30,tocIndex:5},{value:"type?: 'raw' | 'handled'",paraId:31,tocIndex:5},{value:" - \u4E0B\u8F7D\u539F\u59CB\u6587\u4EF6\u8FD8\u662F\u5904\u7406\u540E\u7684\u6587\u4EF6",paraId:31,tocIndex:5},{value:"zipName?: string",paraId:31,tocIndex:5},{value:" - \u538B\u7F29\u5305\u540D\u79F0",paraId:31,tocIndex:5},{value:"\u8FD4\u56DE\u503C:",paraId:32,tocIndex:5},{value:" ",paraId:32,tocIndex:5},{value:"Promise<Response>",paraId:32,tocIndex:5},{value:"\u793A\u4F8B:",paraId:33,tocIndex:5},{value:`import { downloadAllFiles } from 'indexeddb-toolkit';\r
\r
// \u4E0B\u8F7D\u6240\u6709\u6587\u4EF6\r
await downloadAllFiles('myDB', 'files', {\r
  type: 'raw',\r
  zipName: 'all-files.zip'\r
});
`,paraId:34,tocIndex:5},{value:`import { revokeFileUrl } from 'indexeddb-toolkit';\r
\r
// \u83B7\u53D6\u6587\u4EF6\u5E76\u521B\u5EFAURL\r
const result = await getFileFromDB('myDB', 'files', fileId, {\r
  generateUrl: true\r
});\r
\r
// \u4F7F\u7528URL\r
const img = document.createElement('img');\r
img.src = result.result.url;\r
document.body.appendChild(img);\r
\r
// \u4F7F\u7528\u5B8C\u540E\u91CA\u653EURL\r
revokeFileUrl(result.result.url);
`,paraId:35,tocIndex:6},{value:`try {\r
  const result = await saveFilesToDB('myDB', 'files', file);\r
  \r
  if (result.code === 200) {\r
    console.log('\u6587\u4EF6\u4FDD\u5B58\u6210\u529F:', result.result);\r
  } else {\r
    switch (result.code) {\r
      case 436:\r
        console.error('\u6587\u4EF6\u683C\u5F0F\u4E0D\u652F\u6301');\r
        break;\r
      case 437:\r
        console.error('\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236');\r
        break;\r
      case 438:\r
        console.error('\u6587\u4EF6\u4FDD\u5B58\u5931\u8D25');\r
        break;\r
    }\r
  }\r
} catch (error) {\r
  if (error.name === 'QuotaExceededError') {\r
    console.error('\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3');\r
  } else {\r
    console.error('\u6587\u4EF6\u64CD\u4F5C\u5931\u8D25:', error);\r
  }\r
}
`,paraId:36,tocIndex:7},{value:"\u6587\u4EF6\u9A8C\u8BC1",paraId:37,tocIndex:8},{value:"\u9A8C\u8BC1\u6587\u4EF6\u7C7B\u578B\u548C\u5927\u5C0F",paraId:38,tocIndex:8},{value:"\u68C0\u67E5\u6587\u4EF6\u5B8C\u6574\u6027",paraId:38,tocIndex:8},{value:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u89C4\u5219",paraId:38,tocIndex:8},{value:"\u6027\u80FD\u4F18\u5316",paraId:39,tocIndex:8},{value:"\u4F7F\u7528\u9002\u5F53\u7684\u7F29\u7565\u56FE\u5C3A\u5BF8",paraId:40,tocIndex:8},{value:"\u5408\u7406\u538B\u7F29\u56FE\u7247\u8D28\u91CF",paraId:40,tocIndex:8},{value:"\u53CA\u65F6\u91CA\u653E\u6587\u4EF6URL",paraId:40,tocIndex:8},{value:"\u5206\u6279\u5904\u7406\u5927\u91CF\u6587\u4EF6",paraId:40,tocIndex:8},{value:"\u5B58\u50A8\u7BA1\u7406",paraId:41,tocIndex:8},{value:"\u76D1\u63A7\u5B58\u50A8\u7A7A\u95F4\u4F7F\u7528",paraId:42,tocIndex:8},{value:"\u5B9E\u73B0\u6587\u4EF6\u6E05\u7406\u7B56\u7565",paraId:42,tocIndex:8},{value:"\u5904\u7406\u5B58\u50A8\u914D\u989D\u8D85\u9650",paraId:42,tocIndex:8},{value:"\u7528\u6237\u4F53\u9A8C",paraId:43,tocIndex:8},{value:"\u663E\u793A\u4E0A\u4F20\u8FDB\u5EA6",paraId:44,tocIndex:8},{value:"\u63D0\u4F9B\u6587\u4EF6\u9884\u89C8",paraId:44,tocIndex:8},{value:"\u652F\u6301\u62D6\u62FD\u4E0A\u4F20",paraId:44,tocIndex:8},{value:"\u5B9E\u73B0\u65AD\u70B9\u7EED\u4F20",paraId:44,tocIndex:8},{value:"\u5B89\u5168\u6027",paraId:45,tocIndex:8},{value:"\u9A8C\u8BC1\u6587\u4EF6\u7C7B\u578B",paraId:46,tocIndex:8},{value:"\u9650\u5236\u6587\u4EF6\u5927\u5C0F",paraId:46,tocIndex:8},{value:"\u751F\u6210\u5B89\u5168\u7684\u6587\u4EF6ID",paraId:46,tocIndex:8},{value:"\u63A7\u5236\u4E0B\u8F7D\u6743\u9650",paraId:46,tocIndex:8}]},39081:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(34637);const n=[{value:"\u4F7F\u7528\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u5B89\u88C5\uFF1A",paraId:0,tocIndex:1},{value:`# npm\r
npm install indexeddb-toolkit\r
\r
# yarn \r
yarn add indexeddb-toolkit\r
\r
# pnpm\r
pnpm add indexeddb-toolkit
`,paraId:1,tocIndex:1},{value:"\u9996\u5148\u9700\u8981\u521B\u5EFA\u6216\u6253\u5F00\u4E00\u4E2A\u6570\u636E\u5E93\uFF1A",paraId:2,tocIndex:3},{value:`import { useDatabase } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5\r
const db = await useDatabase('myDB');\r
\r
// \u5E26\u7248\u672C\u63A7\u5236\r
const db = await useDatabase('myDB', {\r
  version: 1,\r
  onUpgrade: (event) => {\r
    // \u7248\u672C\u5347\u7EA7\u65F6\u7684\u5904\u7406\u903B\u8F91\r
  }\r
});
`,paraId:3,tocIndex:3},{value:"\u521B\u5EFA\u8868\u6765\u5B58\u50A8\u6570\u636E\uFF1A",paraId:4,tocIndex:4},{value:`import { createTable } from 'indexeddb-toolkit';\r
\r
// \u521B\u5EFA\u7528\u6237\u8868\r
await createTable('myDB', 'users', {\r
  keyPath: 'id',                // \u4E3B\u952E\u5B57\u6BB5\r
  autoIncrement: true,          // \u81EA\u52A8\u9012\u589E\r
  indexes: [\r
    'name',                     // \u666E\u901A\u7D22\u5F15\r
    { name: 'email', type: 'unique' },     // \u552F\u4E00\u7D22\u5F15\r
    { name: 'tags', type: 'multi' }        // \u591A\u503C\u7D22\u5F15\r
  ]\r
});
`,paraId:5,tocIndex:4},{value:`import { insertOne, insertMany } from 'indexeddb-toolkit';\r
\r
// \u63D2\u5165\u5355\u6761\u6570\u636E\r
const user = {\r
  name: 'John Doe',\r
  email: 'john@example.com',\r
  age: 25,\r
  tags: ['admin', 'active']\r
};\r
await insertOne('myDB', 'users', user);\r
\r
// \u6279\u91CF\u63D2\u5165\r
const users = [\r
  { name: 'John', email: 'john@example.com' },\r
  { name: 'Jane', email: 'jane@example.com' }\r
];\r
await insertMany('myDB', 'users', users);
`,paraId:6,tocIndex:6},{value:`import { findByKey, findByIndex, createQuery } from 'indexeddb-toolkit';\r
\r
// \u4E3B\u952E\u67E5\u8BE2\r
const user = await findByKey('myDB', 'users', 1);\r
\r
// \u7D22\u5F15\u67E5\u8BE2\r
const userByEmail = await findByIndex('myDB', 'users', 'email', 'john@example.com');\r
\r
// \u4F7F\u7528\u67E5\u8BE2\u6784\u5EFA\u5668\r
const query = createQuery('myDB', 'users');\r
const results = await query.chain\r
  .select('name', 'email')\r
  .where('age', '>', 18)\r
  .orderBy('name', 'asc')\r
  .limit(10)\r
  .execute();
`,paraId:7,tocIndex:7},{value:`import { updateDataByPrimaryKey, updateDataByIndex } from 'indexeddb-toolkit';\r
\r
// \u901A\u8FC7\u4E3B\u952E\u66F4\u65B0\r
await updateDataByPrimaryKey('myDB', 'users', 1, {\r
  age: 26,\r
  status: 'active'\r
});\r
\r
// \u901A\u8FC7\u7D22\u5F15\u66F4\u65B0\r
await updateDataByIndex('myDB', 'users', 'email', 'john@example.com', {\r
  status: 'inactive'\r
});
`,paraId:8,tocIndex:8},{value:`import { deleteOneByPk, deleteManyByPK } from 'indexeddb-toolkit';\r
\r
// \u5220\u9664\u5355\u6761\u8BB0\u5F55\r
await deleteOneByPk('myDB', 'users', 1);\r
\r
// \u6279\u91CF\u5220\u9664\r
await deleteManyByPK('myDB', 'users', [1, 2, 3]);
`,paraId:9,tocIndex:9},{value:`import { saveFilesToDB, getFileFromDB } from 'indexeddb-toolkit';\r
\r
// \u4FDD\u5B58\u6587\u4EF6\r
const fileInput = document.querySelector('input[type="file"]');\r
const result = await saveFilesToDB('myDB', 'files', fileInput.files[0], {\r
  generateThumbnail: true,  // \u751F\u6210\u7F29\u7565\u56FE\r
  thumbnailSize: 100       // \u7F29\u7565\u56FE\u5C3A\u5BF8\r
});\r
\r
// \u83B7\u53D6\u6587\u4EF6\r
const file = await getFileFromDB('myDB', 'files', result.data.id);
`,paraId:10,tocIndex:10},{value:`import { migrateData } from 'indexeddb-toolkit';\r
\r
// \u6570\u636E\u8FC1\u79FB\r
await migrateData('oldDB', 'newDB', '*', {\r
  onProgress: (progress) => {\r
    console.log(\`\u8FC1\u79FB\u8FDB\u5EA6: \${progress.percentage}%\`);\r
  }\r
});
`,paraId:11,tocIndex:11},{value:"\u5E93\u63D0\u4F9B\u5B8C\u6574\u7684 TypeScript \u7C7B\u578B\u652F\u6301\uFF1A",paraId:12,tocIndex:12},{value:`// \u5B9A\u4E49\u6570\u636E\u7C7B\u578B\r
interface User {\r
  id?: number;\r
  name: string;\r
  email: string;\r
  age: number;\r
  tags?: string[];\r
}\r
\r
// \u4F7F\u7528\u7C7B\u578B\r
const query = createQuery<User>('myDB', 'users');\r
const users = await query.chain\r
  .select('name', 'email')\r
  .where('age', '>', 18)\r
  .execute();\r
// users.result \u7C7B\u578B\u4E3A User[]
`,paraId:13,tocIndex:12},{value:"\u63A8\u8350\u4F7F\u7528 try-catch \u5904\u7406\u6240\u6709\u64CD\u4F5C\uFF1A",paraId:14,tocIndex:13},{value:`try {\r
  const result = await operation();\r
  if (result.code === 200) {\r
    console.log('\u64CD\u4F5C\u6210\u529F:', result.result);\r
  } else {\r
    console.error('\u64CD\u4F5C\u5931\u8D25:', result.message);\r
  }\r
} catch (error) {\r
  if (error.name === 'QuotaExceededError') {\r
    console.error('\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3');\r
  } else {\r
    console.error('\u64CD\u4F5C\u5F02\u5E38:', error);\r
  }\r
}
`,paraId:15,tocIndex:13},{value:"\u67E5\u770B ",paraId:16,tocIndex:14},{value:"\u6570\u636E\u5E93\u64CD\u4F5C",paraId:17,tocIndex:14},{value:" \u4E86\u89E3\u66F4\u591A\u6570\u636E\u5E93\u64CD\u4F5C",paraId:16,tocIndex:14},{value:"\u67E5\u770B ",paraId:16,tocIndex:14},{value:"\u8868\u64CD\u4F5C",paraId:18,tocIndex:14},{value:" \u4E86\u89E3\u66F4\u591A\u8868\u64CD\u4F5C",paraId:16,tocIndex:14},{value:"\u67E5\u770B ",paraId:16,tocIndex:14},{value:"\u67E5\u8BE2\u6784\u5EFA\u5668",paraId:19,tocIndex:14},{value:" \u4E86\u89E3\u9AD8\u7EA7\u67E5\u8BE2\u529F\u80FD",paraId:16,tocIndex:14},{value:"\u67E5\u770B ",paraId:16,tocIndex:14},{value:"\u6587\u4EF6\u5B58\u50A8",paraId:20,tocIndex:14},{value:" \u4E86\u89E3\u6587\u4EF6\u64CD\u4F5C",paraId:16,tocIndex:14},{value:"\u67E5\u770B ",paraId:16,tocIndex:14},{value:"\u6570\u636E\u8FC1\u79FB",paraId:21,tocIndex:14},{value:" \u4E86\u89E3\u6570\u636E\u8FC1\u79FB\u529F\u80FD",paraId:16,tocIndex:14}]},10092:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(61378);const n=[{value:"IndexedDB Toolkit \u662F\u4E00\u4E2A\u73B0\u4EE3\u5316\u7684 IndexedDB \u5DE5\u5177\u5E93\uFF0C\u63D0\u4F9B\u4E86\u7B80\u5355\u6613\u7528\u7684 API \u6765\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684 IndexedDB \u6570\u636E\u5E93\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B Promise \u5316\u7684 API",paraId:1,tocIndex:2},{value:"\u652F\u6301\u94FE\u5F0F\u8C03\u7528",paraId:1,tocIndex:2},{value:"\u81EA\u52A8\u5904\u7406\u8FDE\u63A5\u7BA1\u7406",paraId:1,tocIndex:2},{value:"\u7B80\u5316\u9519\u8BEF\u5904\u7406",paraId:1,tocIndex:2},{value:"\u5B8C\u6574\u7684\u6570\u636E\u5E93\u64CD\u4F5C",paraId:2,tocIndex:3},{value:"\u5F3A\u5927\u7684\u67E5\u8BE2\u6784\u5EFA\u5668",paraId:2,tocIndex:3},{value:"\u6587\u4EF6\u5B58\u50A8\u652F\u6301",paraId:2,tocIndex:3},{value:"\u6570\u636E\u8FC1\u79FB\u5DE5\u5177",paraId:2,tocIndex:3},{value:"\u5B8C\u6574\u7684 TypeScript \u652F\u6301",paraId:3,tocIndex:4},{value:"\u667A\u80FD\u7C7B\u578B\u63A8\u5BFC",paraId:3,tocIndex:4},{value:"\u8FD0\u884C\u65F6\u7C7B\u578B\u68C0\u67E5",paraId:3,tocIndex:4},{value:"\u7C7B\u578B\u5B89\u5168\u7684\u67E5\u8BE2",paraId:3,tocIndex:4},{value:"\u81EA\u52A8\u7D22\u5F15\u7BA1\u7406",paraId:4,tocIndex:5},{value:"\u6279\u91CF\u64CD\u4F5C\u652F\u6301",paraId:4,tocIndex:5},{value:"\u8FDE\u63A5\u6C60\u4F18\u5316",paraId:4,tocIndex:5},{value:"\u5185\u5B58\u4F7F\u7528\u4F18\u5316",paraId:4,tocIndex:5},{value:"\u8BE6\u7EC6\u7684\u9519\u8BEF\u4FE1\u606F",paraId:5,tocIndex:6},{value:"\u5B8C\u6574\u7684\u8FDB\u5EA6\u56DE\u8C03",paraId:5,tocIndex:6},{value:"\u4E30\u5BCC\u7684\u8C03\u8BD5\u4FE1\u606F",paraId:5,tocIndex:6},{value:"\u652F\u6301\u5F02\u6B65/await",paraId:5,tocIndex:6},{value:`# npm\r
npm install indexeddb-toolkit\r
\r
# yarn\r
yarn add indexeddb-toolkit\r
\r
# pnpm\r
pnpm add indexeddb-toolkit
`,paraId:6,tocIndex:8},{value:`import { useDatabase, createTable, insertOne } from 'indexeddb-toolkit';\r
\r
// \u521B\u5EFA\u6570\u636E\u5E93\u548C\u8868\r
await useDatabase('myDB');\r
await createTable('myDB', 'users', {\r
  keyPath: 'id',\r
  indexes: ['name', 'email']\r
});\r
\r
// \u63D2\u5165\u6570\u636E\r
await insertOne('myDB', 'users', {\r
  name: 'John Doe',\r
  email: 'john@example.com'\r
});\r
\r
// \u4F7F\u7528\u67E5\u8BE2\u6784\u5EFA\u5668\r
const query = createQuery('myDB', 'users');\r
const users = await query.chain\r
  .where('age', '>', 18)\r
  .orderBy('name')\r
  .limit(10)\r
  .execute();
`,paraId:7,tocIndex:9},{value:"\u521B\u5EFA/\u6253\u5F00\u6570\u636E\u5E93",paraId:8,tocIndex:11},{value:"\u5220\u9664\u6570\u636E\u5E93",paraId:8,tocIndex:11},{value:"\u7248\u672C\u7BA1\u7406",paraId:8,tocIndex:11},{value:"\u8FDE\u63A5\u7BA1\u7406",paraId:8,tocIndex:11},{value:"\u521B\u5EFA/\u5220\u9664\u8868",paraId:9,tocIndex:12},{value:"\u7D22\u5F15\u7BA1\u7406",paraId:9,tocIndex:12},{value:"\u6570\u636E\u589E\u5220\u6539\u67E5",paraId:9,tocIndex:12},{value:"\u6279\u91CF\u64CD\u4F5C",paraId:9,tocIndex:12},{value:"\u6761\u4EF6\u67E5\u8BE2",paraId:10,tocIndex:13},{value:"\u6392\u5E8F\u5206\u9875",paraId:10,tocIndex:13},{value:"\u94FE\u5F0F\u8C03\u7528",paraId:10,tocIndex:13},{value:"\u7C7B\u578B\u5B89\u5168",paraId:10,tocIndex:13},{value:"\u6587\u4EF6\u4FDD\u5B58",paraId:11,tocIndex:14},{value:"\u7F29\u7565\u56FE\u751F\u6210",paraId:11,tocIndex:14},{value:"\u6587\u4EF6\u4E0B\u8F7D",paraId:11,tocIndex:14},{value:"\u6279\u91CF\u5904\u7406",paraId:11,tocIndex:14},{value:"\u6570\u636E\u5BFC\u5165\u5BFC\u51FA",paraId:12,tocIndex:15},{value:"\u7248\u672C\u5347\u7EA7",paraId:12,tocIndex:15},{value:"\u6570\u636E\u9A8C\u8BC1",paraId:12,tocIndex:15},{value:"\u8FDB\u5EA6\u76D1\u63A7",paraId:12,tocIndex:15},{value:"\u5FEB\u901F\u5F00\u59CB",paraId:13,tocIndex:16},{value:" - 5\u5206\u949F\u4E0A\u624B\u6559\u7A0B",paraId:14,tocIndex:16},{value:"\u57FA\u7840\u6982\u5FF5",paraId:15,tocIndex:16},{value:" - \u4E86\u89E3\u6838\u5FC3\u6982\u5FF5",paraId:14,tocIndex:16},{value:"\u6570\u636E\u5E93\u64CD\u4F5C",paraId:16,tocIndex:16},{value:" - \u6570\u636E\u5E93\u7BA1\u7406\u6307\u5357",paraId:14,tocIndex:16},{value:"\u8868\u64CD\u4F5C",paraId:17,tocIndex:16},{value:" - \u8868\u548C\u7D22\u5F15\u64CD\u4F5C",paraId:14,tocIndex:16},{value:"\u67E5\u8BE2\u6784\u5EFA\u5668",paraId:18,tocIndex:16},{value:" - \u9AD8\u7EA7\u67E5\u8BE2\u529F\u80FD",paraId:14,tocIndex:16},{value:"\u6587\u4EF6\u5B58\u50A8",paraId:19,tocIndex:16},{value:" - \u6587\u4EF6\u64CD\u4F5C\u6307\u5357",paraId:14,tocIndex:16},{value:"\u6570\u636E\u8FC1\u79FB",paraId:20,tocIndex:16},{value:" - \u6570\u636E\u8FC1\u79FB\u5DE5\u5177",paraId:14,tocIndex:16},{value:"API \u53C2\u8003",paraId:21,tocIndex:16},{value:" - \u8BE6\u7EC6 API \u6587\u6863",paraId:14,tocIndex:16},{value:"\u6211\u4EEC\u6B22\u8FCE\u6240\u6709\u5F62\u5F0F\u7684\u8D21\u732E\uFF1A",paraId:22,tocIndex:17},{value:"\u63D0\u4EA4 Issue \u62A5\u544A\u95EE\u9898",paraId:23,tocIndex:17},{value:"\u63D0\u4EA4 PR \u6539\u8FDB\u4EE3\u7801",paraId:23,tocIndex:17},{value:"\u5B8C\u5584\u6587\u6863",paraId:23,tocIndex:17},{value:"\u5206\u4EAB\u4F7F\u7528\u7ECF\u9A8C",paraId:23,tocIndex:17},{value:"MIT License - ",paraId:24,tocIndex:18},{value:"\u67E5\u770B\u8BE6\u60C5",paraId:25,tocIndex:18}]},42431:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(50084);const n=[{value:"\u7528\u4E8E\u5728\u4E0D\u540C\u6570\u636E\u5E93\u4E4B\u95F4\u8FC1\u79FB\u6570\u636E\uFF0C\u652F\u6301\u6570\u636E\u8F6C\u6362\u548C\u8FDB\u5EA6\u76D1\u63A7\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570:",paraId:1,tocIndex:1},{value:"sourceDb: string",paraId:2,tocIndex:1},{value:" - \u6E90\u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"targetDb: string",paraId:2,tocIndex:1},{value:" - \u76EE\u6807\u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"tables: string[] | '*'",paraId:2,tocIndex:1},{value:" - \u8981\u8FC1\u79FB\u7684\u8868\uFF0C'*' \u8868\u793A\u6240\u6709\u8868",paraId:2,tocIndex:1},{value:"options?: MigrationOptions",paraId:2,tocIndex:1},{value:" - \u8FC1\u79FB\u914D\u7F6E\u9009\u9879",paraId:2,tocIndex:1},{value:"\u914D\u7F6E\u9009\u9879:",paraId:3,tocIndex:1},{value:`interface MigrationOptions {\r
  overwrite?: boolean;      // \u662F\u5426\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u6570\u636E\r
  transform?: (data: any) => any;  // \u6570\u636E\u8F6C\u6362\u51FD\u6570\r
  onProgress?: (progress: MigrationProgress) => void; // \u8FDB\u5EA6\u56DE\u8C03\r
  validate?: (data: any) => Promise<boolean>;  // \u6570\u636E\u9A8C\u8BC1\u51FD\u6570\r
  onComplete?: (result: any) => Promise<void>; // \u5B8C\u6210\u56DE\u8C03\r
}\r
\r
interface MigrationProgress {\r
  phase: 'reading' | 'writing';  // \u5F53\u524D\u9636\u6BB5\r
  current: number;              // \u5F53\u524D\u8FDB\u5EA6\r
  total: number;               // \u603B\u6570\r
  percentage: number;          // \u767E\u5206\u6BD4\r
  message: string;            // \u8FDB\u5EA6\u4FE1\u606F\r
}
`,paraId:4,tocIndex:1},{value:"\u8FD4\u56DE\u503C:",paraId:5,tocIndex:1},{value:" ",paraId:5,tocIndex:1},{value:"Promise<Response>",paraId:5,tocIndex:1},{value:"\u793A\u4F8B:",paraId:6,tocIndex:1},{value:`import { migrateData } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u8FC1\u79FB - \u8FC1\u79FB\u6240\u6709\u8868\r
const result = await migrateData('oldDB', 'newDB', '*');\r
\r
// \u9009\u62E9\u6027\u8FC1\u79FB - \u53EA\u8FC1\u79FB\u6307\u5B9A\u8868\r
const result = await migrateData('oldDB', 'newDB', ['users', 'orders']);\r
\r
// \u5B8C\u6574\u914D\u7F6E\u8FC1\u79FB\r
const result = await migrateData('oldDB', 'newDB', '*', {\r
  overwrite: true,\r
  transform: (data) => {\r
    // \u6570\u636E\u8F6C\u6362\u903B\u8F91\r
    if (data.tableName === 'users') {\r
      return data.children.map(user => ({\r
        ...user,\r
        fullName: \`\${user.firstName} \${user.lastName}\`,\r
        age: Number(user.age),\r
        status: user.status || 'active',\r
        updatedAt: new Date().toISOString()\r
      }));\r
    }\r
    return data;\r
  },\r
  onProgress: (progress) => {\r
    console.log(\`\${progress.phase} \u9636\u6BB5: \${progress.percentage}%\`);\r
    console.log(progress.message);\r
  }\r
});
`,paraId:7,tocIndex:1},{value:"\u5728\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u9A8C\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u6B63\u786E\u6027\u3002",paraId:8,tocIndex:2},{value:"\u793A\u4F8B:",paraId:9,tocIndex:2},{value:`// \u8FC1\u79FB\u524D\u9A8C\u8BC1\r
const result = await migrateData('oldDB', 'newDB', '*', {\r
  validate: async (data) => {\r
    // \u9A8C\u8BC1\u6570\u636E\u7ED3\u6784\r
    if (!data.tableName || !Array.isArray(data.children)) {\r
      throw new Error('\u65E0\u6548\u7684\u6570\u636E\u683C\u5F0F');\r
    }\r
    \r
    // \u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027\r
    for (const item of data.children) {\r
      if (!item.id) {\r
        throw new Error('\u6570\u636E\u7F3A\u5C11ID\u5B57\u6BB5');\r
      }\r
    }\r
    \r
    return true;\r
  }\r
});\r
\r
// \u8FC1\u79FB\u540E\u9A8C\u8BC1\r
const result = await migrateData('oldDB', 'newDB', '*', {\r
  onComplete: async (result) => {\r
    // \u9A8C\u8BC1\u8FC1\u79FB\u7ED3\u679C\r
    const sourceData = await findDBData('oldDB');\r
    const targetData = await findDBData('newDB');\r
    \r
    // \u6BD4\u8F83\u6570\u636E\u6570\u91CF\r
    if (sourceData.length !== targetData.length) {\r
      throw new Error('\u6570\u636E\u6570\u91CF\u4E0D\u5339\u914D');\r
    }\r
    \r
    // \u9A8C\u8BC1\u6570\u636E\u4E00\u81F4\u6027\r
    for (let i = 0; i < sourceData.length; i++) {\r
      if (!isDataEqual(sourceData[i], targetData[i])) {\r
        throw new Error(\`\u6570\u636E\u4E0D\u4E00\u81F4: \${sourceData[i].id}\`);\r
      }\r
    }\r
  }\r
});
`,paraId:10,tocIndex:2},{value:"\u5728\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u5904\u7406\u6570\u636E\u5E93\u7248\u672C\u5347\u7EA7\u3002",paraId:11,tocIndex:3},{value:"\u793A\u4F8B:",paraId:12,tocIndex:3},{value:`const result = await migrateData('oldDB', 'newDB', '*', {\r
  onUpgrade: (event) => {\r
    const db = event.target.result;\r
    const oldVersion = event.oldVersion;\r
    \r
    if (oldVersion < 2) {\r
      // \u7248\u672C1\u52302\u7684\u5347\u7EA7\r
      const store = db.createObjectStore('users', {\r
        keyPath: 'id',\r
        autoIncrement: true\r
      });\r
      store.createIndex('email', 'email', { unique: true });\r
    }\r
    \r
    if (oldVersion < 3) {\r
      // \u7248\u672C2\u52303\u7684\u5347\u7EA7\r
      const store = db.transaction('users', 'readwrite')\r
        .objectStore('users');\r
      \r
      // \u6DFB\u52A0\u65B0\u7D22\u5F15\r
      store.createIndex('age', 'age');\r
      \r
      // \u66F4\u65B0\u73B0\u6709\u6570\u636E\r
      store.openCursor().onsuccess = (event) => {\r
        const cursor = event.target.result;\r
        if (cursor) {\r
          const data = cursor.value;\r
          data.age = data.age || 0;\r
          cursor.update(data);\r
          cursor.continue();\r
        }\r
      };\r
    }\r
  }\r
});
`,paraId:13,tocIndex:3},{value:`try {\r
  const result = await migrateData('oldDB', 'newDB', '*');\r
  \r
  if (result.code === 200) {\r
    console.log('\u8FC1\u79FB\u6210\u529F:', result.result);\r
  } else {\r
    switch (result.code) {\r
      case 430:\r
        console.error('\u6570\u636E\u8FC1\u79FB\u5931\u8D25');\r
        break;\r
      case 431:\r
        console.error('\u6E90\u6570\u636E\u5E93\u4E0D\u5B58\u5728');\r
        break;\r
      case 432:\r
        console.error('\u76EE\u6807\u6570\u636E\u5E93\u521B\u5EFA\u5931\u8D25');\r
        break;\r
      default:\r
        console.error('\u8FC1\u79FB\u5931\u8D25:', result.message);\r
    }\r
  }\r
} catch (error) {\r
  if (error.name === 'QuotaExceededError') {\r
    console.error('\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3');\r
  } else if (error.name === 'VersionError') {\r
    console.error('\u7248\u672C\u51B2\u7A81');\r
  } else {\r
    console.error('\u8FC1\u79FB\u5F02\u5E38:', error);\r
  }\r
}
`,paraId:14,tocIndex:4},{value:"\u8FC1\u79FB\u7B56\u7565",paraId:15,tocIndex:5},{value:"\u5236\u5B9A\u6E05\u6670\u7684\u8FC1\u79FB\u8BA1\u5212",paraId:16,tocIndex:5},{value:"\u5206\u6279\u5904\u7406\u5927\u91CF\u6570\u636E",paraId:16,tocIndex:5},{value:"\u5B9E\u73B0\u6570\u636E\u9A8C\u8BC1\u673A\u5236",paraId:16,tocIndex:5},{value:"\u4FDD\u7559\u8FC1\u79FB\u65E5\u5FD7",paraId:16,tocIndex:5},{value:"\u6570\u636E\u5904\u7406",paraId:17,tocIndex:5},{value:"\u6E05\u7406\u65E0\u6548\u6570\u636E",paraId:18,tocIndex:5},{value:"\u8F6C\u6362\u6570\u636E\u683C\u5F0F",paraId:18,tocIndex:5},{value:"\u5904\u7406\u7279\u6B8A\u5B57\u6BB5",paraId:18,tocIndex:5},{value:"\u4FDD\u6301\u6570\u636E\u4E00\u81F4\u6027",paraId:18,tocIndex:5},{value:"\u9519\u8BEF\u6062\u590D",paraId:19,tocIndex:5},{value:"\u5B9E\u73B0\u56DE\u6EDA\u673A\u5236",paraId:20,tocIndex:5},{value:"\u4FDD\u5B58\u4E2D\u95F4\u72B6\u6001",paraId:20,tocIndex:5},{value:"\u652F\u6301\u65AD\u70B9\u7EED\u4F20",paraId:20,tocIndex:5},{value:"\u63D0\u4F9B\u91CD\u8BD5\u673A\u5236",paraId:20,tocIndex:5},{value:"\u6027\u80FD\u4F18\u5316",paraId:21,tocIndex:5},{value:"\u4F7F\u7528\u6279\u91CF\u64CD\u4F5C",paraId:22,tocIndex:5},{value:"\u63A7\u5236\u4E8B\u52A1\u5927\u5C0F",paraId:22,tocIndex:5},{value:"\u4F18\u5316\u5185\u5B58\u4F7F\u7528",paraId:22,tocIndex:5},{value:"\u76D1\u63A7\u8FC1\u79FB\u8FDB\u5EA6",paraId:22,tocIndex:5},{value:"\u7248\u672C\u7BA1\u7406",paraId:23,tocIndex:5},{value:"\u89C4\u5212\u7248\u672C\u5347\u7EA7\u8DEF\u5F84",paraId:24,tocIndex:5},{value:"\u5904\u7406\u7248\u672C\u517C\u5BB9\u6027",paraId:24,tocIndex:5},{value:"\u4FDD\u7559\u7248\u672C\u5386\u53F2",paraId:24,tocIndex:5},{value:"\u652F\u6301\u7248\u672C\u56DE\u9000",paraId:24,tocIndex:5}]},52174:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(79779);const n=[{value:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u67E5\u8BE2\u6784\u5EFA\u5668\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u6784\u5EFA\u590D\u6742\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570:",paraId:1,tocIndex:1},{value:"dbName: string",paraId:2,tocIndex:1},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"tableName: string",paraId:2,tocIndex:1},{value:" - \u8868\u540D\u79F0",paraId:2,tocIndex:1},{value:"\u8FD4\u56DE\u503C:",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"QueryBuilder<T>",paraId:3,tocIndex:1},{value:"\u793A\u4F8B:",paraId:4,tocIndex:1},{value:`import { createQuery } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5\r
const query = createQuery('myDB', 'users');\r
\r
// \u5E26\u7C7B\u578B\u7684\u67E5\u8BE2\u6784\u5EFA\u5668\r
interface User {\r
  id: number;\r
  name: string;\r
  age: number;\r
  email: string;\r
  tags: string[];\r
}\r
const query = createQuery<User>('myDB', 'users');
`,paraId:5,tocIndex:1},{value:"\u6307\u5B9A\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5\u3002",paraId:6,tocIndex:3},{value:"\u53C2\u6570:",paraId:7,tocIndex:3},{value:"...fields: string[]",paraId:8,tocIndex:3},{value:" - \u8981\u9009\u62E9\u7684\u5B57\u6BB5\u540D\u79F0",paraId:8,tocIndex:3},{value:"\u8FD4\u56DE\u503C:",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"this",paraId:9,tocIndex:3},{value:" - \u652F\u6301\u94FE\u5F0F\u8C03\u7528",paraId:9,tocIndex:3},{value:"\u793A\u4F8B:",paraId:10,tocIndex:3},{value:`// \u9009\u62E9\u7279\u5B9A\u5B57\u6BB5\r
const results = await query.chain\r
  .select('name', 'email')\r
  .execute();\r
\r
// \u9009\u62E9\u6240\u6709\u5B57\u6BB5\r
const results = await query.chain\r
  .select('*')\r
  .execute();
`,paraId:11,tocIndex:3},{value:"\u6DFB\u52A0\u67E5\u8BE2\u6761\u4EF6\u3002",paraId:12,tocIndex:4},{value:"\u53C2\u6570:",paraId:13,tocIndex:4},{value:"field: string",paraId:14,tocIndex:4},{value:" - \u5B57\u6BB5\u540D",paraId:14,tocIndex:4},{value:"operator: string",paraId:14,tocIndex:4},{value:" - \u64CD\u4F5C\u7B26",paraId:14,tocIndex:4},{value:"value: any",paraId:14,tocIndex:4},{value:" - \u6BD4\u8F83\u503C",paraId:14,tocIndex:4},{value:"\u652F\u6301\u7684\u64CD\u4F5C\u7B26:",paraId:15,tocIndex:4},{value:"=",paraId:16,tocIndex:4},{value:" - \u7B49\u4E8E",paraId:16,tocIndex:4},{value:"!=",paraId:16,tocIndex:4},{value:" - \u4E0D\u7B49\u4E8E",paraId:16,tocIndex:4},{value:">",paraId:16,tocIndex:4},{value:" - \u5927\u4E8E",paraId:16,tocIndex:4},{value:">=",paraId:16,tocIndex:4},{value:" - \u5927\u4E8E\u7B49\u4E8E",paraId:16,tocIndex:4},{value:"<",paraId:16,tocIndex:4},{value:" - \u5C0F\u4E8E",paraId:16,tocIndex:4},{value:"<=",paraId:16,tocIndex:4},{value:" - \u5C0F\u4E8E\u7B49\u4E8E",paraId:16,tocIndex:4},{value:"between",paraId:16,tocIndex:4},{value:" - \u8303\u56F4\u67E5\u8BE2",paraId:16,tocIndex:4},{value:"in",paraId:16,tocIndex:4},{value:" - IN \u67E5\u8BE2",paraId:16,tocIndex:4},{value:"like",paraId:16,tocIndex:4},{value:" - \u6A21\u7CCA\u67E5\u8BE2",paraId:16,tocIndex:4},{value:"\u793A\u4F8B:",paraId:17,tocIndex:4},{value:`// \u57FA\u7840\u6BD4\u8F83\r
const adults = await query.chain\r
  .where('age', '>', 18)\r
  .execute();\r
\r
// \u591A\u6761\u4EF6\u7EC4\u5408\r
const activeAdults = await query.chain\r
  .where('age', '>', 18)\r
  .where('status', '=', 'active')\r
  .execute();\r
\r
// \u8303\u56F4\u67E5\u8BE2\r
const users = await query.chain\r
  .where('age', 'between', [18, 30])\r
  .execute();\r
\r
// IN \u67E5\u8BE2\r
const admins = await query.chain\r
  .where('role', 'in', ['admin', 'superadmin'])\r
  .execute();\r
\r
// \u6A21\u7CCA\u67E5\u8BE2\r
const johns = await query.chain\r
  .where('name', 'like', 'John%')\r
  .execute();
`,paraId:18,tocIndex:4},{value:"\u6307\u5B9A\u7ED3\u679C\u96C6\u7684\u6392\u5E8F\u65B9\u5F0F\u3002",paraId:19,tocIndex:5},{value:"\u53C2\u6570:",paraId:20,tocIndex:5},{value:"field: string",paraId:21,tocIndex:5},{value:" - \u6392\u5E8F\u5B57\u6BB5",paraId:21,tocIndex:5},{value:"direction?: 'asc' | 'desc'",paraId:21,tocIndex:5},{value:" - \u6392\u5E8F\u65B9\u5411\uFF0C\u9ED8\u8BA4 'asc'",paraId:21,tocIndex:5},{value:"\u8FD4\u56DE\u503C:",paraId:22,tocIndex:5},{value:" ",paraId:22,tocIndex:5},{value:"this",paraId:22,tocIndex:5},{value:" - \u652F\u6301\u94FE\u5F0F\u8C03\u7528",paraId:22,tocIndex:5},{value:"\u793A\u4F8B:",paraId:23,tocIndex:5},{value:`// \u5355\u5B57\u6BB5\u6392\u5E8F\r
const results = await query.chain\r
  .orderBy('age', 'desc')\r
  .execute();\r
\r
// \u591A\u5B57\u6BB5\u6392\u5E8F\r
const results = await query.chain\r
  .orderBy('age', 'desc')\r
  .orderBy('name', 'asc')\r
  .execute();
`,paraId:24,tocIndex:5},{value:"\u9650\u5236\u7ED3\u679C\u96C6\u6570\u91CF\u548C\u8DF3\u8FC7\u6307\u5B9A\u6570\u91CF\u7684\u8BB0\u5F55\u3002",paraId:25,tocIndex:6},{value:"\u53C2\u6570:",paraId:26,tocIndex:6},{value:"limit(value: number)",paraId:27,tocIndex:6},{value:" - \u9650\u5236\u8FD4\u56DE\u7684\u8BB0\u5F55\u6570",paraId:27,tocIndex:6},{value:"offset(value: number)",paraId:27,tocIndex:6},{value:" - \u8DF3\u8FC7\u7684\u8BB0\u5F55\u6570",paraId:27,tocIndex:6},{value:"\u8FD4\u56DE\u503C:",paraId:28,tocIndex:6},{value:" ",paraId:28,tocIndex:6},{value:"this",paraId:28,tocIndex:6},{value:" - \u652F\u6301\u94FE\u5F0F\u8C03\u7528",paraId:28,tocIndex:6},{value:"\u793A\u4F8B:",paraId:29,tocIndex:6},{value:`// \u57FA\u7840\u5206\u9875\r
const pageSize = 10;\r
const page = 1;\r
const results = await query.chain\r
  .limit(pageSize)\r
  .offset((page - 1) * pageSize)\r
  .execute();\r
\r
// \u5206\u9875\u52A9\u624B\u51FD\u6570\r
async function paginate(page: number, pageSize: number) {\r
  return query.chain\r
    .orderBy('id')\r
    .limit(pageSize)\r
    .offset((page - 1) * pageSize)\r
    .execute();\r
}
`,paraId:30,tocIndex:6},{value:"\u9664\u4E86\u94FE\u5F0F\u8C03\u7528\uFF0C\u8FD8\u652F\u6301\u4F7F\u7528\u914D\u7F6E\u5BF9\u8C61\u65B9\u5F0F\u6784\u5EFA\u67E5\u8BE2\u3002",paraId:31,tocIndex:7},{value:"\u914D\u7F6E\u63A5\u53E3:",paraId:32,tocIndex:7},{value:`interface QueryConfig {\r
  select?: string[];\r
  where?: Array<{\r
    field: string;\r
    operator: string;\r
    value: any;\r
  }>;\r
  orderBy?: Array<{\r
    field: string;\r
    direction: 'asc' | 'desc';\r
  }>;\r
  limit?: number;\r
  offset?: number;\r
}
`,paraId:33,tocIndex:7},{value:"\u793A\u4F8B:",paraId:34,tocIndex:7},{value:`const config: QueryConfig = {\r
  select: ['name', 'email'],\r
  where: [\r
    { field: 'age', operator: '>', value: 18 },\r
    { field: 'status', operator: '=', value: 'active' }\r
  ],\r
  orderBy: [\r
    { field: 'name', direction: 'asc' }\r
  ],\r
  limit: 10\r
};\r
\r
const results = await query.setConfig(config).execute();
`,paraId:35,tocIndex:7},{value:`try {\r
  const results = await query.chain\r
    .where('age', '>', 18)\r
    .execute();\r
\r
  if (results.code === 200) {\r
    console.log('\u67E5\u8BE2\u6210\u529F:', results.result);\r
  } else {\r
    switch (results.code) {\r
      case 415:\r
        console.error('\u67E5\u8BE2\u5931\u8D25');\r
        break;\r
      case 420:\r
        console.error('\u7D22\u5F15\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A');\r
        break;\r
      case 422:\r
        console.error('\u7D22\u5F15\u4E0D\u5B58\u5728');\r
        break;\r
    }\r
  }\r
} catch (error) {\r
  console.error('\u67E5\u8BE2\u5F02\u5E38:', error);\r
}
`,paraId:36,tocIndex:8},{value:"\u4F7F\u7528\u7D22\u5F15",paraId:37,tocIndex:9},{value:"\u4E3A\u5E38\u7528\u67E5\u8BE2\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15",paraId:38,tocIndex:9},{value:"\u4F18\u5148\u4F7F\u7528\u7D22\u5F15\u5B57\u6BB5\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6",paraId:38,tocIndex:9},{value:"\u907F\u514D\u5BF9\u975E\u7D22\u5F15\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F",paraId:38,tocIndex:9},{value:"\u9650\u5236\u7ED3\u679C\u96C6",paraId:39,tocIndex:9},{value:"\u4F7F\u7528 limit \u9650\u5236\u8FD4\u56DE\u6570\u91CF",paraId:40,tocIndex:9},{value:"\u5B9E\u73B0\u5206\u9875\u52A0\u8F7D",paraId:40,tocIndex:9},{value:"\u53EA\u9009\u62E9\u9700\u8981\u7684\u5B57\u6BB5",paraId:40,tocIndex:9},{value:"\u4F18\u5316\u67E5\u8BE2\u6761\u4EF6",paraId:41,tocIndex:9},{value:"\u5408\u7406\u4F7F\u7528\u7EC4\u5408\u67E5\u8BE2",paraId:42,tocIndex:9},{value:"\u907F\u514D\u8FC7\u4E8E\u590D\u6742\u7684\u6761\u4EF6",paraId:42,tocIndex:9},{value:"\u4F18\u5148\u4F7F\u7528\u7CBE\u786E\u5339\u914D",paraId:42,tocIndex:9},{value:"\u7F13\u5B58\u7B56\u7565",paraId:43,tocIndex:9},{value:"\u7F13\u5B58\u5E38\u7528\u67E5\u8BE2\u7ED3\u679C",paraId:44,tocIndex:9},{value:"\u5B9E\u73B0\u67E5\u8BE2\u7ED3\u679C\u7F13\u5B58",paraId:44,tocIndex:9},{value:"\u8BBE\u7F6E\u5408\u7406\u7684\u7F13\u5B58\u65F6\u95F4",paraId:44,tocIndex:9}]},48705:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(62207);const n=[{value:"\u7528\u4E8E\u5728\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u521B\u5EFA\u65B0\u7684\u8868(\u5BF9\u8C61\u4ED3\u5E93)\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570:",paraId:1,tocIndex:1},{value:"dbName: string",paraId:2,tocIndex:1},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:2,tocIndex:1},{value:"tableName: string",paraId:2,tocIndex:1},{value:" - \u8868\u540D\u79F0",paraId:2,tocIndex:1},{value:"options?: TableOptions",paraId:2,tocIndex:1},{value:` - \u8868\u914D\u7F6E\u9009\u9879
`,paraId:2,tocIndex:1},{value:"keyPath?: string",paraId:3,tocIndex:1},{value:" - \u4E3B\u952E\u5B57\u6BB5\u540D,\u9ED8\u8BA4 'id'",paraId:3,tocIndex:1},{value:"autoIncrement?: boolean",paraId:3,tocIndex:1},{value:" - \u662F\u5426\u81EA\u589E,\u9ED8\u8BA4 true",paraId:3,tocIndex:1},{value:"version?: number",paraId:3,tocIndex:1},{value:" - \u8868\u7248\u672C\u53F7",paraId:3,tocIndex:1},{value:"timeout?: number",paraId:3,tocIndex:1},{value:" - \u64CD\u4F5C\u8D85\u65F6\u65F6\u95F4(\u6BEB\u79D2)",paraId:3,tocIndex:1},{value:"force?: boolean",paraId:3,tocIndex:1},{value:" - \u662F\u5426\u5F3A\u5236\u521B\u5EFA",paraId:3,tocIndex:1},{value:"indexes?: Array<string | IndexConfig>",paraId:3,tocIndex:1},{value:" - \u7D22\u5F15\u914D\u7F6E",paraId:3,tocIndex:1},{value:"\u7D22\u5F15\u914D\u7F6E:",paraId:4,tocIndex:1},{value:`interface IndexConfig {\r
  name: string;           // \u7D22\u5F15\u5B57\u6BB5\u540D\r
  type: IndexType;        // \u7D22\u5F15\u7C7B\u578B\r
  options?: {\r
    unique?: boolean;     // \u662F\u5426\u552F\u4E00\r
    multiEntry?: boolean; // \u662F\u5426\u591A\u503C\u7D22\u5F15\r
  }\r
}\r
\r
enum IndexType {\r
  UNIQUE = 'unique',      // \u552F\u4E00\u7D22\u5F15\r
  MULTI_ENTRY = 'multi',  // \u591A\u503C\u7D22\u5F15\r
  NORMAL = 'normal'       // \u666E\u901A\u7D22\u5F15\r
}
`,paraId:5,tocIndex:1},{value:"\u8FD4\u56DE\u503C:",paraId:6,tocIndex:1},{value:" ",paraId:6,tocIndex:1},{value:"Promise<Response>",paraId:6,tocIndex:1},{value:"\u793A\u4F8B:",paraId:7,tocIndex:1},{value:`import { createTable } from 'indexeddb-toolkit';\r
\r
// \u57FA\u7840\u7528\u6CD5 - \u53EA\u521B\u5EFA\u8868\r
await createTable('myDB', 'users');\r
\r
// \u521B\u5EFA\u5E26\u7D22\u5F15\u7684\u8868\r
await createTable('myDB', 'users', {\r
  keyPath: 'id',\r
  autoIncrement: true,\r
  indexes: [\r
    'name',                          // \u666E\u901A\u7D22\u5F15\r
    { name: 'email', type: IndexType.UNIQUE }, // \u552F\u4E00\u7D22\u5F15\r
    { name: 'tags', type: IndexType.MULTI_ENTRY }, // \u591A\u503C\u7D22\u5F15\r
    { \r
      name: 'age',\r
      type: IndexType.NORMAL,\r
      options: { unique: false }\r
    }\r
  ]\r
});
`,paraId:8,tocIndex:1},{value:"\u5411\u6307\u5B9A\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u6570\u636E\u3002",paraId:9,tocIndex:2},{value:"\u53C2\u6570:",paraId:10,tocIndex:2},{value:"dbName: string",paraId:11,tocIndex:2},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:11,tocIndex:2},{value:"tableName: string",paraId:11,tocIndex:2},{value:" - \u8868\u540D\u79F0",paraId:11,tocIndex:2},{value:"data: T",paraId:11,tocIndex:2},{value:" - \u8981\u63D2\u5165\u7684\u6570\u636E",paraId:11,tocIndex:2},{value:"\u8FD4\u56DE\u503C:",paraId:12,tocIndex:2},{value:" ",paraId:12,tocIndex:2},{value:"Promise<Response>",paraId:12,tocIndex:2},{value:"\u793A\u4F8B:",paraId:13,tocIndex:2},{value:`import { insertOne } from 'indexeddb-toolkit';\r
\r
// \u63D2\u5165\u5355\u6761\u6570\u636E\r
const user = {\r
  name: 'John Doe',\r
  email: 'john@example.com',\r
  age: 25,\r
  tags: ['admin', 'active']\r
};\r
\r
const result = await insertOne('myDB', 'users', user);
`,paraId:14,tocIndex:2},{value:"\u5411\u6307\u5B9A\u8868\u4E2D\u6279\u91CF\u63D2\u5165\u591A\u6761\u6570\u636E\u3002",paraId:15,tocIndex:3},{value:"\u53C2\u6570:",paraId:16,tocIndex:3},{value:"dbName: string",paraId:17,tocIndex:3},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:17,tocIndex:3},{value:"tableName: string",paraId:17,tocIndex:3},{value:" - \u8868\u540D\u79F0",paraId:17,tocIndex:3},{value:"dataList: T[]",paraId:17,tocIndex:3},{value:" - \u8981\u63D2\u5165\u7684\u6570\u636E\u6570\u7EC4",paraId:17,tocIndex:3},{value:"options?: InsertManyOptions",paraId:17,tocIndex:3},{value:` - \u63D2\u5165\u914D\u7F6E
`,paraId:17,tocIndex:3},{value:"skipDuplicates?: boolean",paraId:18,tocIndex:3},{value:" - \u662F\u5426\u8DF3\u8FC7\u91CD\u590D\u6570\u636E",paraId:18,tocIndex:3},{value:"updateDuplicates?: boolean",paraId:18,tocIndex:3},{value:" - \u662F\u5426\u66F4\u65B0\u91CD\u590D\u6570\u636E",paraId:18,tocIndex:3},{value:"batchSize?: number",paraId:18,tocIndex:3},{value:" - \u6279\u91CF\u5904\u7406\u5927\u5C0F",paraId:18,tocIndex:3},{value:"onProgress?: (progress: Progress) => void",paraId:18,tocIndex:3},{value:" - \u8FDB\u5EA6\u56DE\u8C03",paraId:18,tocIndex:3},{value:"\u8FD4\u56DE\u503C:",paraId:19,tocIndex:3},{value:" ",paraId:19,tocIndex:3},{value:"Promise<Response>",paraId:19,tocIndex:3},{value:"\u793A\u4F8B:",paraId:20,tocIndex:3},{value:`import { insertMany } from 'indexeddb-toolkit';\r
\r
const users = [\r
  { name: 'John', email: 'john@example.com' },\r
  { name: 'Jane', email: 'jane@example.com' }\r
];\r
\r
// \u57FA\u7840\u6279\u91CF\u63D2\u5165\r
await insertMany('myDB', 'users', users);\r
\r
// \u5E26\u914D\u7F6E\u7684\u6279\u91CF\u63D2\u5165\r
await insertMany('myDB', 'users', users, {\r
  skipDuplicates: true,\r
  batchSize: 100,\r
  onProgress: (progress) => {\r
    console.log(\`\u63D2\u5165\u8FDB\u5EA6: \${progress.percentage}%\`);\r
  }\r
});
`,paraId:21,tocIndex:3},{value:"\u901A\u8FC7\u4E3B\u952E\u67E5\u8BE2\u8868\u4E2D\u7684\u6570\u636E\u3002",paraId:22,tocIndex:4},{value:"\u53C2\u6570:",paraId:23,tocIndex:4},{value:"dbName: string",paraId:24,tocIndex:4},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:24,tocIndex:4},{value:"tableName: string",paraId:24,tocIndex:4},{value:" - \u8868\u540D\u79F0",paraId:24,tocIndex:4},{value:"key: any",paraId:24,tocIndex:4},{value:" - \u4E3B\u952E\u503C",paraId:24,tocIndex:4},{value:"isAll?: boolean",paraId:24,tocIndex:4},{value:" - \u662F\u5426\u8FD4\u56DE\u6240\u6709\u5339\u914D\u8BB0\u5F55,\u9ED8\u8BA4 false",paraId:24,tocIndex:4},{value:"\u8FD4\u56DE\u503C:",paraId:25,tocIndex:4},{value:" ",paraId:25,tocIndex:4},{value:"Promise<Response<T>>",paraId:25,tocIndex:4},{value:"\u793A\u4F8B:",paraId:26,tocIndex:4},{value:`import { findByKey } from 'indexeddb-toolkit';\r
\r
// \u67E5\u8BE2\u5355\u6761\u8BB0\u5F55\r
const user = await findByKey('myDB', 'users', 1);\r
\r
// \u67E5\u8BE2\u6240\u6709\u5339\u914D\u8BB0\u5F55\r
const users = await findByKey('myDB', 'users', 1, true);
`,paraId:27,tocIndex:4},{value:"\u901A\u8FC7\u7D22\u5F15\u67E5\u8BE2\u8868\u4E2D\u7684\u6570\u636E\u3002",paraId:28,tocIndex:5},{value:"\u53C2\u6570:",paraId:29,tocIndex:5},{value:"dbName: string",paraId:30,tocIndex:5},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:30,tocIndex:5},{value:"tableName: string",paraId:30,tocIndex:5},{value:" - \u8868\u540D\u79F0",paraId:30,tocIndex:5},{value:"indexName: string",paraId:30,tocIndex:5},{value:" - \u7D22\u5F15\u540D\u79F0",paraId:30,tocIndex:5},{value:"indexValue: any",paraId:30,tocIndex:5},{value:" - \u7D22\u5F15\u503C",paraId:30,tocIndex:5},{value:"isAll?: boolean",paraId:30,tocIndex:5},{value:" - \u662F\u5426\u8FD4\u56DE\u6240\u6709\u5339\u914D\u8BB0\u5F55,\u9ED8\u8BA4 false",paraId:30,tocIndex:5},{value:"\u8FD4\u56DE\u503C:",paraId:31,tocIndex:5},{value:" ",paraId:31,tocIndex:5},{value:"Promise<Response<T>>",paraId:31,tocIndex:5},{value:"\u793A\u4F8B:",paraId:32,tocIndex:5},{value:`import { findByIndex } from 'indexeddb-toolkit';\r
\r
// \u901A\u8FC7\u90AE\u7BB1\u67E5\u8BE2\u5355\u4E2A\u7528\u6237\r
const user = await findByIndex('myDB', 'users', 'email', 'john@example.com', false);\r
\r
// \u67E5\u8BE2\u6240\u670925\u5C81\u7684\u7528\u6237\r
const users = await findByIndex('myDB', 'users', 'age', 25, true);\r
\r
// \u67E5\u8BE2\u6240\u6709\u7BA1\u7406\u5458\r
const admins = await findByIndex('myDB', 'users', 'tags', 'admin', true);
`,paraId:33,tocIndex:5},{value:"\u901A\u8FC7\u4E3B\u952E\u66F4\u65B0\u6570\u636E\u3002",paraId:34,tocIndex:6},{value:"\u53C2\u6570:",paraId:35,tocIndex:6},{value:"dbName: string",paraId:36,tocIndex:6},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:36,tocIndex:6},{value:"tableName: string",paraId:36,tocIndex:6},{value:" - \u8868\u540D\u79F0",paraId:36,tocIndex:6},{value:"key: any",paraId:36,tocIndex:6},{value:" - \u4E3B\u952E\u503C",paraId:36,tocIndex:6},{value:"data: Partial<T>",paraId:36,tocIndex:6},{value:" - \u8981\u66F4\u65B0\u7684\u6570\u636E",paraId:36,tocIndex:6},{value:"\u8FD4\u56DE\u503C:",paraId:37,tocIndex:6},{value:" ",paraId:37,tocIndex:6},{value:"Promise<Response>",paraId:37,tocIndex:6},{value:"\u793A\u4F8B:",paraId:38,tocIndex:6},{value:`import { updateDataByPrimaryKey } from 'indexeddb-toolkit';\r
\r
// \u66F4\u65B0\u5355\u6761\u8BB0\u5F55\r
await updateDataByPrimaryKey('myDB', 'users', 1, {\r
  age: 26,\r
  tags: ['admin', 'vip']\r
});\r
\r
// \u6279\u91CF\u66F4\u65B0\r
const updates = [\r
  { id: 1, data: { status: 'active' } },\r
  { id: 2, data: { status: 'inactive' } }\r
];\r
\r
for (const update of updates) {\r
  await updateDataByPrimaryKey('myDB', 'users', update.id, update.data);\r
}
`,paraId:39,tocIndex:6},{value:"\u901A\u8FC7\u7D22\u5F15\u66F4\u65B0\u6570\u636E\u3002",paraId:40,tocIndex:7},{value:"\u53C2\u6570:",paraId:41,tocIndex:7},{value:"dbName: string",paraId:42,tocIndex:7},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:42,tocIndex:7},{value:"tableName: string",paraId:42,tocIndex:7},{value:" - \u8868\u540D\u79F0",paraId:42,tocIndex:7},{value:"indexName: string",paraId:42,tocIndex:7},{value:" - \u7D22\u5F15\u540D\u79F0",paraId:42,tocIndex:7},{value:"indexValue: any",paraId:42,tocIndex:7},{value:" - \u7D22\u5F15\u503C",paraId:42,tocIndex:7},{value:"data: Partial<T>",paraId:42,tocIndex:7},{value:" - \u8981\u66F4\u65B0\u7684\u6570\u636E",paraId:42,tocIndex:7},{value:"\u8FD4\u56DE\u503C:",paraId:43,tocIndex:7},{value:" ",paraId:43,tocIndex:7},{value:"Promise<Response>",paraId:43,tocIndex:7},{value:"\u793A\u4F8B:",paraId:44,tocIndex:7},{value:`import { updateDataByIndex } from 'indexeddb-toolkit';\r
\r
// \u901A\u8FC7\u90AE\u7BB1\u66F4\u65B0\u7528\u6237\u72B6\u6001\r
await updateDataByIndex('myDB', 'users', 'email', 'john@example.com', {\r
  status: 'active',\r
  lastLogin: new Date()\r
});
`,paraId:45,tocIndex:7},{value:"\u901A\u8FC7\u4E3B\u952E\u5220\u9664\u5355\u6761\u6570\u636E\u3002",paraId:46,tocIndex:8},{value:"\u53C2\u6570:",paraId:47,tocIndex:8},{value:"dbName: string",paraId:48,tocIndex:8},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:48,tocIndex:8},{value:"tableName: string",paraId:48,tocIndex:8},{value:" - \u8868\u540D\u79F0",paraId:48,tocIndex:8},{value:"key: any",paraId:48,tocIndex:8},{value:" - \u4E3B\u952E\u503C",paraId:48,tocIndex:8},{value:"\u8FD4\u56DE\u503C:",paraId:49,tocIndex:8},{value:" ",paraId:49,tocIndex:8},{value:"Promise<Response>",paraId:49,tocIndex:8},{value:"\u793A\u4F8B:",paraId:50,tocIndex:8},{value:`import { deleteOneByPk } from 'indexeddb-toolkit';\r
\r
// \u5220\u9664\u5355\u4E2A\u7528\u6237\r
await deleteOneByPk('myDB', 'users', 1);
`,paraId:51,tocIndex:8},{value:"\u901A\u8FC7\u4E3B\u952E\u6279\u91CF\u5220\u9664\u6570\u636E\u3002",paraId:52,tocIndex:9},{value:"\u53C2\u6570:",paraId:53,tocIndex:9},{value:"dbName: string",paraId:54,tocIndex:9},{value:" - \u6570\u636E\u5E93\u540D\u79F0",paraId:54,tocIndex:9},{value:"tableName: string",paraId:54,tocIndex:9},{value:" - \u8868\u540D\u79F0",paraId:54,tocIndex:9},{value:"keys: any[]",paraId:54,tocIndex:9},{value:" - \u4E3B\u952E\u503C\u6570\u7EC4",paraId:54,tocIndex:9},{value:"\u8FD4\u56DE\u503C:",paraId:55,tocIndex:9},{value:" ",paraId:55,tocIndex:9},{value:"Promise<Response>",paraId:55,tocIndex:9},{value:"\u793A\u4F8B:",paraId:56,tocIndex:9},{value:`import { deleteManyByPK } from 'indexeddb-toolkit';\r
\r
// \u6279\u91CF\u5220\u9664\u7528\u6237\r
await deleteManyByPK('myDB', 'users', [1, 2, 3]);
`,paraId:57,tocIndex:9},{value:"\u4F7F\u7528\u4E8B\u52A1\u786E\u4FDD\u6570\u636E\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u3002",paraId:58,tocIndex:10},{value:"\u793A\u4F8B:",paraId:59,tocIndex:10},{value:`import { useDatabase } from 'indexeddb-toolkit';\r
\r
// \u79EF\u5206\u8F6C\u8D26\u4E8B\u52A1\u793A\u4F8B\r
async function transferPoints(fromUserId: number, toUserId: number, points: number) {\r
  const db = await useDatabase('myDB');\r
  const transaction = db.transaction(['users'], 'readwrite');\r
  const store = transaction.objectStore('users');\r
\r
  return new Promise((resolve, reject) => {\r
    transaction.onerror = () => reject(new Error('\u4E8B\u52A1\u5931\u8D25'));\r
    transaction.oncomplete = () => resolve(true);\r
\r
    // \u6263\u9664\u79EF\u5206\r
    store.get(fromUserId).onsuccess = (event) => {\r
      const user = event.target.result;\r
      if (user.points < points) {\r
        reject(new Error('\u79EF\u5206\u4E0D\u8DB3'));\r
        return;\r
      }\r
      user.points -= points;\r
      store.put(user);\r
\r
      // \u589E\u52A0\u79EF\u5206\r
      store.get(toUserId).onsuccess = (event) => {\r
        const user = event.target.result;\r
        user.points += points;\r
        store.put(user);\r
      };\r
    };\r
  });\r
}
`,paraId:60,tocIndex:10},{value:`try {\r
  const result = await operation();\r
  if (result.code === 200) {\r
    console.log('\u64CD\u4F5C\u6210\u529F:', result.result);\r
  } else {\r
    switch (result.code) {\r
      case 402:\r
        console.error('\u8868\u540D\u4E0D\u80FD\u4E3A\u7A7A');\r
        break;\r
      case 406:\r
        console.error('\u8868\u5DF2\u5B58\u5728');\r
        break;\r
      case 411:\r
        console.error('\u8868\u4E0D\u5B58\u5728');\r
        break;\r
      case 412:\r
        console.error('\u6570\u636E\u63D2\u5165\u5931\u8D25');\r
        break;\r
      case 416:\r
        console.error('\u4E3B\u952E\u4E0D\u80FD\u4E3A\u7A7A');\r
        break;\r
    }\r
  }\r
} catch (error) {\r
  console.error('\u64CD\u4F5C\u5F02\u5E38:', error);\r
}
`,paraId:61,tocIndex:11},{value:"\u8868\u8BBE\u8BA1",paraId:62,tocIndex:12},{value:"\u5408\u7406\u8BBE\u8BA1\u4E3B\u952E",paraId:63,tocIndex:12},{value:"\u9002\u5F53\u4F7F\u7528\u7D22\u5F15",paraId:63,tocIndex:12},{value:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15",paraId:63,tocIndex:12},{value:"\u9009\u62E9\u5408\u9002\u7684\u5B57\u6BB5\u7C7B\u578B",paraId:63,tocIndex:12},{value:"\u6570\u636E\u64CD\u4F5C",paraId:64,tocIndex:12},{value:"\u4F7F\u7528\u6279\u91CF\u64CD\u4F5C\u63D0\u9AD8\u6027\u80FD",paraId:65,tocIndex:12},{value:"\u5408\u7406\u4F7F\u7528\u4E8B\u52A1",paraId:65,tocIndex:12},{value:"\u5904\u7406\u5E76\u53D1\u64CD\u4F5C",paraId:65,tocIndex:12},{value:"\u9A8C\u8BC1\u6570\u636E\u5B8C\u6574\u6027",paraId:65,tocIndex:12},{value:"\u7D22\u5F15\u4F7F\u7528",paraId:66,tocIndex:12},{value:"\u9488\u5BF9\u5E38\u7528\u67E5\u8BE2\u5EFA\u7ACB\u7D22\u5F15",paraId:67,tocIndex:12},{value:"\u907F\u514D\u8FC7\u591A\u7D22\u5F15\u5F71\u54CD\u5199\u5165\u6027\u80FD",paraId:67,tocIndex:12},{value:"\u5408\u7406\u4F7F\u7528\u590D\u5408\u7D22\u5F15",paraId:67,tocIndex:12},{value:"\u53CA\u65F6\u5220\u9664\u65E0\u7528\u7D22\u5F15",paraId:67,tocIndex:12},{value:"\u6027\u80FD\u4F18\u5316",paraId:68,tocIndex:12},{value:"\u6279\u91CF\u5904\u7406\u5927\u6570\u636E",paraId:69,tocIndex:12},{value:"\u4F7F\u7528\u6E38\u6807\u5904\u7406\u5927\u7ED3\u679C\u96C6",paraId:69,tocIndex:12},{value:"\u907F\u514D\u9891\u7E41\u7684\u5C0F\u4E8B\u52A1",paraId:69,tocIndex:12},{value:"\u5408\u7406\u8BBE\u7F6E\u6279\u5904\u7406\u5927\u5C0F",paraId:69,tocIndex:12},{value:"\u9519\u8BEF\u5904\u7406",paraId:70,tocIndex:12},{value:"\u5B9E\u73B0\u5B8C\u6574\u7684\u9519\u8BEF\u5904\u7406",paraId:71,tocIndex:12},{value:"\u63D0\u4F9B\u53CB\u597D\u7684\u9519\u8BEF\u4FE1\u606F",paraId:71,tocIndex:12},{value:"\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7",paraId:71,tocIndex:12},{value:"\u5B9E\u73B0\u6570\u636E\u56DE\u6EDA\u673A\u5236",paraId:71,tocIndex:12},{value:"[\u7EE7\u7EED\u4E0B\u4E00\u90E8\u5206...]",paraId:72,tocIndex:12}]},56582:function(r,a,e){e.r(a),e.d(a,{texts:function(){return n}});var d=e(38337);const n=[]}}]);
