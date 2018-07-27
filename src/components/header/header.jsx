/**
 * @file 顶部导航
 * @author simotophs@gmail.com
 */

import React from 'react';

import './header.less';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: '',
    };
    
    componentDidMount = () => {
    }


    render() {
        return (
            <div className="header">
                   {this.props.title}
            </div>
        );
    }
}