import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const dailyUrl = `${url}/daily`;
const countryUrl = `${url}/countries`;

export const fetchData = async (pickedCountry) => {
    try {
        //First destructure the response to just data since thats what we want. Then,
        //extract confirmed, recovered, deaths, lastUpdate from the data using another destructure.
        const dataUrl = pickedCountry !== "global" ? `${countryUrl}/${pickedCountry}` : url;
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dataUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(dailyUrl);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(countryUrl);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}