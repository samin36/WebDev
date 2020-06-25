import React, { useState } from 'react';
import styles from '../CSS/TextToType.module.css';


function TextToType(props) {
    const [currWord, setCurrWord] = useState('');


    const onChangeHandler = (event) => {
        if (!props.startedTyping) {
            props.handleStartedTyping();
        }
        setCurrWord(event.target.value);
        props.handleCurrCharacter(event.target.value.slice(-1)); //get the last character
    }

    const onKeyDownHandler = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
            setCurrWord('');
            props.handleCurrCharacter(' ');
            props.handleIndexDirection(1);
        } else if (event.key === 'Backspace') {
            props.handleIndexDirection(-1);
        } else {
            props.handleIndexDirection(1);
        }
    }

    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="Type here..." className={styles.word} autoFocus={true} value={currWord} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
        </div>
    );
}


export default TextToType;