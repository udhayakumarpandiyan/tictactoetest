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
        render: (text, row) => <span style={{ textAlign: "right" }}>{row.quantity * row.price}</span>
    }

];
const productCategory = [{ name: "Electricals", id: "EC" },
{ name: "Hardwares", id: "HW" },
{ name: "PVC", id: "PV" },
{ name: "Paints", id: "PT" },
{ name: "Solutions", id: "SL" },
{ name: "Plumbing", id: "PB" },
{ name: "Manufacturing", id: "MF" },
{ name: "Tools", id: "TL" }];

const name = "Jayam electricals";
const address1 = "# 5, A.R.S complex, Kumbakonam road, Panikkankuppam";
const address2 = "Panruti - 607106";

const total = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity
    , 0
)



const TodaySales = (props) => {
    const [showBill, changeShowBill] = useState(false);
    const [amount, changeAmount] = useState(total);
    const [balance, changeBalance] = useState(0);

    const onGenerateBill = () => {
        changeShowBill(true);
    }

    const onRoundOffChange = (event) => {
        let amount = total - event.target.value;
        changeAmount(amount);
    }

    const onAmountChange = (event) => {
        let balance = amount - event.target.value;
        changeBalance(balance);
    }
    const goBackToSalesEntry =() =>{
        changeShowBill(false);
    }


    return (
        <div className="content_container">
            {!showBill ? <div className="sales">
                <div className="inner-container">
                    <label>Bill Number </label>
                    <InputNumber min={0} max={100000} defaultValue={1}
                        placeHolder="Quantity" onChange={props.onQuantityChange} />
                    <input className="input" type="date" value="2013-01-08" />
                </div>


                <div className="inner-container">
                    <label>Product</label>
                    <Select placeholder="Category" className="dropdown">
                        {productCategory.map((category, index) => (
                            <Option key={category.id} value={category.name}>{category.name}</Option>
                        ))
                        }
                    </Select>

                    <Select placeholder="Code" className="dropdown last" mode="combobox">
                        <Option key="MMroduct">MMroduct</Option>
                        <Option key="Product">Product</Option>
                    </Select>
                </div>

                <div className="inner-container">
                    <label>Price </label>
                    <InputNumber min={0} max={100000} defaultValue={1}
                        placeHolder="Quantity" onChange={props.onQuantityChange} />
                </div>


                <div className="inner-container">
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

                <div className="inner-container bottom">
                    <label></label>
                    <Button> Next Product </Button>
                </div>

                <div className="submit-container">
                    <Button onClick={onGenerateBill}>GENERATE BILL</Button>
                </div>

            </div>
                :

                <div className="bill-container" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="button-container">
                        <Button onClick={goBackToSalesEntry}>{`<< Sales entry`}</Button>
                    </div>
                    <div className="bill">
                        <div className="bill-top-container">
                            <div className="name-address-container">
                                <label className="name">{name}</label>
                                <label className="address-line1">{address1},</label>
                                <label className="address-line2">{address2}</label>

                            </div>
                            <div className="bill-date-container">
                                <label>Bill no : {props.billno} </label>
                                <label>Date : {props.date}</label>
                            </div>
                        </div>
                        <Table dataSource={products}
                            size={10}
                            pagination={false}
                            columns={columns}
                            bordered
                        />
                        <div className="total-container">
                            <label className="label">Total</label>
                            <label className="amount">{`Rs. ${total}`}</label>
                        </div>
                        <div className="bottom-container">
                            <Input placeholder="Round-off amount" onChange={onRoundOffChange} />
                            <Input placeholder="Amount" disabled={true} value={amount} />
                            <Input placeholder="Amount Paid" onChange={onAmountChange} />
                            <Input placeholder="Balance to be paid: Rs" disabled={true} value={balance} />

                        </div>
                    </div>
                    <div className="submit-container">
                        <Button >SUBMIT BILL </Button>
                    </div>
                </div>

            }

        </div>

    )
}
export default TodaySales;