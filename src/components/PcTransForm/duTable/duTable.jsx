/**
 * @file DuTable
 * @author lujunhao
 */

import React from 'react';
import {Table, Select, Input} from 'antd';

export default class DuTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
        this.pagination = {};
    }

    // 表格事件处理
    actionOperate = (id, type, data, handle) => {
        if (handle === 'click') {
            this.props.onClick && this.props.onClick(id, type, data);
        }
    }

    handleSelectChange = value => {
        this.props.onSelect(value);
    }

    handleEditInputChange = (text, title, record) => {
        record[title] = text;
        this.props.onChange && this.props.onChange(text, record);
    }

    // 格式化表格头部
    tableFormatHearder = data => {
        let header = data.header;
        let titleArray = [];
        header.every((one, index) => {
            if (one.type === 'click') {
                titleArray.push({
                    title: one.value,
                    dataIndex: one.key,
                    key: one.key,
                    fixed: one.fixed ? 'right' : false,
                    width: one.width || 50,
                    render: (text, record) => {
                        let isArray = Array.isArray(text.value);
                        return (
                            <a
                                disabled={isArray ? !text.value[1] : false}
                                onClick={() => this.actionOperate(text.key, one.key, record, 'click')}
                            >
                                {isArray ? text.value[0] : text.value}
                            </a>
                        );
                    }
                });
            }
            else if (one.type === 'select') {
                titleArray.push({
                    title: one.value,
                    dataIndex: one.key,
                    key: one.key,
                    fixed: one.fixed ? 'right' : false,
                    width: 100,
                    render: (text, record) => {
                        return (
                            <Select labelInValue value={text.defaultValue} onChange={this.handleSelectChange}>
                                {
                                    Array.isArray(text.options) && text.options.map(item =>
                                        <Select.Option
                                            value={item.value + '|' + text.key}
                                            key={item.value}
                                        >
                                            {item.displayName}
                                        </Select.Option>
                                    )
                                }
                            </Select>
                        );
                    }
                });
            }
            else {
                if (one.edit) {
                    titleArray.push({
                        title: one.value,
                        dataIndex: one.key,
                        key: one.key,
                        fixed: one.fixed ? 'right' : false,
                        width: 200,
                        render: (text, record) => {
                            return (
                                <Input
                                    style={{margin: '-5px 0'}}
                                    defaultValue={text}
                                    onChange={e => this.handleEditInputChange(e.target.value, one.key, record)}
                                />
                            );
                        }
                    });
                }
                else {
                    titleArray.push({
                        title: one.value,
                        dataIndex: one.key,
                        key: one.key,
                        fixed: one.fixed,
                        width: one.width || ''
                    });
                }
            }
            return one;
        });
        this.setState({
            columns: titleArray
        });
    }

    // 格式化表格内容
    tableFormatContent = contentData => {
        let data = contentData.data;
        let contentArray = [];
        data.every((one, index) => {
            let itemJson = {};
            one.every((item, index2) => {
                if (typeof item.value === 'boolean') {
                    item.value = `${item.value}`;
                }
                Object.assign(itemJson, {[item.key]: item.value});
                return item;
            });
            contentArray.push(itemJson);
            return one;
        });
        this.setState({
            columnsData: contentArray
        });
    }

    // 格式化表格
    tableFormatData = data => {
        this.tableFormatHearder(data);
        this.tableFormatContent(data);
    }

    componentWillReceiveProps(nextProps) {
        this.tableFormatData(nextProps.listData);
    }

    componentDidMount() {
        this.tableFormatData(this.props.listData);
    }

    setPage = () => {
        let listData = this.props.listData;
        if (!listData) {
            return;
        }
        let page = listData.page;
        page && this.tablePage(page);
    }

    // 配置分页
    tablePage = page => {
        let {totalCount, pageNo} = page;
        this.pagination.total = totalCount;
        this.pagination.current = pageNo * 1;
        // this.pagination.showTotal = function (totalCount) {
        //     return ('共有' + totalCount + '条');
        // };
        if (this.props.pageSizeOptions) {
            this.pagination.showSizeChanger = true;
            this.pagination.pageSizeOptions = this.props.pageSizeOptions;
            this.pagination.onShowSizeChange = (current, size) => {
                this.props.onChangePage(current, size);
            };
        }
        this.pagination.onChange = (current, size) => {
            this.props.onChangePage(current, size);
        };
    }

    // checkbox状态
    onSelectChange = selectedRowKeys => {
        this.setState({selectedRowKeys});
    }

    // 展开项
    expandedRowRender = record => {
        return this.props.onExpandedRowRender(record);
    }

    getRowSelection = () => {
        return {
            selectedRowKeys: this.props.selectParams.selectedRowKeys,
            type: this.props.selectParams.type || 'checkbox',
            onChange: this.props.selectParams.onSelectChange,
            getCheckboxProps: this.props.selectParams.getCheckboxProps,
            onSelectAll: this.props.selectParams.onSelectAll
        };
    }

    render() {
        this.setPage();
        return this.state.columns ? (
            <Table
                rowKey={(record, index) => this.props.keyName ? record[this.props.keyName] : index}
                rowSelection={this.props.selectParams && this.getRowSelection()}
                bordered defaultCurrent={1}
                columns={this.state.columns}
                dataSource={this.state.columnsData}
                pagination={this.props.listData.page ? this.pagination : false}
                loading={this.props.loading}
                scroll={{x: this.props.tableWidth || 1400, y: this.props.tableHeight || ''}}
                expandedRowRender={this.props.onExpandedRowRender && this.expandedRowRender}
                expandedRowKeys={this.props.expandedRowKeys || []}
            />
        ) : null;
    }
}
