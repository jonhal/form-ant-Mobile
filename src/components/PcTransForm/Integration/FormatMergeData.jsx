/**
 * @file FormatMergeData
 * @author
 * ------------------------------
 * @note 数据处理层 - 本地API和外部API数据合并 (defaultValue)
 * @param   {object} localData   本地数据
 * @param   {object} outsideData 外部接口
 * @returns {object}             返回新数组
 */

import jsonqueryjs from 'jsonqueryjs/json.js';

export default function (localData, outsideData) {
    let localDataCpy = jsonqueryjs.toolUtil.deepCopy(localData);
    // 返回新数组
    return Array.isArray(localDataCpy) && localDataCpy.map((item, index, array) => {
        if (item.name) {
            // 时间格式化
            if (item.name.time) {
                item.defaultValue = outsideData[item.name.time[0]] + ' 至 ' + outsideData[item.name.time[1]];
            }
            else {
                item.defaultValue = outsideData[item.name];
                // 如果本地options不存在，则合并数据
                if ((item.type === 'cascader' || item.type === 'select') && !item.options) {
                    // 与接口约定参数名+all
                    item.options = outsideData[item.name + 'All'];
                }
            }
        }
        return item;
    });
}
