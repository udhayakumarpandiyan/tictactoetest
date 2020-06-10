import React, { useState } from 'react';
import { Row, Col, Form, Input, Select, Button, Upload, Icon,Tabs, Table } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const {TabPane} = Tabs;

const Details = (props) => {
    const [isEdit, onEditClick] = useState(false);
    const { getFieldDecorator } = props.form;

    function onEditButtonClick() {
        onEditClick(true);
    }
    function onSaveClick() {
        onEditClick(false);
    }
    return (
        <div className="user_details">
            <div className="top_content">
                <label className="title">Dealer Details</label>
                <div>
                    {`GoldMedal - Ramalinga Periyar /Senthil`}
                </div>
                <Button type="primary" disabled={isEdit}
                    onClick={onEditButtonClick}>Show More Details</Button>

                {/* <Button type="primary" disabled={isEdit}
                    onClick={onEditButtonClick}>Edit</Button> */}
            </div>
            <Form>
                <Row gutter={30} className="row_container">
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Name">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="name" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Brand Name">
                            {getFieldDecorator('brand_name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="brand_name" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Buisness Name">
                            {getFieldDecorator('business_name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="business_name" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Email id ">
                            {getFieldDecorator('email', {
                                rules: [{ required: false, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="email" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Mobile number ">
                            {getFieldDecorator('mobile', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="mobile" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Whatsapp number ">
                            {getFieldDecorator('whatsapp', {
                                rules: [{ required: false, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input type="text" name="whatsapp" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Address ">
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <TextArea name="address" disabled={!isEdit} />
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <FormItem label="Photo">
                            {getFieldDecorator('profile_photo', {
                                valuePropName: 'fileList',
                            })(
                                <Upload.Dragger disabled={!isEdit}>
                                    <Row type="flex" className="_setting-file-upload">
                                        <Col><Icon className="_f-icon" type="file" style={{ color: "#fff", fontSize: "12px" }} /></Col>
                                        <Col><span className="colored-text">Add file </span>or drop file here</Col>
                                    </Row>

                                </Upload.Dragger>
                            )}
                        </FormItem>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}
                        style={{ display: "flex", paddingTop: "40px", flexDirection: "column", alignItems: "flex-end", justifyContent: "center" }}>
                        <Button type="primary" disabled={!isEdit}
                            style={{ width: "80px" }}
                            onClick={onSaveClick}>Save</Button>
                    </Col>


                </Row >
            </Form >
            <div>
            <Row className="content">
                <Col>
                    <Tabs tabPosition={1}>
                        <TabPane tab="New Order" key="1">

                        </TabPane>

                        <TabPane tab="Orders History" key="2">
                          
                        </TabPane>
                        <TabPane tab="Transactions" key="3">

                        </TabPane>
                    </Tabs>

                </Col>
            </Row>
            </div>
        </div>



    )
}
const UserDetails = Form.create()(Details);
export default UserDetails;