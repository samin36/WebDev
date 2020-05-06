import React from 'react';
import './App.css';
import Player from './components/choosePlayer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    });
  }

  checkWinner() {
    //Winning combinations: (0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)
    let winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const board = this.state.board;
    for (let combos of winCombos) {
      let [a, b, c] = combos;
      if (board[a] != null && board[b] != null && board[a] === board[b] && board[b] === board[c]) {
        this.setState({ winner: board[a] });
        alert(`You won: ${board[a]}!`);
        this.resetGame();
        break;
      }
    }
  }

  handleClick(index) {
    if (this.state.board[index] == null && this.state.winner == null) {
      let newBoard = this.state.board;
      newBoard[index] = this.state.player;
      this.setState((state) => ({
        state: newBoard,
        player: (state.player === "X") ? "O" : "X"
      })
      );
      this.checkWinner();
    }
  }

  setPlayer(chosenPlayer) {
    this.setState({
      player: chosenPlayer
    });
  }

  render() {
    const boardToRender = this.state.board.map((element, index) =>
      <div className="cell" key={index} onClick={() => this.handleClick(index)}>{element}</div>);
    const gameStatus = <Player player={(chosenPlayer) => this.setPlayer(chosenPlayer)} currPlayer={this.state.player} currWinner={this.state.winner} />;
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <div className="grid">
          {gameStatus}
          {this.state.player != null ? boardToRender : null}
        </div>
      </div>
    );
  }
}


export default App;
