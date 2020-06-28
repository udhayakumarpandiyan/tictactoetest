import React from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('root');

const ModalContainer = (props) => {

    return (<div className="modal_container">
        <div className="modal_header">
            <label className="modal_title">{props.title}</label>
            <button className="modal_close" onClick={props.onClose}>X</button>
        </div>
        <div className="modal_content">
            {props.children}
        </div>
    </div>)
}


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.setAttribute("class", "modal");

    }

    componentDidMount() {
        if (this.props.isOpen) {
            modalRoot.appendChild(this.el);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.isOpen !== nextProps.isOpen) {
            if (nextProps.isOpen) {
                modalRoot.appendChild(this.el);
            }
        }
    }
    onCloseButtonClick = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
        modalRoot.removeChild(this.el);
    }

    render() {
        if (this.props.isOpen) {
            return ReactDOM.createPortal(
                <ModalContainer parent={this.el}
                    title={this.props.title}
                    children={this.props.children}
                    onClose={this.onCloseButtonClick}
                    onCancelClick={this.onCloseButtonClick} />
                ,
                this.el
            );
        }
        else {
            return (<div style={{ display: "none" }}></div>)
        }
    }
}

export default Modal;