import React from 'react';
import { Row, Col } from 'antd';
import { getRanges } from '../utils';
import '../sass/legend.scss';

const Legend = (props) => {
    let arr = getRanges(props.data);
    return (
        <Row  type="flex" className="map-legend">
            {arr.map((obj, i) => {
                return <Col xs={8} sm={4} md={4} lg={3} xl={3} xxl={3}
                    key={i} className="legend">
                    <div className={`range${i + 1}`}>
                    </div>
                    <label className="legend-label">{i < arr.length - 1 ? `${obj.max}- ${obj.min}` : 'Selected'}</label>
                </Col>
            })}
        </Row>

    );
}

export default Legend;
