import React from 'react';


function Popup({ selectedResult, closePopup }) {
    const rating = selectedResult.Ratings[0].Value;
    return (
        <section className="popup">
            <div className="content">
                <h2>{selectedResult.Title} <span>({selectedResult.Year})</span></h2>
                <p className="rating">Rating: {rating}</p>
                <div className="plot">
                    <img src={selectedResult.Poster} alt={`Poster for ${selectedResult.Title}`} />
                    <p>{selectedResult.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>

        </section>
    )
}


export default Popup;