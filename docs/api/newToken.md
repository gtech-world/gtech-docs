---
id: newToken
title: '生成 Token'
hide_table_of_contents: false
---

## URL

```
https://open.gtech.world/api/v1/newToken
```

## 参数

| 参数  | 描述 | 是否必传 | 类型 |
| --- | --- | --- | --- | 
| userName  | 用户名 | true | string |
| password  | 密码 | true | string |

## 返回值

```json
{
  "success": true,
  "message": "string",
  "code": 0,
  "data": {
    "token": "v4ueNLEpPwMtmOPMBtOOeIQsvP8z9gkMgIVibTUVjkrNrlfra5CGwQkViDjO8jcc",
    "expirationTime": 1689733668
  }
}
```

## 示例

```sh
$ curl ...
```