import { Game } from 'boardgame.io/core';
import { emptyCell, numOfRows, numOfColumns, playerDiscLookup } from './Constants';

const GameLogic = Game({
  setup: () => {
    const grid = {};
    for (var i = 0; i < numOfRows; i++) {
      grid[i] = Array(numOfColumns).fill(emptyCell);
    }
    return ({ grid: grid });
  },
  moves: {
    selectColumn(G, ctx, columnIdx) {
      let grid = Object.assign({}, G.grid);
      for (var i = numOfRows - 1; i >= 0; i--) {
        if (grid[i][columnIdx] === emptyCell) {
          grid[i][columnIdx] = playerDiscLookup[ctx.currentPlayer];
          break;
        }
      }
    },
  },
  flow: {  
    endGameIf: (G, ctx) => {
      if(IsVictory(G.grid, ctx.currentPlayer)){return ctx.currentPlayer} ;
    }
  }
});

//victoryCheck
function IsVictory(grid, player) {
  const playerDisc = playerDiscLookup[player];
  let i = 0;
  let columnIdx = 0;

  // horizontalCheck
  for (columnIdx = 0; columnIdx < numOfColumns-3; columnIdx++) {
    for (i = 0; i < numOfRows; i++) {
      if (grid[i][columnIdx] === playerDisc && grid[i][columnIdx+1] === playerDisc && grid[i][columnIdx+2] === playerDisc && grid[i][columnIdx+3] === playerDisc) {
        return true;
      }
    }
  }

  // verticalCheck
  for (i = 0; i < numOfRows-3; i++) {
    for (columnIdx = 0; columnIdx < numOfColumns; columnIdx++) {
      if (grid[i][columnIdx] === playerDisc && grid[i+1][columnIdx] === playerDisc && grid[i+2][columnIdx] === playerDisc && grid[i+3][columnIdx] === playerDisc) {
        return true;
      }
    }
  }

  // ascendingDiagonalCheck
  for ( i = 3; i < numOfRows; i++) {
    for (columnIdx = 0; columnIdx < numOfColumns-3; columnIdx++) {
      if (grid[i][columnIdx] === playerDisc && grid[i-1][columnIdx+1] === playerDisc && grid[i-2][columnIdx+2] === playerDisc && grid[i-3][columnIdx+3] === playerDisc) {
        return true;
      }
    }
  }

  // descendingDiagonalCheck
  for (i = 3; i < numOfRows; i++) {
    for (columnIdx = 3; columnIdx < numOfColumns; columnIdx++) {
      if (grid[i][columnIdx] === playerDisc && grid[i-1][columnIdx-1] === playerDisc && grid[i-2][columnIdx-2] === playerDisc && grid[i-3][columnIdx-3] === playerDisc) {
        return true;
      }
    }
  }

  
}

export default GameLogic