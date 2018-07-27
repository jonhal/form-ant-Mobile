/**
 * @file TransForm表单
 * @author simotophs@gmail.com
 */

import React from 'react';
import {List, InputItem, Picker, ImagePicker, Popover} from 'antd-mobile';
import './H5TransForm.less';

const Item = List.Item;

let defaultOptions = {
    libs: {
        getFieldProps: null,
        getFieldError: null,
        self: null
    },
    events: {
        handleInputChange: () => { },
        handleSelectChange: () => { },
        handleImagePickerChange: () => { },
        handleTextClick: () => { }
    }
};

// 处理图片选择器
let fileData = [];
let handleImagePickerChange = function (files, type, index) {
    fileData = files;
    // 必须setState
    defaultOptions.events.handleImagePickerChange(files, type, index);
};

let TransForm = (item, index, options) => {
    let newOptions = Object.assign(defaultOptions, options);
    let getFieldProps = newOptions.libs.getFieldProps;
    let getFieldError = newOptions.libs.getFieldError;
    let events = newOptions.events;
    let self = newOptions.libs.self;


    let inputPhoneValidate = (rule, value, callback) => {
        if (/^1[34578][0-9]{9}$/.test(value)) {
            self.setState({
                [`has${item.name}Error`]: false
            });
            callback();
        }
        else {
            self.setState({
                [`has${item.name}Error`]: true
            });
            callback(new Error());
        }
    };

    if (item.type === 'input') {
        let rule = [
            {
                required: item.isRequire,
                message: item.message,
                pattern: item.checkReg
            },
            {
                validator: item.checkType === 'phone' && inputPhoneValidate
            }
        ];
        return (
            <InputItem
                {...getFieldProps(item.name, {
                    initialValue: item.defaultValue,
                    rules: rule
                })}
                key={index}
                className="ant-form-replace-input"
                labelNumber={8}
                error={self.state[`has${item.name}Error`] || !!getFieldError(item.name)}
                placeholder={item.placeholder}
                disabled={item.disabled}
                type="text"
                maxLength={item.length}
            >
                {item.displayName}
            </InputItem>
        );
    }
    else if (item.type === 'select') {
        let rule = [{
            required: item.isRequire,
            message: item.message
        }];
        let selectPickerTpl = (
            <Picker
                {...getFieldProps(item.name, {
                    initialValue: item.defaultValue,
                    rules: rule
                })}
                key={index}
                data={item.options}
                cols={item.colNum}
                error={!!getFieldError(item.name)}
            >
            <List.Item arrow="horizontal">Multiple & cascader</List.Item>
            </Picker>);
        return (
            <Picker
                {...getFieldProps(item.name, {
                    initialValue: item.defaultValue,
                    rules: rule
                })}
                key={index}
                data={item.options}
                cols={item.colNum}
                error={!!getFieldError(item.name)}
                disabled={item.disabled}
            >
            <List.Item arrow="horizontal" error={self.state[`has${item.name}Error`] || !!getFieldError(item.name)}>{item.displayName}</List.Item>
            </Picker>
        );
    }
    else if (item.type === 'imagePicker') {
        let imagePickerTpl = (
            <ImagePicker
                files={fileData}
                key={index}
                onChange={handleImagePickerChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                disabled={item.disabled}
                selectable={fileData.length < 1}
            />
        );

        return (
            <Item key={index}
                wrap
                extra={imagePickerTpl}
                error={!!getFieldError(item.name)}
                className="ant-form-replace-input">
                {item.displayName}
            </Item>
        );
    }
    else if (item.type === 'text') {
        return (
            <Item className="ant-form-replace-text"
                extra={item.defaultValue}
                key={index}
            >
                {item.displayName}
            </Item>
        );
    }
    else if (item.type === 'click') {
        return (
            <Item className="ant-form-replace-text"
                arrow="horizontal"
                extra={item.defaultValue}
                onClick={events.handleTextClick.bind(this, item)}
                key={index}
            >
                {item.displayName}
            </Item>
        );
    }
    else if (item.type === 'popover') {
        let rule = [
            {
                required: item.isRequire,
                message: item.message,
                pattern: item.checkReg
            },
            {
                validator: item.checkType === 'phone' && inputPhoneValidate
            }
        ];
        return (
            <Popover
                overlayStyle={{width: '60%'}}
                overlay={(
                    <div className="form-popover">
                        {
                            item.overlay.map((content, k) => {
                                return <p key={k} dangerouslySetInnerHTML={{__html: content}}></p>;
                            })
                        }
                    </div>
                )}
                placement={'topRight'}
                align={{
                    overflow: {adjustY: 0, adjustX: 0},
                    offset: [-10, -5]
                }}
                key={index}
            >
                <InputItem
                    {...getFieldProps(item.name, {
                        initialValue: item.defaultValue,
                        rules: rule
                    })}
                    key={index}
                    className="ant-form-replace-input"
                    labelNumber={8}
                    error={self.state[`has${item.name}Error`] || !!getFieldError(item.name)}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    type="text"
                    maxLength={item.length}
                >
                    {item.displayName}
                </InputItem>
            </Popover>
        );
    }
};

export default TransForm;
