import React, { Component } from 'react';

import MainContent from '../components/Content';
import HomePage from '../../modules/home/containers/HomePage';
import { Layout, Button, Drawer, Icon, Menu } from 'antd';

import { connect } from 'react-redux';
import RoutePath from '../../route';
import history from '../../route/history';

import '../styles/index.scss';

class Shell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shell">
                <div className="main_content">
                    <MainContent />
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Shell);