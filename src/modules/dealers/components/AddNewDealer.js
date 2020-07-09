import React from 'react';
import {Row, Col, Form,Input,Upload, Icon,Button} from 'antd';
const { TextArea } = Input;

const AddNewDealerForm = (props) => {
    let { getFieldDecorator } = props.form;
    return (
        <div>
            <Form>
                <Row gutter={10}className="row_container">
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Dealer name" type="text" name="name"  />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item>
                            {getFieldDecorator('brand_name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Brand Name" type="text" name="brand_name"  />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item >
                            {getFieldDecorator('business_name', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Buisness name" type="text" name="business_name"  />
                            )}
                        </Form.Item>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: false, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Email-id" type="text" name="email"  />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item>
                            {getFieldDecorator('mobile', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Mobile number" type="text" name="mobile"  />
                            )}
                        </Form.Item>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item >
                            {getFieldDecorator('whatsapp', {
                                rules: [{ required: false, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Whatsapp number " type="text" name="whatsapp"  />
                            )}
                        </Form.Item>
                    </Col>

                    {/* <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                        <Form.Item >
                            {getFieldDecorator('bankAccountNumber', {
                                rules: [{ required: false, message: 'required' }],
                                initialValue: ""
                            })(
                                <Input placeholder="Bank Account No " type="text" name="bankAccountNumber"  />
                            )}
                        </Form.Item>
                    </Col> */}

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                        <Form.Item >
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: 'required' }],
                                initialValue: ""
                            })(
                                <TextArea placeholder="Business address" name="address"  />
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={6}>
                        <Form.Item >
                            {getFieldDecorator('profile_photo', {
                                valuePropName: 'fileList',
                            })(
                                <Upload.Dragger >
                                    <Row type="flex" className="_setting-file-upload">
                                        <Col><Icon className="_f-icon" type="file" style={{ color: "#fff", fontSize: "12px" }} /></Col>
                                        <Col><span className="colored-text">Add file </span>or drop file here</Col>
                                    </Row>

                                </Upload.Dragger>
                            )}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24} xxl={24}
                        style={{ display: "flex", paddingTop: "40px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button
                            >ADD DEALER</Button>
                    </Col>


                </Row >
            </Form >
        </div>
    )

}
const AddNewDealer = Form.create()(AddNewDealerForm);
export default AddNewDealer;