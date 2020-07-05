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
    const [amount, changeAmount] = useState(undefined);
    const [roundOffAmount, setRoundOffAmount] = useState(undefined);
    const [balance, changeBalance] = useState(undefined);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    let { getFieldDecorator } = props.form;
    let isDuplicateItem = false;

    let billNumber = props.bills && props.bills.length > 0 ? props.bills[props.bills.length - 1].bill_number + 1 : 1;

    const onGenerateBill = () => {
        changeShowBill(true);
    }

    const onRoundOffChange = (event) => {
        let roundOffAmount = event.target.value;
        let amount = total - roundOffAmount;
        setRoundOffAmount(Number(roundOffAmount));
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
        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let item = {
                    quantity: values.quantity,
                    name: values.code,
                    price: values.price,
                    totalPrice: values.quantity * values.price
                }
                items.forEach((item, index) => {
                    if (item.name === values.code) {
                        isDuplicateItem = true;
                    }
                })
                if (!isDuplicateItem) {
                    addItem(item);
                }

            }
        });

    }
    const goBack = () => {

    }
    const addItem = (item) => {
        items.push(item);
        let total = items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity
            , 0
        );
        setTotal(total);
        setItems(items);

    }

    const onSubmitClick = (event) => {

        let bill = {
            bill_number: billNumber,
            billing_items: items,
            billing_amount: total,
            customer_type: 'customer',
            paid_amount: amount,
            billing_date: new Date(),
            customer_name: 'Murugan',
            round_off_amount: roundOffAmount,
            commission_amount: total / 10,
            balance_amount: balance
        }

        props.onSubmitBill(bill);
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
                    <Button disabled={items.length === 0} onClick={onGenerateBill}>GENERATE BILL</Button>
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
                            <Input placeholder="Amount" contentEditable={false} value={amount} />
                            <Input placeholder="Amount Paid" onChange={onAmountChange} />
                            <Input placeholder="Balance to be paid: Rs" contentEditable={false} value={balance} />

                        </div>
                    </div>
                    <div className="submit-container">
                        <Button disabled={items.length === 0} onClick={onSubmitClick}>SUBMIT BILL </Button>
                    </div>
                </div>

            }

        </div>

    )
}
const TodaySales = Form.create()(TodaySalesForm);
export default TodaySales;