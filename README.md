# trans-form-base-ant
config json then make form 

## Getting Started

通过json配置表，可以生成一个表单，表单中的控件基于ant生成

### Prerequisites
基于ant-mobile，有一个ant-mobile可运行的环境
然后在项目中直接使用src/components/TransForm 源文件 参考demo使用

#### 举例
1. 引入src源文件
2. 配置form控件项，是一个数组形式的json，比如下面的formArray
3. ```        let list_tpl =
            <form>
                <List>
                    {
                        Array.isArray(formArray) && formArray.map((item, index, array) => {
                            return TransForm(item, index, options);
                        })
                    }
                </List>
            </form>
 4. 这个list_tpl 就是基于ant生成的表格控件，可以放在合适的地方嵌入
 
 #### 配置项说明
 ```
 export default {
    /**
     * 表单配置说明
     */
    'settingMine': [
        {
            'type': 'input', // 类型
            'name': 'phone', 
            'displayName': '手机号', 
            'defaultValue': '',
            'placeholder': '这是一个带校验必填的手机框',
            'isRequire': true, // 是否必须
            'message': '',
            'disabled': false,
            'checkType': 'phone', // 校验规则，可以是正则，也可以是内置的一些比如phone，当然目前也只有phone
            'length': 11 // 长度限定
        },
        {
            'type': 'select',
            'name': 'urgentContactRelation',
            'displayName': '单选框',
            'defaultValue': '',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'colNum': 1, // 选择框的列数，这里是1，所以下面的options数组的length也是1，不匹配的话会报错
            'options': [
                  {
                      'label': '父母',
                      'value': '父母'
                  },
                  {
                      'label': '子女',
                      'value': '子女'
                  },
                  {
                      'label': '同事',
                      'value': '同事'
                  },
                  {
                      'label': '朋友',
                      'value': '朋友'
                  }
              ]  // 选择框的下拉选择项的label和value
        },
        {
            'type': 'select',
            'name': 'businessAddress',
            'displayName': '所在省市',
            'defaultValue': '',
            'isRequire': true,
            'message': '',
            'disabled': false,
            'colNum': 3,
            'options': [
                  {
                      'label': '父母',
                      'value': '父母'
                  },
                  {
                      'label': '子女',
                      'value': '子女'
                  },
                  {
                      'label': '同事',
                      'value': '同事'
                  },
                  {
                      'label': '朋友',
                      'value': '朋友'
                  }
              ]
        },
        {
            'type': 'imagePicker',
            'name': 'image',
            'displayName': '图片控件',
            'defaultValue': '',
            'placeholder': '',
            'isRequire': true,
            'message': '',
            'disabled': false
        }
    ]
}

##### 建议下载代码库，npm run start一下看一下demo，很快就能知道怎么使用了
![ScreenShot](/demo.png)


