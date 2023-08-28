---
id: uploadModelParams
title: '上传 Model 参数'
hide_table_of_contents: false
---

## URL

```
https://open.gtech.world/api/v1/uploadModelParams
```

## Header

```
"Authorization": "Bearer <YOUR-TOKEN>"
```

## Body

```json
{
  "modelUUID": "string",
  "loadNumber": "string",
  "serialNumberList": [
    "string"
  ],
  "lcaParamList": [
    {
      "processId": "string",
      "paramValue": 0,
      "paramName": "string",
      "dateTime": "yyyy-MM-DD hh:mm:ss"
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

  }
}
```


## 示例

```sh
$ curl ...
```