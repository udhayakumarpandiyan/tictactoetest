import React from 'react';
import { Row, Col, Select, InputNumber, Button } from 'antd';

const Option = Select.Option;
const TodaySales = (props) => {

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




        </div>

    )
}
export default TodaySales;