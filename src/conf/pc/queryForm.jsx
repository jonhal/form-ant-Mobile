/**
 * @file queryForm
 * @author
 */

export default {
    /**
     * 搜索查询
     */
    searchQuery: [
        {
            type: 'input',
            name: 'queryKey',
            displayName: '',
            defaultValue: '',
            placeholder: '请输入名称进行搜索'
        }
    ],

    /**
     * 搜索查询
    */
    searchCodeQuery: [
        {
            type: 'input',
            name: 'queryKey',
            displayName: '',
            defaultValue: '',
            placeholder: '请输入身份证号进行搜索'
        }
    ],

    /**
     * 含时间选择器搜索
     */
    searchTimeQuery: [
        {
            type: 'rangePicker',
            name: 'time',
            displayName: '',
            defaultValue: [],
            placeholder: ''
        },
        {
            type: 'input',
            name: 'queryKey',
            displayName: '',
            defaultValue: '',
            placeholder: '请输入名称进行搜索'
        }
    ]
};
