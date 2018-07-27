/* eslint-disable */
module.exports = {
    "plugins": [
      ["import", [
        {
          "libraryName": "antd",
          "libraryDirectory": "lib",   // default: lib
          "style": true
        },
        {
          "libraryName": "antd-mobile",
          "style": 'css'
        }]
      ] // `style: true` 会加载 less 文件
    ]
}