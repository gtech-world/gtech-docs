---
id: newToken
title: '生成 Token'
hide_table_of_contents: false
---

## URL

```
https://open.gtech.world/api/base/newToken
```

## 参数

| 参数  | 描述 | 是否必传 | 类型 |
| --- | --- | --- | --- | 
| name  | 用户名 | true | string |
| password  | 密码 | true | string |

## 返回值

```json
{
  "success": true,
  "message": "string",
  "code": 0,
  "data": {
    ...
    "loginToken": "string",
    ...
  }
}
```

## 示例

```sh
$ curl --location 'https://open.gtech.world/api/base/newToken' \
--header 'Content-Type: application/json' \
--data '{
    "name":"***",
    "password": "***"
}'
```