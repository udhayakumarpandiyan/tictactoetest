import React from 'react';
import '../../styles/common.scss';
let defaultDirection = "horizontal";
const TabBar = (props) => {
    let direction = props.direction ? props.direction : defaultDirection;
    return (<div className={direction === "horizontal" ? "horizontal_tab" : "vertical_tab"}>
        {props.data && props.data.map((item, index) => {
            return (<button className={props.selectedIndex === index ? "tab_selected" : "tab_normal"}
                key={`tabButton${index}`}
                onClick={() => props.onTabChange(index)}>{item}</button>)
        })}
    </div>)
}
export default TabBar;