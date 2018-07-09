/**
 * @file FormJson
 * @author simotophs@gmail.com
 */

import OPTIONS from './Options.jsx';
import CITYOPTIONS from './CityOptions.jsx';

export default {
    /**
     * 基础信息页表单
     */
    'settingMine': [
        {
            'type': 'text',
            'name': 'trueName',
            'displayName': '文本框',
            'defaultValue': '我是一个默认文本框',
        },
        {
            'type': 'input',
            'name': 'cardNo',
            'displayName': '数字框',
            'defaultValue': '',
            'placeholder': '这是一个数字必填数字框',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'checkType': '',
            'length': null
        },
        {
            'type': 'input',
            'name': 'phone',
            'displayName': '手机号',
            'defaultValue': '',
            'placeholder': '这是一个带校验必填的手机框',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'checkType': 'phone',
            'length': 11
        },
        {
            'type': 'select',
            'name': 'urgentContactRelation',
            'displayName': '单选框',
            'defaultValue': '',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'colNum': 1,
            'options': OPTIONS.relation
        },
        {
            'type': 'select',
            'name': 'businessAddress',
            'displayName': '所在省市',
            'defaultValue': '',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'colNum': 3,
            'options': CITYOPTIONS
        },
        {
            'type': 'imagePicker',
            'name': 'image',
            'displayName': '图片控件',
            'defaultValue': '',
            'placeholder': '',
            'isRequire': true,
            'message': '',
            'disabled': false
        }
    ]
}