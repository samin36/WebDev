import React, { useState, useEffect } from 'react';
import Stats from './Stats';
import TextToType from './TextToType';
import TextArea from './TextArea';
import styles from '../CSS/App.module.css';
import text from './TextData';

function App() {
    const [startedTyping, setStartedTyping] = useState(false);
    const [currCharacter, setCurrCharacter] = useState('');
    const [indexDirection, setIndexDirection] = useState(1);
    const [numIncorrect, setNumIncorrect] = useState(0);
    const [textData, setTextData] = useState(text);

    const handleIndexDirection = (direction) => {
        setIndexDirection(direction);
    }

    const handleStartedTyping = () => {
        setStartedTyping(true);
    }

    const handleCurrCharacter = (newCharacter) => {
        // eslint-disable-next-line no-new-wrappers
        setCurrCharacter(new String(newCharacter));
    }

    const handleNumIncorrect = (num) => {
        setNumIncorrect(num);
    }

    return (
        <div className={styles.wrapper}>
            {/* <h1 style={{ color: 'white' }}>{currCharacter}</h1> */}
            <Stats startedTyping={startedTyping} numIncorrect={numIncorrect} />
            <TextArea currCharacter={currCharacter} indexDirection={indexDirection} handleNumIncorrect={handleNumIncorrect} textData={textData} />
            <TextToType startedTyping={startedTyping} handleStartedTyping={handleStartedTyping} handleCurrCharacter={handleCurrCharacter} handleIndexDirection={handleIndexDirection} />
        </div>
    );
}

export default App;