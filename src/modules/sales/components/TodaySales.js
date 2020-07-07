import React, { useState, useEffect } from 'react';
import { Select, InputNumber, Button, Table, Input, Form, Radio } from 'antd';
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
        render: (text, row) => <span style={{ textAlign: "right" }}>{Number((row.quantity * row.price).toFixed(2))}</span>
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
    const [customerType, setCustomerType] = useState('Customer');
    const [currentItem, setCurrentItem] = useState(undefined);
    const [item, setItem] = useState({ name: '', selling_price: 0 });

    let { getFieldDecorator } = props.form;
    let isDuplicateItem = false;

    const generateBillNumber = () => {
        let billNumber = props.bills && props.bills.length > 0 ? Number(props.bills[props.bills.length - 1].bill_number) + 1 : 1;
        // let date = new Date();
        // let month = date.getMonth() + 1;
        // month = month > 9 ? month : `0${month}`;
        // let year = date.getFullYear() + '';
        // year = year.substr(2, 2);
        billNumber = billNumber > 99 ? billNumber : billNumber > 9 ? `0${billNumber}` : `00${billNumber}`
       // billNumber = `${year}${month}${billNumber}`;
        return billNumber;
    }

    const onGenerateBill = () => {
        isDuplicateItem = false;
        changeShowBill(true);
    }

    const onRoundOffChange = (event) => {
        let roundOffAmount = event.target.value;
        let amount = total - roundOffAmount;
        setRoundOffAmount(Number(roundOffAmount));
        changeAmount(amount);
    }

    const onAmountChange = (event) => {
        let balance = total - roundOffAmount - event.target.value;
        changeBalance(balance);
    }
    const goBackToSalesEntry = () => {
        changeShowBill(false);
        console.log("Item:", currentItem);
    }

    const goNext = (event) => {
        event.preventDefault();

        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //let name = values.name +'-'+ values.code.splice(values.code.length -4, values.length-1)
                let item = {
                    category: values.category,
                    quantity: values.quantity,
                    code: values.code,
                    name: values.name,
                    price: values.price,
                    totalPrice: values.quantity * values.price,
                    unit: values.unit
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
        setItem({});
        handleCurrentItem(items[items.length - 1]);

    }

    const onSubmitClick = (event) => {
        setItems([]);
        let bill = {
            bill_number: generateBillNumber(),
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

    const handleCurrentItem = (item) => {
        setCurrentItem(item);
        props.form.resetFields();
    }

    const onQuantityChange = (value) => {
        let currentItem = {};
        currentItem.quantity = value;
        setCurrentItem(currentItem);

    }
    const onCodeChange = (value) => {
        if (props.items) {
            let item = props.items.filter((item) => {
                return item.code === value;
            })[0];
            if (item) {
                console.log('Price', item);
                item.selling_price = customerType === "Customer"  ? item.original_price + (item.original_price * item.profit_percentage / 100) : item.selling_price + item.selling_price * 10 / 100;
                setItem(item);
            }
        }

    }

    const onCustomerChange = e => {
        if (item.code) {
            // let sellingPrice = e.target.value === "Customer" ? item.original_price + (item.original_price * item.profit_percentage / 100) :
            //     (item.original_price + (item.original_price * item.profit_percentage / 100) + item.original_price * 10 / 100);

            let sellingPrice = e.target.value === "Customer" ? item.original_price + (item.original_price * item.profit_percentage / 100) : item.selling_price + item.selling_price * 10 / 100;
            item.selling_price = sellingPrice;
            setItem(item);
        }
        setCustomerType(e.target.value)
    };


    return (
        <div className="content_container">
            {!showBill ? <div className="sales">
                <Radio.Group onChange={onCustomerChange} value={customerType} className="radio-group">
                    <Radio value="Customer">Individual customer</Radio>
                    <Radio value="Electrician">Electrician</Radio>
                </Radio.Group>

                <Form className="newitem-form">
                    <Form.Item label="Item category">
                        {getFieldDecorator('category', {
                            rules: [{
                                required: true, message: 'Please select item category',
                                initialValue: currentItem && currentItem.category
                            },
                            {
                                validator: ''
                            }],

                        })(
                            <Select placeholder="Category" name="category"
                                type="category"
                                value={currentItem && currentItem.category}
                                className="dropdown">
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
                                initialValue: currentItem && currentItem.code
                            },
                            {
                                validator: ''
                            }],

                        })(
                            <Select placeholder="Code" className="dropdown last"
                                mode="combobox" onChange={onCodeChange}
                                name="code" type="code">
                                {
                                    props.items && props.items.length > 0 && props.items.map((item, index) => {
                                        return (
                                            <Option key={item.code}>{item.code}</Option>
                                        )
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="Item name">
                        {getFieldDecorator('name', {
                            initialValue: item && item.name,
                            rules: [{
                                required: true, message: 'Please enter name',

                            },
                            ],

                        })(
                            <Input name="name" type="name"
                                disabled
                                value={item && item.name}
                                placeHolder="Name" />
                        )}

                    </Form.Item>


                    <Form.Item label="Item price">
                        {getFieldDecorator('price', {
                            initialValue: item && item.selling_price,
                            rules: [{
                                required: true, message: 'Please enter price',
                            },
                            ],

                        })(
                            <Input name="price" type="price"
                                value={item && item.selling_price}
                                placeHolder="Price" />
                        )}

                    </Form.Item>

                    <Form.Item label="Quantity">
                        {getFieldDecorator('quantity', {
                            rules: [{
                                required: true, message: 'Please enter quantity',
                                /// intialValue: currentItem && currentItem.quantity 
                            },
                            ],

                        })(
                            <InputNumber name="quantity" type="quantity"
                                min={1} max={100000} value={currentItem && currentItem.quantity}
                                placeHolder="Quantity" onChange={onQuantityChange} />
                        )}

                    </Form.Item>

                    <Form.Item label="Unit">
                        {getFieldDecorator('unit', {
                            rules: [{
                                required: true, message: 'Please select unit',
                                initialValue: 'pieces'
                            },
                            ],

                        })(
                            <Select placeholder="Piece(s)"
                                defaultValue={'pieces'}
                                type="unit" name="unit">
                                <Option key="pieces" value="pieces">Pieces</Option>
                                <Option key="meters" value="meters">Meters</Option>
                                <Option key="kg" value="kilograms">Kilogram</Option>
                                <Option key="dozens" value="grams">Dozens</Option>
                                <Option key="grams" value="grams">Grams</Option>
                            </Select>
                        )}

                    </Form.Item>

                </Form>

                <div className="inner-container bottom">
                    <Button onClick={goBack}> {`<<`} </Button>
                    <Button disabled={items.length === 0} onClick={onGenerateBill}>GENERATE BILL</Button>
                    <Button onClick={goNext}> {`>>`} </Button>
                </div>

                {/* <div className="submit-container">
                    <Button disabled={items.length === 0} onClick={onGenerateBill}>GENERATE BILL</Button>
                </div> */}

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
                                <label>Bill no : {generateBillNumber()} </label>
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