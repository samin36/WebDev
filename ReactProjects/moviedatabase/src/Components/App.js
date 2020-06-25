import React, { useState } from 'react';
import Search from './Search';
import axios from 'axios';
import Results from './Results';
import Popup from './Popup';


function App() {
    const apiUrl = 'http://www.omdbapi.com/?apikey=1db8fceb&';
    const [state, setState] = useState({
        searchQuery: '',
        searchResults: [],
        selectedResult: {}
    });

    const handleQueryInput = (event) => {
        let query = event.target.value;
        setState(prevState => {
            return { ...prevState, searchQuery: query };
        });
    }

    const handleSearch = async (event) => {
        if (event.key === "Enter" && state.searchQuery) {
            const { data: { Search } } = await axios.get(`${apiUrl}s=${state.searchQuery}`)
            if (Search) {
                setState(prevState => {
                    return { ...prevState, searchResults: Search };
                });
            }
        }
    }

    const openPopup = async (id) => {
        const { data } = await axios.get(`${apiUrl}i=${id}`);
        console.log(data);
        setState(prevState => {
            return { ...prevState, selectedResult: data };
        });
    }

    const closePopup = () => {
        setState(prevState => {
            return { ...prevState, selectedResult: {} };
        })
    }

    return (
        <div>
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <Search handleQueryInput={handleQueryInput} handleSearch={handleSearch} />
                <Results searchResults={state.searchResults} openPopup={openPopup} />
                {state.selectedResult.Title ? <Popup selectedResult={state.selectedResult} closePopup={closePopup} /> : false}
            </main>
        </div>
    );
}



export default App;