---
id: uploadModel
title: '上传 Model'
hide_table_of_contents: false
---

## URL

```
https://open.gtech.world/api/v1/uploadModel
```

## Header

```
"Authorization": "Bearer <YOUR-TOKEN>"
```

## Body

| 参数  | 描述 | 是否必传 | 类型 |
| --- | --- | --- | --- | 
| name  | 名称 | true |string |
| description  | 描述 | false | string |
| productId  | productId | true |integer |
| file  | 通过 aicpLCA 生成并导出的 Model 文件 | true | file |

## 返回值

```json
{
  "success": true,
  "message": "string",
  "code": 0,
  "data": {
    "modelUUID": ""
  }
}
```


## 示例

```sh
$ curl ...
```