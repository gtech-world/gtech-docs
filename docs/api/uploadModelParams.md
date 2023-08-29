---
id: uploadModelParams
title: '上传 Model 参数'
hide_table_of_contents: false
---

## URL

```
https://open.gtech.world/api/inventory/item/upload
```

## Header

```
"Authorization": "Bearer <YOUR-TOKEN>"
```

## 参数

| 参数            | 描述               | 是否必传  | 类型        |
|---------------|------------------|-------|-----------| 
| loadName      | 碳足迹批次            | true  | string    |
| productId     | 产品系统id           | true  | string    |
| lcaParamList  | 实景数据列表           | false | jsonArray |
| lcaParamList.processId | 产品系统模型实景数据参数流程id | true  | string    |
| lcaParamList.paramValue | 产品系统模型实景数据参数值    | true  | number    |
| lcaParamList.paramName | 产品系统模型实景数据参数名称   | true  | string    |
| lcaParamList.processId | 产品系统模型实景数据参数产生时间 | true  | dateTime    |

## Body

```json
{
  "productId": 1,
  "loadName": "碳足迹批次n",
  "lcaParamList": [
    {
      "processId": "41707610-7151-4dba-9038-5d0315a50a75",
      "paramValue": 20000,
      "paramName": "p1",
      "dateTime": "2023-06-14 12:30:00"
    }
  ]
}
```

## 返回值

```json
{
  "success": true,
  "message": "string",
  "code": 0,
  "data": {
    ...
  }
}
```


## 示例

```sh
$ curl --location 'https://open.gtech.world/api/inventory/item/upload' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ****' \
--data '{
  "productId": 1,
  "loadName": "碳足迹批次n",
  "lcaParamList": [
    {
      "processId": "41707610-7151-4dba-9038-5d0315a50a75",
      "paramValue": 20000,
      "paramName": "p1",
      "dateTime": "2023-06-14 12:30:00"
    }
  ]
}'
```