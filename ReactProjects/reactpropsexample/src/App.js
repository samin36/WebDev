import React from 'react';

import './App.css';

import Posts from './components/Posts/Posts';

const App = () => {
    return (
        <div className="main-container">
            <h1 className="main-heading">Breaking News</h1>
            <Posts />
        </div>
    );
}

export default App;