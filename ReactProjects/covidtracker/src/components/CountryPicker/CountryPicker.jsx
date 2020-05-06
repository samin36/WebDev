import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/index.js';

import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [fetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => props.handleCountryChange(e)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, index) => <option value={country} key={index}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker