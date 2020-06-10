import React from 'react';

const Footer = (props) => {
    let lang = props.lang ? props.lang.footer : {};
    return (
        <div className="footer">
            <label>{lang && lang.copyright}</label>
        </div>
    )
}
export default Footer;