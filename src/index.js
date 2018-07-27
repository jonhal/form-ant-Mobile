/**
 * @file 入口
 * @author simotophs@gmail.com
 * @date    2017-11-22 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import {render} from 'react-dom';
// 引入React-Router模块
import { BrowserRouter as Router, Route, Link ,HashRouter} from "react-router-dom";
// 顶部导航
import Header from './components/header/header';
// 引入单个页面（包括嵌套的子页面）
import FormDemoH5 from './page/H5FormDemo/H5FormDemo';
import FormDemoPC from './page/PCFormDemo/PCFormDemo';
import Index from './page/index/index';


if (process.env.NODE_ENV === 'production') {
    require('./index.less');
}

// if (module.hot) {
//     module.hot.accept();
// }



// render(
//     <div>hello</div>
// , document.getElementById('app'));
// // 配置路由
render((
    <div>
       <HashRouter>
            <div>
                {/* <ul className="router">
                    <li>
                        <Link to="/">index</Link>
                    </li>
                    <li>
                        <Link to="/page1">page1</Link>
                    </li>
                </ul> */}
                <Route exact path="/" component={Index} />
                <Route exact path="/h5" component={FormDemoH5} />
                <Route exact path="/pc" component={FormDemoPC} />
            </div>
        </HashRouter>
    </div>
), document.getElementById('app'));