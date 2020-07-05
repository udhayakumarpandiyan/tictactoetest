import React, { Component } from 'react';
import '../styles/index.scss';
import { Row, Col, Select, InputNumber, Button, Tabs } from 'antd';
import TodaySales from '../components/TodaySales';
import Return from '../components/Return';
import PriceList from '../components/PriceList';

import { connect } from 'react-redux';
import { getItems } from '../../../store/actions/product';
import { saveBill, getBills } from '../../../store/actions/billing';
import Bills from '../components/Bills';

const Option = Select.Option;
const { TabPane } = Tabs;



class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = { showTemplate: false, partyColors: ["#000000"] };
    }

    componentDidMount() {
        if (!this.props.items) {
            this.props.getItems();
        }
        // if (!this.props.bills) {
            this.props.getBills();
        //}
    }

    onQuantityChange = () => {

    }
    getPriceList = () => {

    }
    onSubmitBill = (bill) => {
        this.props.saveBill(bill);
    }

    render() {
        return (<div className="module_container">
            <label className="page-title">{`Sales`}</label>
            <hr className="horizontal-line"></hr>
            <Row className="content">
                <Col className="column">
                    <Tabs tabPosition={this.state.tabPosition}>
                        <TabPane tab="Billing" key="1">
                            <TodaySales onQuantityChange={this.onQuantityChange}
                                onSubmitBill={this.onSubmitBill} bills={this.props.bills}/>
                        </TabPane>

                        <TabPane tab="Sales-return" key="2">
                            <Return />
                        </TabPane>
                        <TabPane tab="Bills" key="3">
                            <Bills bills={this.props.bills} />
                        </TabPane>
                        <TabPane tab="Price List" key="4">
                            <PriceList getPriceList={this.getPriceList} items={this.props.items} />
                        </TabPane>

                    </Tabs>

                </Col>
            </Row>
        </div>
        )

    }

}
const mapStateToProps = (state) => {
    return {
        items: state.productReducer && state.productReducer.items,
        saved: state.billingReducer && state.billingReducer.saved,
        bills: state.billingReducer && state.billingReducer.bills
    }
}

export default connect(mapStateToProps, { getItems, saveBill, getBills })(Sales);