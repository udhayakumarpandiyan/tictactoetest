import React, { Component } from 'react';
import EditorForm from '../components/EditorForm';
import { connect } from 'react-redux';
import EditorLogin from '../components/EditorLogin';
import axios from 'axios';
// import '../styles/index.scss';



class Editors extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditorSignedIn: false };
    }
    onLogin = () => {
        // let url = 'http://localhost:3210/data';
        // let data = [];
        // axios.get(url)
        //     .then(response => {
        //         data = response.data;
        //         console.log(data);
        //         this.setState({ data: data });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        this.setState({ isEditorSignedIn: true });
    }
    render() {
        return (<div className="editor_page" >
            {this.state.isEditorSignedIn ? <EditorForm
                lang={this.props.language} /> : <EditorLogin
                    onLogin={this.onLogin}
                    lang={this.props.language} />
            }
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.languageReducer.language.language,
    }
}
export default connect(mapStateToProps, {})(Editors);