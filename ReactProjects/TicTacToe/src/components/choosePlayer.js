import React from 'react';
import './chosenPlayer.css';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmission = this.handleSubmission.bind(this);
    }



    handleSubmission(event) {
        let chosenWinner = event.target.player.value;
        this.props.player(chosenWinner);
        event.preventDefault();
    }

    render() {
        if (this.props.currPlayer == null || this.props.currWinner != null) {
            return (
                <form onSubmit={this.handleSubmission} id="player-choice-form">
                    <label>
                        X
                   <input type="radio" name="player" value="X" />
                    </label>
                    <br></br>
                    <label>
                        O
                   <input type="radio" name="player" value="O" />
                    </label>
                    <br></br>
                    <input type="submit" value="Start" />
                </form>
            );
        } else if (this.props.currWinner == null) {
            return (
                <h2>Current player is: {this.props.currPlayer}</h2>
            );
        }
    }
}

export default Player;