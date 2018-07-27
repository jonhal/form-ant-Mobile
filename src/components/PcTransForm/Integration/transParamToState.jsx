/**
 * @file TransParamToState
 * @author
 * ------------------------------
 * @note 数据处理层 - 参数集转换成react state格式
 * @param   {object} localData 本地数据
 * @returns {object}
 */

export default function (localData) {
    let state = {};
    Array.isArray(localData) && localData.forEach((item, index, array) => {
        // rangePicker
        if (item.name === 'time') {
            state.startTime = '',
            state.endTime = '';
        }
        else {
            state[item.name] = item.defaultValue;
        }
    });
    return state;
}
