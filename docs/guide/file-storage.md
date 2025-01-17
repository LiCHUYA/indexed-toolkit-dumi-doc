# 文件存储

## saveFilesToDB - 保存文件

将文件保存到 IndexedDB 数据库中。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `file: File` - 要保存的文件
- `options?: SaveFileOptions` - 保存选项
  - `generateThumbnail?: boolean` - 是否生成缩略图(仅图片)
  - `thumbnailSize?: number` - 缩略图尺寸
  - `generateUrl?: boolean` - 是否生成 URL
  - `validate?: (file: File) => boolean` - 文件验证函数
  - `onProgress?: (progress: Progress) => void` - 进度回调

**返回值:** `Promise<Response<FileData>>`

**示例:**
```typescript
import { saveFilesToDB } from 'indexeddb-toolkit';

// 基础用法
const fileInput = document.querySelector('input[type="file"]');
const result = await saveFilesToDB('myDB', 'files', fileInput.files[0]);

// 完整配置
const result = await saveFilesToDB('myDB', 'files', file, {
  generateThumbnail: true,
  thumbnailSize: 100,
  generateUrl: true,
  validate: (file) => {
    // 验证文件类型和大小
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    return validTypes.includes(file.type) && file.size <= maxSize;
  },
  onProgress: (progress) => {
    console.log(`保存进度: ${progress.percentage}%`);
  }
});
```

## getFileFromDB - 获取文件

从数据库获取已保存的文件。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `fileId: number` - 文件ID
- `options?: GetFileOptions` - 获取选项
  - `generateUrl?: boolean` - 是否生成 URL
  - `type?: 'raw' | 'handled'` - 获取原始文件还是处理后的文件

**返回值:** `Promise<Response<FileData>>`

**示例:**
```typescript
import { getFileFromDB } from 'indexeddb-toolkit';

// 基础获取
const file = await getFileFromDB('myDB', 'files', fileId);

// 获取处理后的文件
const file = await getFileFromDB('myDB', 'files', fileId, {
  type: 'handled',
  generateUrl: true
});

// 使用文件
if (file.code === 200) {
  const img = document.createElement('img');
  img.src = file.result.url;
  document.body.appendChild(img);
}
```

## downloadFileFromDB - 下载文件

从数据库下载文件。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `fileId: number` - 文件ID
- `options?: DownloadOptions` - 下载选项
  - `type?: 'raw' | 'handled'` - 下载原始文件还是处理后的文件
  - `fileName?: string` - 自定义文件名

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { downloadFileFromDB } from 'indexeddb-toolkit';

// 基础下载
await downloadFileFromDB('myDB', 'files', fileId);

// 自定义文件名下载
await downloadFileFromDB('myDB', 'files', fileId, {
  type: 'handled',
  fileName: 'custom-name.jpg'
});
```

## getAllFiles - 获取所有文件

获取表中的所有文件。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `options?: GetAllFilesOptions` - 获取选项
  - `generateUrl?: boolean` - 是否生成 URL
  - `page?: number` - 页码
  - `pageSize?: number` - 每页数量

**返回值:** `Promise<Response<FileData[]>>`

**示例:**
```typescript
import { getAllFiles } from 'indexeddb-toolkit';

// 获取所有文件
const files = await getAllFiles('myDB', 'files');

// 分页获取
const files = await getAllFiles('myDB', 'files', {
  generateUrl: true,
  page: 1,
  pageSize: 10
});
```

## downloadAllFiles - 批量下载

批量下载多个文件。

**参数:**
- `dbName: string` - 数据库名称
- `tableName: string` - 表名称
- `options?: DownloadAllOptions` - 下载选项
  - `type?: 'raw' | 'handled'` - 下载原始文件还是处理后的文件
  - `zipName?: string` - 压缩包名称

**返回值:** `Promise<Response>`

**示例:**
```typescript
import { downloadAllFiles } from 'indexeddb-toolkit';

// 下载所有文件
await downloadAllFiles('myDB', 'files', {
  type: 'raw',
  zipName: 'all-files.zip'
});
```

## URL 管理

```typescript
import { revokeFileUrl } from 'indexeddb-toolkit';

// 获取文件并创建URL
const result = await getFileFromDB('myDB', 'files', fileId, {
  generateUrl: true
});

// 使用URL
const img = document.createElement('img');
img.src = result.result.url;
document.body.appendChild(img);

// 使用完后释放URL
revokeFileUrl(result.result.url);
```

## 错误处理

```typescript
try {
  const result = await saveFilesToDB('myDB', 'files', file);
  
  if (result.code === 200) {
    console.log('文件保存成功:', result.result);
  } else {
    switch (result.code) {
      case 436:
        console.error('文件格式不支持');
        break;
      case 437:
        console.error('文件大小超出限制');
        break;
      case 438:
        console.error('文件保存失败');
        break;
    }
  }
} catch (error) {
  if (error.name === 'QuotaExceededError') {
    console.error('存储空间不足');
  } else {
    console.error('文件操作失败:', error);
  }
}
```

## 最佳实践

1. **文件验证**
   - 验证文件类型和大小
   - 检查文件完整性
   - 实现自定义验证规则

2. **性能优化**
   - 使用适当的缩略图尺寸
   - 合理压缩图片质量
   - 及时释放文件URL
   - 分批处理大量文件

3. **存储管理**
   - 监控存储空间使用
   - 实现文件清理策略
   - 处理存储配额超限

4. **用户体验**
   - 显示上传进度
   - 提供文件预览
   - 支持拖拽上传
   - 实现断点续传

5. **安全性**
   - 验证文件类型
   - 限制文件大小
   - 生成安全的文件ID
   - 控制下载权限
