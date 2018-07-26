/**
 * @file 首页
 * simotophs@gmail.com
 */
import React from 'react';
import Header from '../../components/header/header';
import style from './index.less';
import {Link, HashRouter} from 'react-router-dom';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header />
                <h1>表单控件生成</h1>
                <div className="content">
                    <Link to="/h5">h5 表单 </Link>
                    <Link to="/pc">pc 表单 </Link>
                </div>
            </div>
        )
    }
}
