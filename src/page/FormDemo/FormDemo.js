/**
 * @file 首页
 * simotophs@gmail.com
 */
import React , { Component } from 'react';
import './FormDemo.less';
import Header from '../../components/header/header';
import {Toast, List, Card, Flex, WhiteSpace, Button, InputItem} from 'antd-mobile';
import {createForm} from 'rc-form';
import TransForm from '../../components/TransForm/TransForm';
// json
import TransJson from '../../components/FormJson/FormJson';


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
                <Header />
                <div className="block">
                    <Flex>
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
