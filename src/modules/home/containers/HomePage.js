import React, { Component } from 'react';
import Home from '../components/Home';
import '../styles/index.scss';

class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div className="home_page" >
            <div className="name-container">
                <label>Tic</label>
                <label>Tac</label>
                <label>Toe</label>
            </div>
            <div className="home_content">
                <Home startGame={this.startGame} />
            </div>

        </div>)
    }
}

export default HomePage;