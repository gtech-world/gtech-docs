exports.sidebar = [
  {
    type: 'doc',
    id: 'api/introduction',
    label: '平台概述'
  },
  {
    type: 'category',
    label: 'API 列表',
    collapsed: false,
    items: [
      {
        type: 'doc',
        id: 'api/newToken',
        label: '生成 Token'
      },
      {
        type: 'doc',
        id: 'api/uploadModel',
        label: '上传 Model'
      },
      {
        type: 'doc',
        id: 'api/uploadModelParams',
        label: '上传 Model 参数'
      }
    ]
  }
]