import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import coronaImage from './images/coronaImage.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryData: {},
            pickedCountry: "global"
        }
    }

    async componentDidMount() {
        const fetchedData = await fetchData("global");
        this.setState({ countryData: fetchedData });
    }


    handleCountryChange = async (event) => {
        //fetch the countryData
        //set the state
        event.preventDefault();
        const country = event.target.value;
        const fetchedData = await fetchData(country);
        this.setState({ countryData: fetchedData, pickedCountry: country });
    }


    render() {
        const { countryData, pickedCountry } = this.state;
        const header = <h1 className={styles.header}>COVID-19 Tracker</h1>
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19" />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards countryData={countryData} />
                <Chart country={pickedCountry} countryData={countryData} />
            </div>
        );
    }
}

export default App