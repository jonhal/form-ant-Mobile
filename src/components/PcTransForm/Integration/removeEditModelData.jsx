/**
 * @file RemoveEditModelData
 * @author
 * ------------------------------
 * @note 数据处理层 - 移除编辑字段
 * @param   {object} localData   本地API
 * @param   {array}  removeArray 移除字段
 * @returns {object}
 */

export default function (localData, removeArray) {
    Array.isArray(removeArray) && removeArray.forEach((removeItem, removeIndex, removeArray) => {
        Array.isArray(localData) && localData.forEach((localItem, localIndex, localArray) => {
            if (localItem.name === removeItem) {
                localArray.splice(localIndex, 1);
            }
        });
    });
    return localData;
}
