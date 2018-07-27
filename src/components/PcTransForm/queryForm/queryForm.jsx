/**
 * @file 筛选器
 * @author
 */

import React from 'react';
import {Form, Button} from 'antd';

import duForm from '../duForm/duForm.jsx';

const FormItem = Form.Item;
const dateFormat = 'YYYY-MM-DD';

class QueryForm extends React.Component {

    /**
     * 状态层
     */
    state = {
        // 提交状态
        submitLoading: false
    }

    /**
     * 事件层 - 重置表单
     *
     * @return {void}
     */
    handleReset = event => {
        this.props.form.resetFields();
        this.handleSubmit(event);
    }

    /**
     * 事件层 - 表单提交
     *
     * @param   {Object} event 节点
     * @return {void}
     */
    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields((err, fieldsValue) => {
            if (!err) {
                this.setState({
                    submitLoading: true
                });
                let {rangePickerValue, newValues} = [null, null];
                // rangePicker参数转为startTime和endTime
                if (Array.isArray(fieldsValue.time)) {
                    if (fieldsValue.time.length > 0) {
                        rangePickerValue = {
                            startTime: fieldsValue.time[0].format(dateFormat),
                            endTime: fieldsValue.time[1].format(dateFormat)
                        };
                    }
                    else {
                        rangePickerValue = {
                            startTime: '',
                            endTime: ''
                        };
                    }
                    delete fieldsValue.time;
                }
                // 过滤器 + 日历 + 分页器
                newValues = Object.assign(
                    fieldsValue,
                    rangePickerValue,
                    {
                        pageNo: 1,
                        pageSize: this.props.defaultItem
                    }
                );
                console.log('Received values of form: ', newValues);
                this.props.onSubmit(newValues, () => {
                    // 框架会导致重复set o(╯□╰)o
                    this.setState({
                        submitLoading: false
                    });
                });
            }
        });
    }

    render() {

        // Ant表单方法
        const getFieldDecorator = this.props.form.getFieldDecorator;
        // 表单配置项
        const options = {
            libs: {
                getFieldDecorator
            },
            params: {
                formItemLayout: {
                    labelCol: {span: ''},
                    wrapperCol: {span: '', offset: 0}
                },
                selectStyle: {
                    marginBottom: 0,
                    width: 150
                },
                inputStyle: {
                    width: 200
                }
            }
        };
        let formListTpl = Array.isArray(this.props.data) && this.props.data.map((item, index, array) => {
            // 通用层
            return duForm(item, index, options);

        });

        return (
            <Form layout="inline" onSubmit={this.handleSubmit} className={this.props.className}>
                {formListTpl}
                <FormItem>
                    <Button type="primary"
                            htmlType="submit"
                            loading={this.state.submitLoading}
                    >
                        搜索
                    </Button>
                    <Button type="default"
                            style={{marginLeft: 8}}
                            onClick={this.handleReset}
                    >
                        重置
                    </Button>
                </FormItem>
                {this.props.otherBtn}
            </Form>
        );
    }
}

export default Form.create()(QueryForm);
