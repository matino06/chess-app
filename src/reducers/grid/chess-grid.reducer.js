const chessGridReducer = (state, action) => {
  switch (action.type) {
    case "p":
      return [];
    case "r":
      return [];
    case "n":
      return reduceGrid(
        action.id,
        action.posiblePositions,
        action.grid
      )
    case "b":
      return [];
    case "q":
      return [];
    case "k":
      return [];
    default:
      return state;
  }
};

const reduceGrid = (id, posiblePositions, grid) => {
  posiblePositions.map((position) => {
    grid.map((row, rowId) => {
      row.map((x, colId) => {
        if (rowId == position[0] && colId == position[1]) {
          grid[rowId][colId].posiblePosition = true
        }
      });
    });
  });

  console.log(grid, 'func')

  return grid
};

export default chessGridReducer;
