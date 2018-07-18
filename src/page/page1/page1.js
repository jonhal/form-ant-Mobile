/**
 * @file 首页
 * simotophs@gmail.com
 */
import React from 'react';
import Header from '../../components/header/header';

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Page1</h1>
            </div>
        )
    }
}
