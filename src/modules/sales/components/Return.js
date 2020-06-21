import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Input, InputNumber, Button } from 'antd';
const Option = Select.Option;
const products = [{ name: "Gol", code: "23", price: 100, quantity: 2 },
{ name: "Golsad", code: "2asd3", price: 10, quantity: 5 }];

const productCategory = [{ name: "Electricals", id: "EC" },
{ name: "Hardwares", id: "HW" },
{ name: "PVC", id: "PV" },
{ name: "Paints", id: "PT" },
{ name: "Solutions", id: "SL" },
{ name: "Plumbing", id: "PB" },
{ name: "Manufacturing", id: "MF" },
{ name: "Tools", id: "TL" }];

const Return = (props) => {
    const [productAmount, setProductAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const onNext =()=>{
       // setTotalAmount(totalAmount) ;
        
    }

    const onSubmit =() =>{
        setTotalAmount()
        
    }
    return (
        <div className="content_container">
         <div className="sales">
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
                    <Input contentEditable={false}
                        placeHolder="0" onChange={props.onQuantityChange} />
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

                <div className="inner-container">
                    <label>Reason </label>
                    <Select placeholder="Select Reason">
                        <Option key="damaged" value="Damaged" >Damaged</Option>
                        <Option key="extra" value="Extra piece">Extra piece</Option>
                        <Option key="exchange" value="Exchange">Exchange</Option>
                        <Option key="variation" value="Variation">Variation</Option>
                        <Option key="warranty" value="Warranty">Warranty</Option>
                        <Option key="others" value="Others">Others</Option>

                    </Select>
                </div>

                <div className="inner-container bottom">
                    <label></label>
                    <Button onClick={onNext}> Next Product </Button>
                </div>
                <label className="payback-label">{`Total amount to pay back : Rs. ${totalAmount}`}</label>
                <div className="submit-container">
                    <Button onClick={onSubmit}>SUBMIT</Button>
                </div>

            </div>

        </div>

    )
}
export default Return;
