/**
 * @file 首页
 * simotophs@gmail.com
 */
import React , { Component } from 'react';
import './FormDemo.less';
import Header from '../../components/header/header';
import {Toast, List} from 'antd-mobile';
import {createForm} from 'rc-form';
import TransForm from '../../components/TransForm/TransForm';
// json
import TransJson from '../../components/FormJson/FormJson';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: ""
        }
    }


    handleImagePickerChange(files, type, index) {
        this.setState({
            image: files
        });
    }

    render() {
        const {getFieldProps, getFieldError} = this.props.form;
        const options = {
            libs: {
                getFieldProps: getFieldProps,
                getFieldError: getFieldError,
                self: this
            },
            events: {
                handleImagePickerChange: this.handleImagePickerChange.bind(this)
            }
        };
        let formArray = TransJson.settingMine;
        let list_tpl =
            <form>
                <List>
                    {
                        Array.isArray(formArray) && formArray.map((item, index, array) => {
                            // 通用层
                            return TransForm(item, index, options);
                        })
                    }
                </List>
            </form>
        return (
            <div>
                <Header />
                <div className="block">
                    {list_tpl}
                </div>
            </div>
        )
    }
}


export default createForm()(Index);
