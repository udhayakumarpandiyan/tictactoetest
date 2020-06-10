import React, { useState } from 'react';
import { Row, Col, Select, InputNumber, Button, Table, Input } from 'antd';

const Option = Select.Option;
const products = [{ name: "Gol", code: "23", price: 100, quantity: 2 },
{ name: "Golsad", code: "2asd3", price: 10, quantity: 5 }];

const columns = [
    {
        title: 'Qty',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Product details',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },

    {
        title: 'Amount',
        render: (text, row) => <span>{row.quantity * row.price}</span>
    }

];


const TodaySales = (props) => {
    const [showBill, changeShowBill] = useState(false);

    const onGenerateBill =(props) =>{
        
    }
    return (
        <div className="content_container">
            <div>
                <label>Bill Number </label>
                <InputNumber min={0} max={100000} defaultValue={1}
                    placeHolder="Quantity" onChange={props.onQuantityChange} />
            </div>

            <input className="input" type="date" />



            <Select placeholder="Product code" mode="combobox">
                <Option key="MMroduct">MMroduct</Option>
                <Option key="Product">Product</Option>
            </Select>

            <div className="quantity-container">
                <label>Rupees </label>
                <InputNumber min={0} max={100000} defaultValue={1}
                    placeHolder="Quantity" onChange={props.onQuantityChange} />
                <label>Paisa </label>
                <InputNumber min={0} max={99} defaultValue={1}
                    placeHolder="Quantity" onChange={props.onQuantityChange} />
            </div>


            <div className="quantity-container">
                <label>Quantity </label>
                <InputNumber min={1} max={1000} defaultValue={1}
                    placeHolder="Quantity" onChange={props.onQuantityChange} />
                <Select placeholder="Piece(s)" mode="combobox">
                    <Option key="pieces">Pieces</Option>
                    <Option key="meters">Meters</Option>
                    <Option key="kg">Kilogram</Option>
                    <Option key="grams">Product</Option>
                    <Option key="ml">Liter</Option>

                </Select>
            </div>

            <div className="quantity-container">
                <label>{`Rs.${100}.${50}`} </label>


                <Button> Next Product </Button>
            </div>
            <Button>Generate Bill</Button>

            <div className="bill-container" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="bill-top-container">
                    <label>Bill no : </label>
                    <label>Date : 27/05/1988 </label>
                </div>
                <Table dataSource={products}
                    pagination={false}
                    columns={columns}
                    bordered
                />
                <div className="total-container">
                    <label className="label">Total</label>
                    <label className="amount">{`Rs. ${250}.${50}`}</label>
                </div>
                <div>
                    <Input placeholder="Round-off amount" />
                    <Input placeholder="Amount" />
                    <Input placeholder="Amount Paid" />
                    <label>Balance to be paid: Rs.10</label>

                </div>
            </div>


            <Button>Submit Bill</Button>

        </div>

    )
}
export default TodaySales;