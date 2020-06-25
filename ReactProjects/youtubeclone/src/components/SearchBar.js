import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {

    state = {
        searchQuery: ''
    }

    handleSubmit = (event) => {
        const { searchQuery } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchQuery);

        event.preventDefault(); //Prevent browser refresh
    }

    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
};

export default SearchBar;