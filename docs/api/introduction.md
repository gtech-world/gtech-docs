---
id: introduction
title: '开放平台概述'
hide_table_of_contents: true
---

# 介绍

AICP 开放平台是为合作伙伴 (Partner) 提供的对接平台，支持合作伙伴通过 API 接入 AICP 的云端业务系统。

如需开通帐号，请通过 [hi@gtech.world](mailto:hi@gtech.world) 联系我们。

# 认证机制

AICP 开放平台使用 [Sa-Token](https://sa-token.cc) 来进行权限管理和认证。具体步骤如下：

1. 使用用户名和密码申请 Token

2. 使用 Token 调用 API

每一个 Token 默认有效期为 1 小时，如果 Token 失效，则需重新调用 API 申请新的 Token。