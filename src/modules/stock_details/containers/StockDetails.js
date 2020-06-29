import React, { Component } from 'react';
import '../styles/index.scss';
import { Row, Col } from 'antd';
import StockList from '../components/StockList';

class StockDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { showTemplate: false, partyColors: ["#000000"] };
    }
    onQuantityChange = () => {

    }
    getPriceList = () => {

    }

    addNewItem = (item) => {
        this.props.addNewItem(item);
    }


    render() {
        return (<div className="module_container">
            <label className="page-title">{`Stock Details`}</label>
            <hr className="horizontal-line"></hr>
            <Row className="content">
                <Col>
                    <StockList getPriceList={this.getPriceList}
                        addNewItem={this.addNewItem} />
                </Col>
            </Row>
        </div>
        )

    }






}
export default StockDetails;