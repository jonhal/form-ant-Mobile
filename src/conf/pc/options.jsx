/**
 * @file options
 * @author
 */

export default {

    /**
     * 参数类型
     */
    PARAM_TYPE: [
        {
            displayName: 'string',
            value: 'string'
        },
        {
            displayName: 'number',
            value: 'number'
        },
        {
            displayName: 'enum',
            value: 'enum'
        }
    ],

    /**
     * 是否
     */
    ISBOOLEAN: [
        {
            displayName: '是',
            value: 'true'
        },
        {
            displayName: '否',
            value: 'false'
        }
    ],
    /**
     * 流程规则类型
     */
    RULE_TYPE: [
        {
            displayName: '命中规则',
            value: 'HIT'
        },
        {
            displayName: '分数规则',
            value: 'SCORE'
        }
    ]
};
