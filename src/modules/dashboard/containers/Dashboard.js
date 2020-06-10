import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import '../styles/index.scss';
import Recents from '../components/Recents';
import Data from '../components/Data';
import DataTable from '../components/DataTable';
import Card from '../../../common/card/Card';
import StackedColumnChart from '../../../common/chart/charts/column/StackedColumnChart';
import SplineChart from '../../../common/chart/charts/line/SplineChart';
import { Row, Col, Table } from 'antd';
import { fontSize } from '@material-ui/system';

let lang = {};

const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
        width: '70px',
    },

    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
        ellipsis: true,
        width: '100px',
    },
];

const contributors = [
    { rank: 1, photo: 'photo', name: 'Muthukrishnan', count: 23000 },
    { rank: 2, photo: 'photo', name: 'Sivakumar', count: 22000 },
    { rank: 3, photo: 'photo', name: 'Kuberan', count: 20500 },
    { rank: 4, photo: 'photo', name: 'Aarumugam', count: 19760 },
    { rank: 5, photo: 'photo', name: 'Jagan', count: 18564 },
    { rank: 6, photo: 'photo', name: 'Vaithialingam', count: 18345 },
    { rank: 7, photo: 'photo', name: 'Chakravarthy', count: 17680 },
    { rank: 8, photo: 'photo', name: 'Gopinath', count: 17123 },
    { rank: 9, photo: 'photo', name: 'Rajesekar', count: 15768 },
    { rank: 10, photo: 'photo', name: 'Krishnakumar', count: 14987 }
]

const data = [{
    category: "Total members",
    value: 8600000,
    leftColor: '#e9eefb',
    color: "#298ae6"
},
{
    category: "Newly joined members",
    value: 6000,
    leftColor: '#dffbeb',
    color: "#29e67b"
},
{
    category: "Departured members",
    value: 310,
    leftColor: '#fbdfe4',
    color: "#e6294c"
},

{
    category: "Pending requests",
    value: 270,
    leftColor: '#fdf5df',
    color: "#ffbb2b"
}];


const stackedOptions = {
    animationEnabled: true,
    exportEnabled: false,
    title: {
        text: null,
        fontFamily: "verdana"
    },
    axisY: {
        title: "Members",
        prefix: "",
        suffix: ""
    },
    toolTip: {
        shared: true,
        reversed: true
    },
    legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center",
        reversed: true,
        cursor: "pointer",
    },
    data: [
        {
            type: "stackedColumn",
            name: "< 18",
            showInLegend: true,
            color: "#ff00ff",
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "Jan", y: 1003 },
                { label: "Feb", y: 1753 },
                { label: "Mar", y: 2415 },
                { label: "Apr", y: 1600 },
                { label: "May", y: 1747 },
                { label: "Jun", y: 2417 },
                { label: "Jul", y: 2378 },
                { label: "Aug", y: 1578 },
                { label: "Sep", y: 1700 },
                { label: "Oct", y: 1588 },
                { label: "Nov", y: 1968 },
                { label: "Dec", y: 1658 }
            ]
        },
        {
            type: "stackedColumn",
            name: "> 18 < 25",
            showInLegend: true,
            color: "#fab505",
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "Jan", y: 1300 },
                { label: "Feb", y: 5583 },
                { label: "Mar", y: 1865 },
                { label: "Apr", y: 8615 },
                { label: "May", y: 5515 },
                { label: "Jun", y: 1545 },
                { label: "Jul", y: 8716 },
                { label: "Aug", y: 1867 },
                { label: "Sep", y: 4617 },
                { label: "Oct", y: 1800 },
                { label: "Nov", y: 6919 },
                { label: "Dec", y: 2760 },
            ]
        },
        {
            type: "stackedColumn",
            name: "> 25 < 36",
            showInLegend: true,
            color: "#0286bf",
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "Jan", y: 1400 },
                { label: "Feb", y: 8000 },
                { label: "Mar", y: 6500 },
                { label: "Apr", y: 3006 },
                { label: "May", y: 5009 },
                { label: "Jun", y: 1050 },
                { label: "Jul", y: 6086 },
                { label: "Aug", y: 3768 },
                { label: "Sep", y: 9965 },
                { label: "Oct", y: 5346 },
                { label: "Nov", y: 7558 },
                { label: "Dec", y: 2764 },
            ]
        },
        {
            type: "stackedColumn",
            width: "10px",
            name: " > 35",
            color: "#02bf34",
            showInLegend: true,
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "Jan", y: 3414 },
                { label: "Feb", y: 2212 },
                { label: "Mar", y: 2134 },
                { label: "Apr", y: 1003 },
                { label: "May", y: 1863 },
                { label: "Jun", y: 2313 },
                { label: "Jul", y: 1864 },
                { label: "Aug", y: 1004 },
                { label: "Sep", y: 2613 },
                { label: "Oct", y: 2314 },
                { label: "Nov", y: 1400 },
                { label: "Dec", y: 2314 }
            ]
        }
    ]
};

const options = {
    animationEnabled: true,
    title: {
        text: ""
    },
    axisX: {
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Members (Newly joined)",
        prefix: "",
        includeZero: true,
        fontSize: "20px"
    },
    data: [{
        yValueFormatString: "#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2019, 0), y: 2800 },
            { x: new Date(2019, 1), y: 2000 },
            { x: new Date(2019, 2), y: 4000 },
            { x: new Date(2019, 3), y: 1300 },
            { x: new Date(2019, 4), y: 3560 },
            { x: new Date(2019, 5), y: 3300 },
            { x: new Date(2019, 6), y: 7000 },
            { x: new Date(2019, 7), y: 3000 },
            { x: new Date(2019, 8), y: 5000 },
            { x: new Date(2019, 9), y: 1500 },
            { x: new Date(2019, 10), y: 5500 },
            { x: new Date(2019, 11), y: 8000 }
        ]
    }]
};
let month = "Nov 2019";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        lang = this.props.language ? this.props.language.dashboard : {};
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.language && this.props.language !== nextProps.language) {
            lang = nextProps.language.dashboard;
        }
    }

    render() {
        return (
            <div className="module_container">
                <label className="page-title">{`${lang.myDashboard} ( ${month} )`}</label>
                <hr className="horizontal-line"></hr>
                <Row gutter={30}  className="row_container">
                    {data && data.map((item, index) => (
                        <Col style={{ display: 'inline-grid' }}
                            xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
                            <Card category={item.category}
                                value={item.value}
                                color={item.color}
                                leftColor={item.leftColor} />
                        </Col>
                    ))}

                </Row>
                <hr className="horizontal-line"></hr>

                <Row gutter={[{ xs: 10, sm: 20, md:60, lg: 80 }, 80]} className="row_container">
                    <Col style={{ display: 'inline-grid' }}
                        xs={23} sm={23} md={12} lg={12} xl={12} xxl={12}>
                        <label className="sub_title">Age-wise data</label>
                        <StackedColumnChart options={stackedOptions} />
                    </Col>
                    <Col style={{ display: 'inline-grid' }}
                        xs={23} sm={23} md={12} lg={12} xl={12} xxl={12}>
                        <label className="sub_title">Monthly analysis</label>
                        <SplineChart options={options} />
                    </Col>
                </Row>
                <hr className="horizontal-line"></hr>

                <Row gutter={[{ xs: 16, sm: 20, md: 60, lg: 60 }, 60]} className="row_container">
                    <Col style={{ display: 'inline-grid' }}
                        xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <label className="sub_title">District-wise data</label>
                        <DataTable lang={lang} />
                    </Col>
                    <Col style={{ display: 'inline-grid' }}
                        xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <label className="sub_title">Top Contributors</label>
                        <Table dataSource={contributors}
                            pagination={{ pageSize: 10 }}
                            columns={columns}
                            bordered
                        />
                    </Col>

                </Row>


            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.languageReducer.language.language,
    }
}
export default connect(mapStateToProps, {})(Dashboard);
