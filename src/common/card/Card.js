import React from 'react';
import './Card.scss';

const Card = (props) => {

    return (<div className="card_container"
        style={{ borderLeft: `5px solid ${props.color}` }}>
        <div className="card_left_content"
            style={{ backgroundColor: props.leftColor }}
        >
            <label>{props.category || ''}</label>
        </div>
        <div className="card_right_content"
            style={{ backgroundColor: props.leftColor, color: props.color }}>
            {props.value || '25000000'}
        </div>
    </div>)
}
export default Card;
