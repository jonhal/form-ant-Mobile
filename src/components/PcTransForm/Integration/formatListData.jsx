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

export default function (options) {
    let outsideData = options.outsideData || {};
    let attach = options.attach || [];
    let widthParams = options.widthParams || [];

    if (!outsideData.data || !outsideData.data.length) {
        return outsideData;
    }

    // 表头处理
    outsideData.header.shift();
    attach.forEach((attachItem, attachIndex, attachArray) => {
        if (attachItem.type === 'click') {
            outsideData.header.push({
                key: attachItem.key,
                value: attachItem.headerDisplayName,
                fixed: true,
                type: 'click',
                width: '50'
            });
        }
        else if (attachItem.type === 'select') {
            outsideData.header.forEach((headerItem, headerIndex, headerArray) => {
                if (attachItem.key === headerItem.key) {
                    headerItem.fixed = true;
                    headerItem.type = 'select';
                }
            });
        }
    });

    // 处理宽度问题
    outsideData.header.forEach((headerItem, headerIndex, headerArray) => {
        widthParams.forEach((widthItem, widthIndex, widthArray) => {
            if (widthItem.key === headerItem.key) {
                headerItem.width = widthItem.value;
            }
        });
    });

    // 表内容处理
    outsideData.data.forEach((item, index, array) => {
        let postID = item[0].value;
        item.shift();
        // 附加处理数据
        attach.forEach((attachItem, attachIndex, attachArray) => {
            if (attachItem.type === 'click') {
                item.push({
                    key: attachItem.key,
                    value: {
                        displayName: attachItem.bodyDisplayName,
                        postID
                    },
                    type: 'click'
                });
            }
            else if (attachItem.type === 'select') {
                // 单条数据
                item.forEach((singleItem, singleIndex, singleArray) => {

                    if (singleItem.key === attachItem.key) {
                        let singleDisplayName;
                        attachItem.options.forEach((optionsItem, optionsIndex, optionsArray) => {
                            // 转换接口options英文默认值为中文
                            if (optionsItem.value === singleItem.value) {
                                singleDisplayName = optionsItem.displayName;
                            }
                        });

                        singleItem.value = {
                            postID: postID,
                            defaultValue: {
                                key: attachItem.key,
                                label: singleDisplayName
                            },
                            options: attachItem.options
                        };
                        singleItem.type = 'select';
                    }
                });
            }
        });
    });
    return outsideData;
}
