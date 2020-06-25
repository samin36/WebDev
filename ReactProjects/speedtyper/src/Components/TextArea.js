import React, { useState, useEffect } from 'react';
import styles from '../CSS/TextArea.module.css';


function TextArea(props) {
    const [characterSpans, setCharacterSpans] = useState([]);
    const [currIndex, setCurrIndex] = useState(-1);

    useEffect(() => {
        const initialSpans = props.textData.split('').map((element, index) => <span key={index} className={styles.nextcharacter}>{element}</span>);
        setCharacterSpans(initialSpans);
    }, [props.textData]);

    useEffect(() => {
        if (props.currCharacter) {
            let newIndex;
            setCurrIndex(prevIndex => {
                newIndex = prevIndex + props.indexDirection;
                if (newIndex < 0) {
                    newIndex = -1;
                }
                return newIndex;
            });
            setCharacterSpans(prevSpans => {
                const newSpans = prevSpans.slice();
                let newStyle = styles.correct;
                if (props.indexDirection === -1) {
                    newStyle = styles.nextcharacter;
                    newIndex += 1;
                } else if (props.currCharacter.valueOf() !== newSpans[newIndex].props.children.valueOf()) {
                    newStyle = styles.incorrect;
                }
                console.log(newSpans[newIndex]);
                newSpans[newIndex] = React.cloneElement(newSpans[newIndex], { className: `${newStyle}` });
                return newSpans;
            });
            const numIncorrect = characterSpans.slice(0, newIndex).filter(span => span.props.className === `${styles.incorrect}`).length;
            props.handleNumIncorrect(numIncorrect);
        }
    }, [props.currCharacter]);


    return (
        <div className={styles.wrapper}>
            {characterSpans}
        </div>
    );
}


export default TextArea;