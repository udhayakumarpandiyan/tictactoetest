import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.scss';
import { Row, Col } from 'antd';
import StockList from '../components/StockList';
import { addNewItem, getItems } from '../../../store/actions/product';

class StockDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { showTemplate: false, partyColors: ["#000000"] };
    }
    componentDidMount() {
        if (!this.props.items) {
            this.props.getItems();
        }
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
                    <StockList items={this.props.items}
                        getPriceList={this.getPriceList}
                        addNewItem={this.addNewItem} />
                </Col>
            </Row>
        </div>
        )

    }






}
const mapStateToProps = (state) => {
    return {
        added: state.productReducer && state.productReducer.added,
        items: state.productReducer && state.productReducer.items
    }
}

export default connect(mapStateToProps, { addNewItem, getItems })(StockDetails);