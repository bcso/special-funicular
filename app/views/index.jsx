var React = require('react');

class IntroMessage extends React.Component {
  render() {
    return <Game/>;
    // return <div>Hello {this.props.name}</div>;
  }
}

function Square(props){
    var sqStyle = {
        background: "#fff",
        border: "1 solid #999",
        float: "left",
        fontSize: "24",
        fontWeight: "bold",
        lineHeight: 34,
        height: 34,
        marginRight: -1,
        marginTop: -1,
        padding: 0,
        textAlign: "center",
        width: 34,
    }
    return(
      <button className="square" style={sqStyle} onClick={function() {props.onClick()}}>
        {props.value}
      </button>
    )
}

class Board extends React.Component {
  constructor(){
    super();
    this.state={
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }
  renderSquare(i) {
    console.log("Rendering square on board...")
    return <Square value={this.state.squares[i]} onClick={function() {this.handleClick(i)}}/>;
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    console.log("Square " + i + " has been clicked");
    squares[i] = this.state.xIsNext? 'X' : 'O' ;
    this.setState({
      squares:squares,
      xIsNext:!this.state.xIsNext
    })
  }
  render() {
    const status = 'Next player: ' + (this.state.xIsNext? 'X':'O');
    var brdrow = {
        clear: "both",
        content: "",
        display: "table",
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row" style={brdrow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row" style={brdrow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row" style={brdrow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('container')
// );

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

module.exports = IntroMessage;