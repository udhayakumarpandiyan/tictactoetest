import React, { useState } from 'react';
import { Select, InputNumber, Button, Table, Input, Form } from 'antd';
import { getCurrentDate } from '../../../utils/index';

const Option = Select.Option;
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

const TodaySalesForm = (props) => {
    const [showBill, changeShowBill] = useState(false);
    const [amount, changeAmount] = useState(0);
    const [balance, changeBalance] = useState(0);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    let { getFieldDecorator } = props.form;


    // let date = new Date();
    // let month = date.getMonth();
    // month = month + 1;
    // month = month < 9 ? '0' + month : month;
    // let localDate = date.getDate();
    // localDate = localDate < 10 ? '0' + localDate : localDate;
    // let currentDate = date.getFullYear() + '-' + month + '-' + localDate;



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
    const goBackToSalesEntry = () => {
        changeShowBill(false);
    }

    const goNext = (event) => {
       // var item = { name: '' };
        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let item = {
                    quantity: values.quantity,
                    name: values.code,
                    price: values.price,
                    totalPrice: values.quantity * values.price
                }
                addItem(item);

            }
        });

    }
    const goBack = () => {

    }
    const addItem =(item) =>{
        items.push(item);
        let total = items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity
            , 0
        );
        setTotal(total);
        setItems(items);

    }

    return (
        <div className="content_container">
            {!showBill ? <div className="sales">
                <Form className="newitem-form">
                    {/* <Form.Item>
                        <Input 
                            placeHolder="Bill number" contentEditable={false}
                            onChange={props.onBillNumberChange} />
                    </Form.Item>
                    <Form.Item>
                        <input className="input" type="date" value={getCurrentDate()} />
                    </Form.Item> */}
                    <Form.Item label="Item category">
                        {getFieldDecorator('category', {
                            rules: [{
                                required: true, message: 'Please select item category',
                            },
                            {
                                validator: ''
                            }],

                        })(
                            <Select placeholder="Category" className="dropdown">
                                {productCategory.map((category, index) => (
                                    <Option key={category.id} value={category.name}>{category.name}</Option>
                                ))
                                }
                            </Select>
                        )}

                    </Form.Item>


                    <Form.Item label="Item code">
                        {getFieldDecorator('code', {
                            rules: [{
                                required: true, message: 'Please select item category',
                            },
                            {
                                validator: ''
                            }],

                        })(
                            <Select placeholder="Code" className="dropdown last" mode="combobox">
                                <Option key="MMroduct">MMroduct</Option>
                                <Option key="Product">Product</Option>
                            </Select>
                        )}
                    </Form.Item>



                    <Form.Item label="Item price">
                        {getFieldDecorator('price', {
                            rules: [{
                                required: true, message: 'Please enter price',
                            },
                            ],

                        })(
                            <InputNumber min={0} max={100000} defaultValue={1}
                                placeHolder="Price" onChange={props.onQuantityChange} />
                        )}

                    </Form.Item>


                    <Form.Item label="No.of items">
                        {getFieldDecorator('quantity', {
                            rules: [{
                                required: true, message: 'Please enter quantity',
                            },
                            ],

                        })(
                            <InputNumber min={0} max={100000} defaultValue={1}
                                placeHolder="Quantity" onChange={props.onQuantityChange} />
                        )}

                    </Form.Item>

                    <Form.Item label="Unit">
                        {getFieldDecorator('unit', {
                            rules: [{
                                required: true, message: 'Please select unit',
                            },
                            ],

                        })(
                            <Select placeholder="Piece(s)" mode="combobox">
                                <Option key="pieces">Pieces</Option>
                                <Option key="meters">Meters</Option>
                                <Option key="kg">Kilogram</Option>
                                <Option key="grams">Product</Option>
                                <Option key="ml">Liter</Option>
                                <Option key="ml">Grams</Option>

                            </Select>
                        )}

                    </Form.Item>

                </Form>

                <div className="inner-container bottom">
                    <Button onClick={goBack}> {`<< Previous item`} </Button>
                    <Button onClick={goNext}> {`Next item >>`} </Button>
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
                                <label>Date : {getCurrentDate('-', 'DD/MM/YYYY')}</label>
                            </div>
                        </div>
                        <Table dataSource={items}
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
const TodaySales = Form.create()(TodaySalesForm);
export default TodaySales;