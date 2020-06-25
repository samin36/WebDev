import React from 'react';


function Search({ handleQueryInput, handleSearch }) {
    return (
        <section className="searchbox-wrap">
            <input text="text" placeholder="Search for a movie..." className="searchbox" onChange={handleQueryInput} onKeyPress={handleSearch} />
        </section>
    )
}

export default Search;