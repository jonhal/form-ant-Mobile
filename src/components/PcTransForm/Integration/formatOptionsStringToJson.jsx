/**
 * @file FormatOptionsStringToJson
 * @author
 * ------------------------------
 * @note 数据处理层 - 接口标识转换成Json
 * @param   {object} localData   本地数据
 * @param   {object} outsideData 外部接口
 * @returns {object}
 * {
 *     "key":   1,
 *     "value": 2
 * }
 */

export default function (localData, outsideData) {
    let newJson = {};
    Array.isArray(localData) && localData.forEach((item, index, array) => {
        if (item.value === outsideData) {
            newJson = {
                displayName: item.displayName,
                value: item.value
            };
        }
    });
    return newJson;
}
