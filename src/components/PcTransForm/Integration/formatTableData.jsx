/**
 * @file FormatListData
 * @author
 * ------------------------------
 * @note 数据处理层 - 列表格式化
 * @param   {object} options
 * 1. select结构：
        header: {
            "key": "参数1-diy",
            "value": "参数2-表头名",
            "fixed": true,
            "type": "select"
        }
        data: {
            "key": "参数1-diy",
            "value": {
                "postID": "提交ID",
                "defaultValue": {
                    "key": "来自接口value",
                    "label": "来自接口displayName"
                },
                "options":  [{
                    "displayName": "参数3-来自接口",
                    "value": "参数3-来自接口"
                },{
                    "displayName": "参数3-来自接口",
                    "value": "参数3-来自接口"
                }]
            },
            "type": "select"
        }
 * 2. click 结构：
        header: {
            "key": "参数1-diy",
            "value": "参数2-表头名",
            "fixed": true,
            "type": "click"
        }
        data: {
            "key": "参数1-diy"",
            "value": {
                "displayName": "编辑",
                "postID": "提交ID",
            },
            "type": "click"
        }
 */

import jsonqueryjs from 'jsonqueryjs/json.js';

export default function (options) {
    let table = jsonqueryjs.toolUtil.deepCopy(options.table) || {};
    let data = options.data || [];
    let page = options.page;
    let widthParams = options.widthParams || [];
    table.data = [];

    // 处理翻页(如果存在)
    if (page) {
        table.page = page;
    }

    // 处理宽度问题
    table.header.map((headerItem, headerIndex, headerArray) => {
        widthParams.map((widthItem, widthIndex, widthArray) => {
            if (widthItem.key === headerItem.key) {
                headerItem.width = widthItem.value;
            }
        });
    });


    // 表内容处理
    data && data.map((dataItem, dataIndex, dataArray) => {
        let singleItemArr = [];

        for (let item in dataItem) {
            singleItemArr.push({
                key: item,
                value: dataItem[item]
            });
        }
        table.header.map((headerItem, headerIndex, headerArray) => {
            if (headerItem.type === 'click') {
                let keyValue = headerItem.content.status
                             ? headerItem.content.value[dataItem[headerItem.content.status] || '']
                             : headerItem.content.value;
                singleItemArr.push({
                    key: headerItem.key,
                    value: {
                        key: dataItem[headerItem.content.key],
                        value: keyValue
                    },
                    type: 'click'
                });
            }
        });
        table.data.push(singleItemArr);
    });
    return table;
}
