/**
 * @file FormatTwoDecimal
 * @author
 * ------------------------------
 * @note 数据处理层 - 保留2位小数点
 * @param   {string} value
 * @returns {number}
 */

export default function (value) {
    return parseFloat(value, 10).toFixed(2);
}
