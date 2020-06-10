import React from 'react';
import { Row, Col } from 'antd';
import Card from '../../../common/card/Card';

const UserSummary = (props) => {
    return (

        <Row gutter={30} className="row_container">
            {props.users && props.users.map((item, index) => (
                <Col style={{ display: 'inline-grid' }}
                    xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
                    <Card category={item.category}
                        value={item.value}
                        color={item.color}
                        leftColor={item.leftColor} />
                </Col>
            ))}

        </Row>


    )
}
export default UserSummary;