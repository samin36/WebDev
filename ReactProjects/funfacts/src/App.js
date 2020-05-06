import React from 'react';
import axios from 'axios';


import './App.css';


class App extends React.Component {

    state = {
        facts: "Loading..."
    };

    componentDidMount() {
        this.fetchFacts();
    }

    fetchFacts = async () => {
        const { data: { text } } = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
        this.setState({ facts: text });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <h1 className="facts">{this.state.facts}</h1>
                    <button className="new-facts-button" onClick={this.fetchFacts}>
                        Another One
                    </button>
                </div>
            </div>
        )
    }
}

export default App;