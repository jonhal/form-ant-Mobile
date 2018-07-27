/**
 * @file 首页
 * simotophs@gmail.com
 */
import React , { Component } from 'react';
import './FormDemo.less';
import Header from '../../components/header/header';
import {Toast, List, Card, Flex, WhiteSpace, Button, InputItem} from 'antd-mobile';
import {createForm} from 'rc-form/lib';
import TransForm from '../../components/H5TransForm/H5TransForm';
// json
import TransJson from '../../conf/common/FormJson';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig: TransJson.settingMine
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


    makeDownload = (content, filename) => {
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        var blob = new Blob([content]);
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }

    handleOutput = (e) => {
        e.preventDefault();
        let newContent = {
            'settingMine':this.state.formConfig
        }
        let contentString =  'export default ' + JSON.stringify(newContent);
        console.log(contentString)
        this.makeDownload(contentString, 'Formjson.jsx');
        Toast.info('下载成功，然后把导出文件覆盖到src/components/FormJson文件夹下，运行代码即可展示自定义表单', 10);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields({ force: true }, (error) => {
          if (!error) {
            console.log(this.props.form.getFieldsValue());
          } else {
            console.log(error);
            alert('Validation failed');
          }
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
        console.log(this.state);
        const Item = List.Item;
        let list_tpl =
            <List>

                    {
                        Array.isArray(this.state.formConfig) && this.state.formConfig.map((item, index, array) => {
                            // 通用层
                            return TransForm(item, index, options);
                        })
                    }
          
                <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                    提  交
                </Button>
            </List>
        return (
            <div>
                <Header title="H5的表单的演示"/>
                <div className="block">
                    <Flex>
                        <Flex.Item>
                            <Card>
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
                            </Card>
                        </Flex.Item>
                        <Flex.Item>
                            <Card>
                                {list_tpl}
                            </Card>
                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}


export default createForm()(Index);