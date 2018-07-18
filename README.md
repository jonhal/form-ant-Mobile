# trans-form-base-ant
config json then make form 

## Getting Started

通过json配置表，可以生成一个表单，表单中的控件基于ant生成

[效果，请用力戳戳戳戳戳戳戳戳戳戳戳戳戳戳戳我](https://jonhal.github.io/form-ant-Mobile/#/) **支持配置文件下载，导出配置文件覆盖到src/components/FormJson文件夹**

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
```


| 配置项            | 说明                                       | 类型      | 必填   | 默认值     |
| ---------------- | ---------------------------------------- | ------- | ---- | ------- |
| type          | 填写控件类型，可以是input,select,imagePicker,text,popover | string  | 是    | 无       |
| name             | 填写控件的name需要和后端约定作为提交的key | string  | 是    | 无 |
| displayName      | 控件左边的文字提示    | string | 是   | 无   |
| defaultValue         | 控件的默认提交值 | string  | 否    | 无       |
| isRequire       | 是否是必填项 | bool  | 否    | false       |
| message      | 校验失败之后的提示文字 | object  | 否    | 无       |
| disabled | 控件是否可以点击 | bool   | 否    | flase       |
| checkType          | 内置的校验规则比如phone              |   string      |    否  |    无     |
| length          | 限制字段的长度              |   number      |  否    |     无    |
| checkReg          | 控件的校验正则              |    reg     |    否  |    无     |
| colNum          | input type 是select的时候才会有这个选项，单选框的个数与下面options的长度对应    |    number     |   否   |     无    |
| options          | 数组，每个元素是一个key，value的json，key为选择项的提示，value为选择项提交的值   |   array      |   否   |    无     |


##### 建议下载代码库，npm run start一下看一下demo，很快就能知道怎么使用了
![ScreenShot](/demo.png)


