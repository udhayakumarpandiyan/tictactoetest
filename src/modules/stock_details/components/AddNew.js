import React, { useState } from 'react';
import { Form, Input, Select, Button, InputNumber } from 'antd';

const Option = Select.Option;
const brands = [
    { name: "Gold Medal", code: "GML" },
    { name: "Fybros", code: "FYB" },
    { name: "GM", code: "GM" },
    { name: "Legrand", code: "LEG" }
];

const AddNewForm = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [itemDetails, setItemDetails] = useState(null);
    const [item, setItem] = useState(null);
    let { getFieldDecorator } = props.form;

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const validateUserName = (rule, value, callback) => {
        callback();
        // if (value && value.length < 6) {
        //     callback('Requires minimum 3 characters');
        // } else if (value && value.length > 20) {
        //     callback('Customer Name should not be more than 20 characters');
        // }
        // else {
        //     callback();
        // }
    }

    const onInputChange = (e, elementName) => {
        let inputField = e.target;
        console.log("User", inputField);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                setItem(values);
                showConfirmation(values);
            }
        });
    }
    const addItem = () => {
        let item = reconstructData();
        console.log("Item :", item);
        props.addNewItem(item);
    }

    const showConfirmation = (values) => {

        let originalPrice = values.price - (values.price * values.deduction / 100);
        originalPrice = originalPrice + (originalPrice * values.gst / 100);

        let item = {
            code: setItemCode(values),
            originalPrice: originalPrice,
            sellingPrice: originalPrice + (originalPrice * values.profit / 100)
        }
        setShowDetails(!showDetails);
        setItemDetails(item);

    }

    const setItemCode = (item) => {
        if (item && item.name) {
            let code = `${(item.name.slice(0, 11)).replace(/\s/g, "")}-${item.brand}`;
            return code.toUpperCase();
        }
        return '';
    }
    const reconstructData = (data) => {
        return {
            code: itemDetails.code,
            name: item.name,
            brand: item.brand,
            category: item.category,
            type: item.type,
            dealer: "Ramalinga Periyar",
            added_on: Date.now(),
            stock_quantity: item.quantity,
            gst: item.gst,
            original_price: item.price,
            profit_percentage: item.profit,
            selling_price: itemDetails.sellingPrice,
            order_alarm_when: 5,
            order_status: "Newly Added",
        }
    }



    return (
        showDetails ? <div className="modal-content">
            <Form>
                <Form.Item label="Item Code : ">
                    <label>{itemDetails.code}</label>
                </Form.Item>
                <Form.Item label="Item Code : ">
                    <label>{itemDetails.originalPrice}</label>
                </Form.Item>
                <Form.Item label="Item Code : ">
                    <label>{itemDetails.sellingPrice}</label>
                </Form.Item>
            </Form>
            <div className="modal-bottom-content">
                <Button onClick={showConfirmation}>
                    Back
                </Button>

                <Button onClick={addItem}>
                    Add Item
                </Button>
            </div>
        </div>

            : <div className="modal-content">
                <Form className="newitem-form"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Form.Item>
                        {getFieldDecorator('category', {
                            rules: [{
                                required: false, message: 'Please select item category',
                            },
                            {
                                validator: validateUserName
                            }],

                        })(
                            <Select placeholder="Item category">
                                <Option key={'ELE'} value="Electrical">Electrical</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('brand', {
                            rules: [{
                                required: false, message: 'Please select brand',
                            },
                            {
                                validator: validateUserName
                            }],
                        })(

                            <Select placeholder="Brand">
                                {brands.map((brand, index) => {
                                    return (
                                        <Option key={brand.code} value={brand.code}>{brand.name}</Option>
                                    )
                                })}
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{
                                required: false, message: 'Please enter item name',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'name'),
                            initialValue: item && item.name
                        })(
                            <Input placeholder="Item name" className="input" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('type', {
                            rules: [{
                                required: false, message: 'Please select type of item ',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'type'),
                            initialValue: null
                        })(
                            <Input placeholder="Item type" />
                        )
                        }
                    </Form.Item>

                    <Form.Item >
                        {getFieldDecorator('quantity', {
                            rules: [{
                                required: false, message: 'Please select item quantity ',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'quantity'),
                            initialValue: null
                        })(

                            <InputNumber placeholder="Quantity" min={1} max={1000} />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('unit', {
                            rules: [{
                                required: false, message: 'Please select unit ',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'unit'),
                            initialValue: null
                        })(
                            <Select placeholder="Units">
                                <Option key={'ad'} value="Pieces">Pieces</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item >
                        {getFieldDecorator('price', {
                            rules: [{
                                required: false, message: 'Please enter item price',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'price'),
                            initialValue: null
                        })(
                            <InputNumber placeholder="Price" min={1} max={1000} />
                        )}
                    </Form.Item>

                    <Form.Item >
                        {getFieldDecorator('deduction', {
                            rules: [{
                                required: false, message: 'Please enter deduction percentage',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'deduction'),
                            initialValue: null
                        })(
                            <InputNumber placeholder="Dedcution %" min={0} max={100} />
                        )}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('gst', {
                            rules: [{
                                required: false, message: 'Please enter GST percentage',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'gst'),
                            initialValue: null
                        })(
                            <InputNumber placeholder="GST %" min={0} max={30} />
                        )}
                    </Form.Item>
                    <Form.Item >
                        {getFieldDecorator('profit', {
                            rules: [{
                                required: false, message: 'Please enter profit percentage',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'profit'),
                            initialValue: null
                        })(
                            <InputNumber placeholder="Profit %" min={0} max={500} />
                        )}
                    </Form.Item>
                </Form>
                <div className="modal-bottom-content">
                    <Button onClick={onSubmit}>
                        Submit
                </Button>
                </div>
            </div >

    )

}
const AddNew = Form.create()(AddNewForm);
export default AddNew;
