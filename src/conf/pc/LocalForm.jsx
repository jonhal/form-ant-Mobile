/**
 * @file LocalForm
 * @author
 */

import OPTIONS from './options.jsx';

export default {
    /**
     * 模型详情
     */
    modelDetail: {
        BASEINFOR: [
            {
                type: 'text',
                name: 'modelCode',
                displayName: '模型编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'modelName',
                displayName: '模型名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'modelDesc',
                displayName: '模型描述',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'modelType',
                displayName: '模型类型',
                defaultValue: ''
            }
        ],
        BASEINFOREDIT: [
            {
                type: 'text',
                name: 'modelName',
                displayName: '模型名称',
                defaultValue: ''
            },
            {
                type: 'input',
                name: 'modelDesc',
                displayName: '模型描述',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'modelType',
                displayName: '模型类型',
                defaultValue: ''
            }
        ],
        ADJUST: [
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '模型接口调试',
                        disabled: false
                    }
                ]
            },
            {
                type: 'textarea',
                name: 'result',
                displayName: '返回结果',
                defaultValue: '',
                placeholder: '',
                isRequire: false,
                message: '',
                disabled: false
            }
        ]

    },

    /**
     * 模型添加
     */
    modelAdd: {
        BASEINFOR: [
            {
                type: 'text',
                name: 'modelName',
                displayName: '模型名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'modelDesc',
                displayName: '模型描述',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'publishTime',
                displayName: '发布时间',
                defaultValue: ''
            }
        ]
    },
    /**
     * 流程详情
     */
    flowDetail: {
        detail: [
            {
                type: 'text',
                name: 'processCode',
                displayName: '流程编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'categoryName',
                displayName: '类型名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processDesc',
                displayName: '流程描述',
                defaultValue: ''
            }
        ],
        edit: [
            {
                type: 'text',
                name: 'processCode',
                displayName: '流程编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'select',
                name: 'categoryCode',
                displayName: '流程类型',
                defaultValue: '',
                placeholder: '类型选择',
                isRequire: true,
                message: '请选择流程类型',
                disabled: false,
                options: null
            },
            {
                type: 'textarea',
                name: 'processDesc',
                displayName: '流程描述',
                defaultValue: '',
                placeholder: '流程描述',
                isRequire: false,
                message: '',
                disabled: false
            },
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '提交',
                        disabled: false
                    },
                    {
                        name: 'cancel',
                        displayName: '取消',
                        disabled: false
                    }
                ]
            }
        ]
    },

    task: {
        edit: [
            {
                type: 'title',
                displayName: '任务编辑'
            },
            {
                type: 'text',
                name: 'taskCode',
                displayName: '任务编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'taskName',
                displayName: '任务名称',
                defaultValue: ''
            },
            {
                type: 'select',
                name: 'categoryCode',
                displayName: '任务类型',
                defaultValue: '',
                placeholder: '',
                isRequire: true,
                message: '请选择任务类型',
                disabled: false,
                options: null
            },
            {
                type: 'input',
                name: 'taskDesc',
                displayName: '任务描述',
                defaultValue: '',
                placeholder: '参数描述与结果描述',
                isRequire: false,
                message: '',
                disabled: false
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '提交',
                        disabled: false
                    },
                    {
                        name: 'cancel',
                        displayName: '取消',
                        disabled: false
                    }
                ]
            }
        ],
        detail: [
            {
                type: 'title',
                displayName: '基本信息'
            },
            {
                type: 'text',
                name: 'taskCode',
                displayName: '任务编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'taskName',
                displayName: '任务名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'categoryName',
                displayName: '任务类型',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'taskDesc',
                displayName: '任务描述',
                defaultValue: ''
            },
            {
                type: 'title',
                displayName: '任务流程'
            },
            {
                type: 'text',
                name: 'processCode',
                displayName: '流程编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processTypeName',
                displayName: '类型名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processDesc',
                displayName: '流程描述',
                defaultValue: ''
            }
        ],
        add: [
            {
                type: 'input',
                name: 'taskName',
                displayName: '任务名称',
                defaultValue: '',
                placeholder: '中英文下划线，任务名称不可重复',
                isRequire: true,
                message: '请填写任务名称',
                disabled: false,
                validateTrigger: 'onBlur'
            },
            {
                type: 'select',
                name: 'categoryCode',
                displayName: '任务类型',
                defaultValue: '',
                placeholder: '类型选择',
                isRequire: true,
                message: '请选择任务类型',
                disabled: false,
                options: null
            },
            {
                type: 'input',
                name: 'taskDesc',
                displayName: '任务描述',
                defaultValue: '',
                placeholder: '参数描述与结果描述',
                isRequire: false,
                message: '',
                disabled: false
            },
            {
                type: 'choose_flow',
                name: 'processCode',
                displayName: '服务流程'
            },
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '提交',
                        disabled: false
                    },
                    {
                        name: 'cancel',
                        displayName: '取消',
                        disabled: false
                    }
                ]
            }
        ],
        report: [
            {
                type: 'text',
                name: 'taskName',
                displayName: '任务名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'resultName',
                displayName: '决策结果',
                defaultValue: ''
            },
            {
                type: 'title',
                displayName: '用户基本信息'
            },
            {
                type: 'text_array',
                name: 'taskReqParam',
                defaultValue: ''
            },
            {
                type: 'title',
                displayName: '决策详情'
            },
            {
                type: 'text_array',
                name: 'taskRespParam',
                defaultValue: ''
            }
        ]
    },

    service: {
        detail: [
            {
                type: 'title',
                displayName: '基本信息'
            },
            {
                type: 'text',
                name: 'serviceCode',
                displayName: '服务编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'serviceName',
                displayName: '服务名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'categoryName',
                displayName: '服务类型',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'serviceDesc',
                displayName: '服务描述',
                defaultValue: ''
            },
            {
                type: 'title',
                displayName: '任务流程'
            },
            {
                type: 'text',
                name: 'processCode',
                displayName: '流程编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processTypeName',
                displayName: '类型名称',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'processDesc',
                displayName: '流程描述',
                defaultValue: ''
            }
        ],
        edit: [
            {
                type: 'title',
                displayName: '服务编辑'
            },
            {
                type: 'text',
                name: 'serviceCode',
                displayName: '服务编码',
                defaultValue: ''
            },
            {
                type: 'text',
                name: 'serviceName',
                displayName: '服务名称',
                defaultValue: ''
            },
            {
                type: 'select',
                name: 'categoryCode',
                displayName: '服务类型',
                defaultValue: '',
                placeholder: '',
                isRequire: true,
                message: '请选择任务类型',
                disabled: false,
                options: null
            },
            {
                type: 'input',
                name: 'serviceDesc',
                displayName: '服务描述',
                defaultValue: '',
                placeholder: '参数描述与结果描述',
                isRequire: false,
                message: '',
                disabled: false
            },
            {
                type: 'text',
                name: 'processName',
                displayName: '流程名称',
                defaultValue: ''
            },
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '提交',
                        disabled: false
                    },
                    {
                        name: 'cancel',
                        displayName: '取消',
                        disabled: false
                    }
                ]
            }
        ],
        add: [
            {
                type: 'input',
                name: 'serviceName',
                displayName: '服务名称',
                defaultValue: '',
                placeholder: '中英文下划线，任务名称不可重复',
                isRequire: true,
                message: '请填写任务名称',
                disabled: false,
                validateTrigger: 'onBlur'
            },
            {
                type: 'select',
                name: 'categoryCode',
                displayName: '服务类型',
                defaultValue: '',
                placeholder: '类型选择',
                isRequire: true,
                message: '请选择任务类型',
                disabled: false,
                options: null
            },
            {
                type: 'input',
                name: 'serviceDesc',
                displayName: '服务描述',
                defaultValue: '',
                placeholder: '参数描述与结果描述',
                isRequire: false,
                message: '',
                disabled: false
            },
            {
                type: 'choose_flow',
                name: 'processCode',
                displayName: '服务流程'
            },
            {
                type: 'button',
                content: [
                    {
                        name: 'submit',
                        displayName: '保存并生成服务api',
                        disabled: false
                    }
                ]
            }
        ]
    }
};
