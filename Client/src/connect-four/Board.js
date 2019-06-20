
import React, { Component } from 'react';
import { emptyCell, numOfColumns, numOfRows, p1disc, p2disc, playerDiscLookup } from './Constants';
import WhiteDisc from './images/circular-shape-silhouette-white.svg.svg';
import BlueDisc from './images/circular-shape-silhouette-blue.svg.svg';
import RedDisc from './images/circular-shape-silhouette-red.svg.svg';

class Board extends Component {
  onClick(columnIdx) {
    if (this.isActive(columnIdx)) {
      this.props.moves.selectColumn(columnIdx);
      this.props.events.endTurn();
    }
  }

  isActive(columnIdx) {
    if (this.props.G.grid[0][columnIdx] !== emptyCell) return false;
    return true;
  }

  render() {
    console.log(this.props.ctx.gameover)
    let message = '';
    if (this.props.ctx.gameover === '0') {
      message = <span>Winner: Player {playerDiscLookup[this.props.ctx.currentPlayer]}</span>;
    } else {
      message = <span>Current Player: Player {playerDiscLookup[this.props.ctx.currentPlayer]}</span>;
    }
    const selectors = Array(numOfColumns).fill().map((_, i) => i).map(idx =>
      <ColumnSelector
        active={this.isActive(idx)}
        handleClick={() => this.onClick(idx)}
        key={idx}
      />
    );
    return (
      <div>
        <h1>Connect Four</h1>
        <div>
          {message}
        </div>
        <div className='game-board'>
          <div className='row selector'>
            {selectors}
          </div>
          <Grid grid={this.props.G.grid} />
        </div>
      </div>
    )
  }
}

const ColumnSelector = ({ active, handleClick }) => {
  return (
      <button disabled={!active} onClick={handleClick} className="columnSelector"></button>
  );
}

const Grid = ({ grid }) => {
  let rows = [];
  for (var rowIdx = 0; rowIdx < numOfRows; rowIdx++) {
    rows = rows.concat(
      <div key={rowIdx} className='row'>
        <Row row={grid[rowIdx]} />
      </div>
    );
  }
  return rows;
}

const Row = ({ row }) => {
  const cells = row.map((c, idx) => <Cell cell={c} key={idx} />);
  return cells;
}

const Cell = ({ cell }) => {
  let cellImage;
  switch (cell) {
    case p1disc:
      cellImage = RedDisc;
      break;
    case p2disc:
      cellImage = BlueDisc;
      break;
    default:
      cellImage = WhiteDisc;
      break;
  }
  return (
    <img alt="disc" src={cellImage} className="disc" />
  );
}

export default Board;