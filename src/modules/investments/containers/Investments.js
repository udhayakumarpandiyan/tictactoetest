import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../store/actions/language';
import History from '../components/History';

import { Row, Col } from 'antd';

import '../styles/index.scss';

let lang = {};

class Investments extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTabIndex: 0 };
    }
    componentDidMount() {
        if (!this.props.language) {
            this.props.changeLanguage(0);
        }
        else {
            lang = this.props.language.members;
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.language && this.props.language !== nextProps.language) {
            lang = nextProps.language.members;
        }
    }
    onLanguageChange = (index) => {
        this.setState({ selectedTabIndex: index });

    }
    render() {
        return (
            <div className="module_container">
                <label className="page-title">{"Investments"}</label>
                <hr className="horizontal-line"></hr>
                <Row type="flex" gutter={50} className="row_container">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                       
                    </Col>
                </Row>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.languageReducer.language.language
    }
}
export default connect(mapStateToProps, { changeLanguage })(Investments);
