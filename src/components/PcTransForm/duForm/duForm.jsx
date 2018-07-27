/**
 * @file DU表单
 * @author
 */

import React from 'react';
import {Form, Input, Select, DatePicker, Cascader, Radio, Upload, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
const TextArea = Input.TextArea;

let defaultOptions = {
    libs: {
        getFieldDecorator: null
    },
    params: {
        formItemLayout: {
            labelCol: {span: 6},
            wrapperCol: {span: 10, offset: 1}
        },
        formItemEmptyLabelLayout: {
            wrapperCol: {span: 10, offset: 6}
        },
        selectStyle: {
            marginBottom: 5,
            width: '100%'
        },
        titleStyle: {
            marginBottom: 5
        }
    },
    events: {
        handleSelectChange: () => {},
        handleRangePickerChange: () => {},
        handleInputChange: () => {},
        checkValidator: () => {},
        handleUploadChange: () => {}
    }
};

/**
 * 表单过滤
 *
 * @param {Object} item item
 * @param {string} index index
 * @param {Object} options options
 * @return {Object} tpl
 */
let duForm = (item, index, options) => {
    let newOptions = Object.assign(defaultOptions, options);
    let getFieldDecorator = newOptions.libs.getFieldDecorator;
    let params = newOptions.params || {};
    let events = newOptions.events || {};

    // 处理title
    if (item.type === 'title') {
        return (
            <h2 key={index} className="global-model-h2 page-slide">{item.displayName}</h2>
        );
    }
    // 处理纯文本
    else if (item.type === 'text') {
        // 有label
        if (item.displayName) {
            return (
                <FormItem
                    style={params.titleStyle}
                    key={index}
                    label={item.displayName}
                    {...params.formItemLayout}
                >
                    <span className="ant-form-text">{item.defaultValue}</span>
                </FormItem>
            );
        }
        // 无label
        return (
            <FormItem
                style={params.titleStyle}
                key={index}
                label={item.displayName}
                {...params.formItemEmptyLabelLayout}
            >
                <span className="ant-form-text">{item.defaultValue}</span>
            </FormItem>
        );
    }
    // 处理日历
    else if (item.type === 'rangePicker') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem key={index} label={item.displayName}>
                {getFieldDecorator(item.name, {
                    rules: rule,
                    initialValue: item.defaultValue
                })(
                    <RangePicker
                        onChange={events.handleRangePickerChange}
                    />
                )}
            </FormItem>
        );
    }
    // 处理输入框
    else if (item.type === 'input') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }, {
            validator: item.validateTrigger && events.checkValidator
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                {...params.formItemLayout}
            >
                {
                    getFieldDecorator(item.name, {
                        validateTrigger: item.validateTrigger || 'onChange',
                        initialValue: item.defaultValue,
                        rules: rule
                    })(<Input
                        addonAfter={item.addonAfter}
                        disabled={item.disabled}
                        placeholder={item.placeholder}
                        style={params.inputStyle}
                        onChange={events.handleInputChange}
                       />)
                }
            </FormItem>
        );
    }
    // 处理输入框
    else if (item.type === 'textarea') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                {...params.formItemLayout}
            >
                {
                    getFieldDecorator(item.name, {
                        initialValue: item.defaultValue,
                        rules: rule
                    })(<TextArea
                            rows={4}
                            disabled={item.disabled}
                    />)
                }
            </FormItem>
        );
    }
    // 处理下拉框
    else if (item.type === 'select') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                {...params.formItemLayout}
            >
                {
                    getFieldDecorator(item.name, {
                        rules: rule,
                        initialValue: item.defaultValue || undefined
                    })(<Select
                        mode={item.mode}
                        disabled={item.disabled}
                        placeholder={item.placeholder}
                        style={params.selectStyle}
                        onChange={events.handleSelectChange}
                    >
                        {
                            Array.isArray(item.options) && item.options.map(
                                (optionsItem, optionsIndex, optionsArray) => {
                                    return (
                                        <Option value={optionsItem.value}
                                                key={optionsIndex}
                                        >
                                            {optionsItem.displayName || optionsItem.value} 
                                        </Option>
                                    );
                                }
                            )
                        }
                        </Select>)
                }
            </FormItem>
        );
    }
    // 处理radio选择框
    else if (item.type === 'radio') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                extra={item.extra}
                {...params.formItemLayout}
            >
                {getFieldDecorator(item.name, {
                        initialValue: item.defaultValue || undefined,
                        rules: rule
                    })(
                    <RadioGroup
                        disabled={item.disabled}
                        placeholder={item.placeholder}
                        onChange={events.handleSelectChange}>
                        {
                            Array.isArray(item.options) && item.options.map(
                                (optionsItem, optionsIndex, optionsArray) => {
                                    return (
                                        <RadioButton
                                            key={optionsIndex}
                                            value={optionsItem.value}
                                            disabled={optionsItem.disabled}
                                        >
                                            {optionsItem.displayName}
                                        </RadioButton>
                                    );
                                }
                            )
                        }
                    </RadioGroup>
                    )}
            </FormItem>
        );
    }
    // 级联选择器
    else if (item.type === 'cascader') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                {...params.formItemLayout}
            >
                {
                    getFieldDecorator(item.name, {
                        rules: rule,
                        initialValue: item.defaultValue
                    })(
                        <Cascader options={item.options} />
                       )
                }
            </FormItem>
        );
    }
    // 上传
    else if (item.type === 'upload') {
        console.log(item.fileList);
        const props = {
            action: item.action,
            name: item.name,
            data: item.data || null,
            fileList: item.fileList,
            onChange: events.handleUploadChange
        };
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        return (
            <FormItem
                key={index}
                label={item.displayName}
                {...params.formItemLayout}
            >
                {
                    getFieldDecorator(item.name, {
                        rules: rule,
                        initialValue: item.defaultValue
                    })(
                        <Upload {...props}>
                            <Button>{item.defaultValue}</Button>
                        </Upload>
                    )
                }
            </FormItem>
        );
    }
};

export default duForm;
