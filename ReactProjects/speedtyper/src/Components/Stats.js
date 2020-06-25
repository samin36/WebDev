import React, { useState, useEffect } from 'react';
import styles from '../CSS/Stats.module.css';

function Stats(props) {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (props.startedTyping) {
            const timerID = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer === 0) {
                        clearInterval(timerID);
                    }
                    return prevTimer !== 0 ? prevTimer - 1 : 60;
                });
            }, 1000);
        }

    }, [props.startedTyping]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.stat}>Time Left: {timer}s</h2>
            <h2 className={styles.stat}>WPM: 96 WPM</h2>
            <h2 className={styles.stat}>Incorrect: {props.numIncorrect}</h2>
        </div>
    )
}

export default Stats;