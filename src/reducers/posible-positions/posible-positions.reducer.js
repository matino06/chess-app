const posiblePositionsReducer = (state, action) => {
  action.grid.map((row, rowId) => {
    row.map((piece, colId) => {
      switch (piece.simbol) {
        case "p":
        case "P":
          action.grid = getPosiblePawn(piece.id, [rowId, colId], action.grid);
          break;
        case "r":
        case "R":
          action.grid = getPosibleRook(piece.id, [rowId, colId], action.grid);
          break;
        case "n":
        case "N":
          action.grid = getPosibleKnight(piece.id, [rowId, colId], action.grid);
          break;
        case "b":
        case "B":
          action.grid = getPosibleBishop(piece.id, [rowId, colId], action.grid);
          break;
        case "q":
        case "Q":
          action.grid = getPosibleQueen(piece.id, [rowId, colId], action.grid);
          break;
        case "k":
        case "K":
          action.grid = getPosibleKing(piece.id, [rowId, colId], action.grid);
          break;
        default:
          break;
      }
    });
  });

  return action.grid;
};

const getPosiblePawn = (id, position, grid) => {
  const posiblePositions = [[position[0], position[1] + 1]];

  return modifyGrid(id, grid, posiblePositions);
};

const getPosibleRook = (id, position, grid) => {
  const posiblePositions = straight(position);

  return modifyGrid(id, grid, posiblePositions);
};

const getPosibleKnight = (id, position, grid) => {
  const posiblePositions = [
    [position[0] - 1, position[1] - 2],
    [position[0] - 2, position[1] - 1],
    [position[0] - 2, position[1] + 1],
    [position[0] - 1, position[1] + 2],
    [position[0] + 1, position[1] + 2],
    [position[0] + 2, position[1] + 1],
    [position[0] + 2, position[1] - 1],
    [position[0] + 1, position[1] - 2],
  ];

  return modifyGrid(id, grid, posiblePositions);
};

const getPosibleBishop = (id, position, grid) => {
  const posiblePositions = diagonal(position);

  return modifyGrid(id, grid, posiblePositions);
};

const getPosibleQueen = (id, position, grid) => {
  const Diagonal = diagonal(position);
  const Straight = straight(position);

  const posiblePositions = [];

  Diagonal.map((x) => posiblePositions.push(x));
  Straight.map((x) => posiblePositions.push(x));

  return modifyGrid(id, grid, posiblePositions);
};

const getPosibleKing = (id, position, grid) => {
  const posiblePositions = [
    [position[0] - 1, position[1]],
    [position[0] - 1, position[1] + 1],
    [position[0], position[1] + 1],
    [position[0] + 1, position[1] + 1],
    [position[0] + 1, position[1]],
    [position[0] + 1, position[1] - 1],
    [position[0], position[1] - 1],
    [position[0] - 1, position[1] - 1],
  ];

  return modifyGrid(id, grid, posiblePositions);
};

const straight = (position) => {
  const straight = [];

  for (let i = 1; i <= 8; i++) {
    if (position[0] + i < 8 && position[1] + i < 8)
      straight.push([position[0] - i, position[1]]);

    if (position[0] + i < 8 && position[1] - i < 8)
      straight.push([position[0], position[1] + i]);

    if (position[0] - i < 8 && position[1] + i < 8)
      straight.push([position[0] + i, position[1]]);

    if (position[0] - i < 8 && position[1] - i < 8)
      straight.push([position[0], position[1] - i]);
  }

  return straight;
};

const diagonal = (position) => {
  const diagonal = [];

  for (let i = 1; i <= 8; i++) {
    if (position[0] + i < 8 && position[1] + i < 8)
      diagonal.push([position[0] + i, position[1] + i]);

    if (position[0] + i < 8 && position[1] - i < 8)
      diagonal.push([position[0] + i, position[1] - i]);

    if (position[0] - i < 8 && position[1] + i < 8)
      diagonal.push([position[0] - i, position[1] + i]);

    if (position[0] - i < 8 && position[1] - i < 8)
      diagonal.push([position[0] - i, position[1] - i]);
  }

  return diagonal;
};

const modifyGrid = (id, grid, posiblePositions) => {
  let toModCords = "";

  grid.map((row, rowId) => {
    return row.find((x, colId) =>
      x.id === id ? (toModCords = [rowId, colId]) : ""
    );
  });

  grid[toModCords[0]][toModCords[1]].posiblePositions = posiblePositions;

  return grid;
};

export default posiblePositionsReducer;
