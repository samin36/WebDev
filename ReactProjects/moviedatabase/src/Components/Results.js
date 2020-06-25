import React from 'react';
import Result from './Result';


function Results({ searchResults, openPopup }) {
    return (
        <section className="results">
            {searchResults.map((movie, index) => <Result key={index} searchResult={movie} openPopup={openPopup} />)}
        </section>
    );
}



export default Results;