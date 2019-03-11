import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Cards";

const API = 'https://raw.githubusercontent.com/Tsipi/jsonExample/master/Cards';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardsItems: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API)
            .then(response => response.json())
            .then(data => setTimeout(() => {
                this.setState({ cardsItems :data, isLoading: false  })
            }, 1000));

    }

    render() {

        const { cardsItems, isLoading } = this.state;
        if (isLoading) {
            return (
                <div className={"container"}>
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
                );
        }
        return (

            <div className="App">
                <header className="App-header">
                    <h1> Mobile studio</h1>
                </header>
                <div>
                    <Cards cardsItems={cardsItems} />
                </div>
            </div>
        );
    }
}

export default App;
