/**
 * @file 首页
 * simotophs@gmail.com
 */
import React , { Component } from 'react';
import './FormDemo.less';
import Header from '../../components/header/header';
import {Toast, List, WhiteSpace, Button, InputItem, Row, Col } from 'antd';
import {createForm} from 'rc-form/lib';
import QueryForm from '../../components/PcTransForm/queryForm/queryForm';
// json
import TransJson from '../../conf/common/FormJson';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

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
                    <Row>
                        <Col span={12}>
                            <CodeMirror
                                options={
                                    {
                                        mode: 'javascript',
                                        lineNumbers: true
                                    }
                                }
                                autoSave={true}
                                value={JSON.stringify(this.state.formConfig, null, 2)}
                                onChange={this.changeJson}
                            />
                            <Button type="primary"  style={{ marginTop: '10px' }} onClick={this.handleOutput}>导出</Button>
                        </Col>
                        <Col span={12}>
                            <QueryForm data={this.state.formConfig}/>
                        </Col>
                   </Row>
                </div>
            </div>
        )
    }
}


export default createForm()(Index);
