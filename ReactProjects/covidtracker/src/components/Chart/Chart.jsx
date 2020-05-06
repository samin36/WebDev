import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = (props) => {
    const [globalData, setGlobalData] = useState([]);
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            setGlobalData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    useEffect(() => {
        if (props.country !== "global") {
            const modifiedData = {
                countryName: props.country,
                confirmed: props.countryData.confirmed.value,
                recovered: props.countryData.recovered.value,
                deaths: props.countryData.deaths.value
            };
            setCountryData(modifiedData);
        } else {
            setCountryData(null);
        }
    }, [props]);

    const lineChart = (
        globalData.length !== 0
            ? <Line
                data={{
                    labels: globalData.map((element) => element.reportDate),
                    datasets: [
                        {
                            data: globalData.map((element) => element.confirmed.total),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        }, {
                            data: globalData.map((element) => element.deaths.total),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }
                    ],
                }}
            />
            : null
    );

    const barChart = (
        countryData
            ? <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [
                        {
                            label: countryData.countryName,
                            backgroundColor: ['rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'],
                            data: [countryData.confirmed, countryData.recovered, countryData.deaths]
                        }
                    ]
                }}
                options={{
                    title: {
                        display: true,
                        text: `Current stats for ${countryData.countryName}`,
                        fontSize: 20
                    },
                    legend: { display: false }
                }}
            />
            : null
    );

    return (
        <div className={styles.container}>
            {countryData ? barChart : lineChart}
        </div>
    )
}

export default Chart