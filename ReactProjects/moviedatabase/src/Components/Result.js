import React from 'react';


function Result({ searchResult, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(searchResult.imdbID)}>
            <img src={searchResult.Poster} alt={`Poster for ${searchResult.Title}`} />
            <h3>{searchResult.Title}</h3>
        </div>
    )
}




export default Result;