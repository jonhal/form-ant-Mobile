/**
 * @file 首页
 * simotophs@gmail.com
 */
import React , { Component } from 'react';
import './FormDemo.less';
import Header from '../../components/header/header';
import {Toast, List, Card, Flex, WhiteSpace, Button, InputItem} from 'antd';
import {createForm} from 'rc-form/lib';
import QueryForm from '../../components/PcTransForm/queryForm/queryForm';
// json
import TransJson from '../../conf/common/FormJson';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig:  TransJson.settingMine
        }
    }


    handleImagePickerChange(files, type, index) {
        this.setState({
            image: files
        });
    }
    
    componentDidMount() {

    }


    changeJson = data => {
        try {
            let formConfig = JSON.parse(data);
            console.log(formConfig);
            this.setState({
                formConfig,
            });
        } catch (e) {
            console.error('json格式有误', e);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // alert(2);
        this.props.form.validateFields({ force: true }, (error) => {
            // alert(1)
        //   if (!error) {
        //     console.log(this.props.form.getFieldsValue());
        //   } else {
        //     console.log(error);
        //     alert('Validation failed');
        //   }
        });
      }

    render() {
        return (
            <div>
                <Header title="pc 表单的演示"/>
                <div className="block">
                    <QueryForm data={this.state.formConfig}/>
                </div>
            </div>
        )
    }
}


export default createForm()(Index);
