import React, { Component } from 'react';
import '../styles/index.scss';
import { Row, Col, Select, InputNumber, Button, Tabs } from 'antd';
import TodaySales from '../components/TodaySales';
import Return from '../components/Return';
import StockList from '../components/StockList';

const Option = Select.Option;
const { TabPane } = Tabs;



class StockDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { showTemplate: false, partyColors: ["#000000"] };
    }
    onQuantityChange = () => {

    }
    getPriceList = () => {

    }
    render() {
        return (<div className="module_container">
            <label className="page-title">{`Stock Details`}</label>
            <hr className="horizontal-line"></hr>
            <Row className="content">
                <Col>
                    <StockList getPriceList={this.getPriceList} />

                </Col>
            </Row>
        </div>
        )

    }






}
export default StockDetails;