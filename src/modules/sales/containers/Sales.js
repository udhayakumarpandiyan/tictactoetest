import React, { Component } from 'react';
import '../styles/index.scss';
import { Row, Col, Select, InputNumber, Button, Tabs } from 'antd';
import TodaySales from '../components/TodaySales';
import Return from '../components/Return';
import PriceList from '../components/PriceList';

const Option = Select.Option;
const { TabPane } = Tabs;



class Sales extends Component {
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
            <label className="page-title">{`Sales`}</label>
            <hr className="horizontal-line"></hr>
            <Row className="content">
                <Col className="column">
                    <Tabs tabPosition={this.state.tabPosition}>
                        <TabPane tab="Billing" key="1">
                            <TodaySales onQuantityChange={this.onQuantityChange} />
                        </TabPane>

                        <TabPane tab="Sales-return" key="2">
                            <Return />
                        </TabPane>
                        <TabPane tab="Price List" key="3">
                            <PriceList getPriceList={this.getPriceList} />
                        </TabPane>
                    </Tabs>

                </Col>
            </Row>
        </div>
        )

    }






}
export default Sales;