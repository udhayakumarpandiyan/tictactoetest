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
        span: 60,
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


const TodaySales = (props) => {
    const [showBill, changeShowBill] = useState(false);

    const onGenerateBill = () => {
        changeShowBill(true);
    }
    return (
        <div className="content_container">
            {!showBill ? <div>
                <div className="inner_container">
                    <label>Bill Number </label>
                    <InputNumber min={0} max={100000} defaultValue={1}
                        placeHolder="Quantity" onChange={props.onQuantityChange} />
                    <input className="input" type="date" />
                </div>



                <Select placeholder="Product Category" className="dropdown" mode="combobox">
                    {productCategory.map((category, index) => (
                        <Option key={category.id} value={category.name}>{category.name}</Option>
                    ))
                    }
                </Select>

                <Select placeholder="Product code" className="dropdown" mode="combobox">
                    <Option key="MMroduct">MMroduct</Option>
                    <Option key="Product">Product</Option>
                </Select>

                <div className="quantity-container">
                    <label>Price </label>
                    <InputNumber min={0} max={100000} defaultValue={1}
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
                <Button onClick={onGenerateBill}>Generate Bill</Button>
            </div>
                :

                <div className="bill-container" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="button-container">
                        <Button onClick={onGenerateBill}>{`<< Sales entry`}</Button>
                    </div>
                    <div className="bill">
                        <div className="bill-top-container">
                            <div className="name-address-container">
                                <label className="name">Jayam Electricals</label>
                                <label className="address-line1"># 5,A.R.S Complex, Kumbakonam road,Pannikankuppam,</label>
                                <label className="address-line2"> Panruti -607106</label>

                            </div>
                            <div className="bill-date-container">
                                <label>Bill no : </label>
                                <label>Date : 27/05/1988 </label>
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
                            <label className="amount">{`Rs. ${250}.${50}`}</label>
                        </div>
                        <div className="bottom-container">
                            <Input placeholder="Round-off amount" />
                            <Input placeholder="Amount" disabled={true} />
                            <Input placeholder="Amount Paid" />
                            <Input placeholder="Balance to be paid: Rs" disabled={true} />

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