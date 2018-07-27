/**
 * @file localTable
 * @author
 */

import OPTIONS from './options.jsx';

export default {
    /**
     * 添加模型
     */
    addModel: {
        REQPARAM: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'isRequire',
                    value: '是否必须',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'edit',
                    content: {
                        key: 'name',
                        value: '编辑'
                    },
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'name',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        },

        RESPPARAM: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'edit',
                    content: {
                        key: 'name',
                        value: '编辑'
                    },
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'name',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        }
    },
    modelDetail: {
        REQUEST: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false,
                    width: '20%'
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false,
                    width: '30%'
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false,
                    width: '10%'
                },
                {
                    key: 'isRequire',
                    value: '是否必须',
                    fixed: false,
                    width: '20%'
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                }
            ]
        },
        REQUESTEDIT: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false,
                    width: '20%'
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false,
                    edit: true,
                    width: '30%'
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false,
                    width: '10%'
                },
                {
                    key: 'isRequire',
                    value: '是否必须',
                    fixed: false,
                    width: '10%'
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%',
                    edit: true
                }
            ]
        },
        RESPOSE: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                }
            ]
        },
        RESPOSEEDIT: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false,
                    edit: true
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%',
                    edit: true
                }
            ]
        }
    },

    /**
     * 流程列表
     */
    flowList: {
        header: [
            {
                key: 'processCode',
                value: '流程编码',
                fixed: false
            },
            {
                key: 'processName',
                value: '流程名称',
                fixed: false
            },
            {
                key: 'categoryName',
                value: '流程类型',
                fixed: false
            },
            {
                key: 'createTime',
                value: '创建时间',
                fixed: false
            },
            {
                type: 'click',
                value: '操作',
                key: 'view',
                width: 80,
                content: {
                    key: 'processCode',
                    status: 'processStatus',
                    value: {
                        INIT: '继续编辑',
                        STASH: '继续编辑',
                        COMPLETE: '查看'
                    }
                },
                fixed: false
            },
            {
                type: 'click',
                value: '操作',
                key: 'delete',
                content: {
                    key: 'processCode',
                    value: '删除'
                },
                fixed: false
            }
        ]
    },

    flow: {
        // 选择流程
        ModelChooseFlow: {
            header: [
                {
                    key: 'processCode',
                    value: '流程编码',
                    fixed: false
                },
                {
                    key: 'processName',
                    value: '流程名称',
                    fixed: false
                },
                {
                    key: 'categoryName',
                    value: '流程类型',
                    fixed: false
                },
                {
                    key: 'relateServiceCount',
                    value: '应用服务数',
                    fixed: false
                }
            ]
        },
        // 规则详情
        ruleScoreDetail: {
            header: [
                {
                    key: 'input',
                    value: '参数名称',
                    fixed: false
                },
                {
                    key: 'minValue',
                    value: '最小值',
                    fixed: false
                },
                {
                    key: 'maxValue',
                    value: '最大值',
                    fixed: false
                },
                {
                    key: 'resName',
                    value: '决策',
                    fixed: false
                }
            ]
        },
        ruleHitDetail: {
            header: [
                {
                    key: 'input',
                    value: '参数名称',
                    fixed: false
                },
                {
                    key: 'opName',
                    value: '参数规则',
                    fixed: false
                },
                {
                    key: 'value',
                    value: '命中目标',
                    fixed: false
                },
                {
                    key: 'resName',
                    value: '决策',
                    fixed: false
                }
            ]
        },
        ruleScoreEdit: {
            header: [
                {
                    key: 'input',
                    value: '参数名称',
                    fixed: false
                },
                {
                    key: 'minValue',
                    value: '最小值',
                    fixed: false
                },
                {
                    key: 'maxValue',
                    value: '最大值',
                    fixed: false
                },
                {
                    key: 'resName',
                    value: '决策',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'edit',
                    content: {
                        key: 'tmpKey',
                        value: '编辑'
                    },
                    fixed: false
                }, {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'tmpKey',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        },
        ruleHitEdit: {
            header: [
                {
                    key: 'input',
                    value: '参数名称',
                    fixed: false
                },
                {
                    key: 'opName',
                    value: '选择规则',
                    fixed: false
                },
                {
                    key: 'value',
                    value: '命中目标',
                    fixed: false
                },
                {
                    key: 'resName',
                    value: '决策',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'edit',
                    content: {
                        key: 'tmpKey',
                        value: '编辑'
                    },
                    fixed: false
                }, {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'tmpKey',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        },
        // 模型返回参数列表
        modelRespParam: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                }
            ]
        },
        // 模型选择列表
        modelChoose: {
            header: [
                {
                    key: 'modelCode',
                    value: '模型编码',
                    fixed: false
                },
                {
                    key: 'modelName',
                    value: '模型名称',
                    fixed: false
                },
                {
                    key: 'modelType',
                    value: '模型类型',
                    fixed: false
                },
                {
                    key: 'relateProcessCount',
                    value: '应用流程数',
                    fixed: false
                }
            ]
        }
    },

    /**
     * 任务
     */
    task: {
        list: {
            header: [
                {
                    key: 'taskCode',
                    value: '任务编码',
                    fixed: false
                },
                {
                    key: 'taskName',
                    value: '任务名称',
                    fixed: false
                },
                {
                    key: 'categoryName',
                    value: '任务类型',
                    fixed: false
                },
                {
                    key: 'createTime',
                    value: '创建时间',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'view',
                    content: {
                        key: 'taskCode',
                        value: '查看'
                    },
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'taskCode',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        },

        logList: {
            header: [
                {
                    key: 'createDate',
                    value: '日期',
                    fixed: false
                },
                {
                    key: 'createTime',
                    value: '提交时间',
                    fixed: false
                },
                {
                    key: 'taskCode',
                    value: '任务编码',
                    fixed: false
                },
                {
                    key: 'taskName',
                    value: '任务名称',
                    fixed: false
                },
                {
                    key: 'sampleCount',
                    value: '测试样本量',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'view',
                    width: 80,
                    content: {
                        key: 'logId',
                        status: 'taskStatus',
                        value: {
                            TOUPLOAD: ['上传中', false],
                            WAITING: ['待执行', false],
                            COMPLETED: ['统计详情', true],
                            '': ['统计详情', true]
                        }
                    },
                    fixed: false
                }
            ]
        },

        logDetail: {
            header: [
                {
                    key: 'lineNo',
                    value: '序号',
                    fixed: false
                },
                {
                    key: 'resultName',
                    value: '决策结果',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'view',
                    width: 80,
                    content: {
                        key: 'sampleId',
                        value: '查看报告'
                    },
                    fixed: false
                }
            ]
        },

        contrast: {
            header: [
                {
                    key: 'resultName',
                    value: '结果',
                    fixed: false
                },
                {
                    key: 'resultCount',
                    value: '数量',
                    fixed: false
                }
            ]
        }
    },

    service: {
        list: {
            header: [
                {
                    key: 'serviceCode',
                    value: '服务编码',
                    fixed: false
                },
                {
                    key: 'serviceName',
                    value: '服务名称',
                    fixed: false
                },
                {
                    key: 'categoryName',
                    value: '服务类型',
                    fixed: false
                },
                {
                    key: 'createTime',
                    value: '创建时间',
                    fixed: false
                },
                {
                    key: 'lastReqTime',
                    value: '最后调用时间',
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'view',
                    content: {
                        key: 'serviceCode',
                        value: '查看'
                    },
                    fixed: false
                },
                {
                    type: 'click',
                    value: '操作',
                    key: 'delete',
                    content: {
                        key: 'serviceCode',
                        value: '删除'
                    },
                    fixed: false
                }
            ]
        },
        detailReq: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false,
                    width: '20%'
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false,
                    width: '30%'
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false,
                    width: '10%'
                },
                {
                    key: 'isRequire',
                    value: '是否必须',
                    fixed: false,
                    width: '10%'
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                }
            ]
        },
        detailResp: {
            header: [
                {
                    key: 'name',
                    value: '字段',
                    fixed: false
                },
                {
                    key: 'displayName',
                    value: '名称',
                    fixed: false
                },
                {
                    key: 'dataType',
                    value: '类型',
                    fixed: false
                },
                {
                    key: 'desc',
                    value: '描述',
                    fixed: false,
                    width: '30%'
                }
            ],
            data: [
                [
                    {key: 'dataType', value: 'string'},
                    {key: 'desc', value: ''},
                    {key: 'displayName', value: '服务code'},
                    {key: 'name', value: 'serviceCode'}
                ],
                [
                    {key: 'dataType', value: 'string'},
                    {key: 'desc', value: ''},
                    {key: 'displayName', value: '时间戳'},
                    {key: 'name', value: 'timeStamp'}
                ],
                [
                    {key: 'dataType', value: 'string'},
                    {key: 'desc', value: ''},
                    {key: 'displayName', value: '决策结果'},
                    {key: 'name', value: 'resName'}
                ],
                [
                    {key: 'dataType', value: 'string'},
                    {key: 'desc', value: '只有中断情况下有该字段'},
                    {key: 'displayName', value: '中断原因描述'},
                    {key: 'name', value: 'resDesc'}
                ]
            ]
        }
    }
};
