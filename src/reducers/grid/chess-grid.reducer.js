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

const reduceGrid = (id, posiblePositionsGrid, grid) => {
  let posiblePositions = [];

  posiblePositionsGrid.map((row, rowId) => {
    row.map((x, colId) => {
      if (id === x.id) {
        posiblePositions = x.posiblePositions
      }
    })
  })

  posiblePositions.map((position) => {
    grid.map((row, rowId) => {
      row.map((x, colId) => {
        if (rowId === position[0] && colId === position[1]) {
          grid[rowId][colId].posiblePosition = true
        }
      });
    });
  });

  return grid
};

export default chessGridReducer;
