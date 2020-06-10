import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../store/actions/language';
import Pie3D from '../../../common/chart/charts/pie';
import { Row, Col } from 'antd';

import '../styles/index.scss';

let lang = {};
const DATA = [
    { value: 36, label: 'PMK Members' },
    { value: 64, label: 'Total voters' }

];

const data1 = [
    { value: 45, label: 'Male Members' },
    { value: 53, label: 'Female Members' },
    { value: 2, label: 'Third Gender' },

];

const data2 = [
    { value: 7, label: 'Below 18' },
    { value: 19, label: 'Below 25' },
    { value: 23, label: 'Below 35' },
    { value: 29, label: 'Below 50' },
    { value: 32, label: 'Above 50' }

]


class Reports extends Component {
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
                <label className="page-title">{"Reports"}</label>
                <hr className="horizontal-line"></hr>
                {/* <Map data={locations} multiSelect={true}/> */}
                <Row type="flex" gutter={50}
                    style={{ width: "100%", height: "300px" }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={data2} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={data1} />
                    </Col>
                </Row>
                <Row type="flex" style={{ width: "100%", height: "300px" }}>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={data1} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={DATA} />
                    </Col>
                </Row>

                <Row type="flex" style={{ width: "100%", height: "300px" }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={data2} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Pie3D data={data1} />
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
export default connect(mapStateToProps, { changeLanguage })(Reports);
