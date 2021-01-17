// Colors are oriented as
// [right, left, top ,bottom, front, back]
// Holistically set up faces with
// [ORANGE, RED, YELLOW, WHITE, GREEN, BLUE]

const BLACK = '#333';
const WHITE = 'white';
const RED = 'red';
const GREEN = 'green';
const YELLOW = 'yellow';
const BLUE = 'blue';
const ORANGE = 'orange';

const cubes = [
  // bottom plane
  { position: [-1, -1, -1], colors: [BLACK, RED, BLACK, WHITE, BLACK, BLUE] },
  { position: [-1, -1, 0], colors: [BLACK, RED, BLACK, WHITE, BLACK, BLACK] },
  { position: [-1, -1, 1], colors: [BLACK, RED, BLACK, WHITE, GREEN, BLACK] },
  { position: [0, -1, -1], colors: [BLACK, BLACK, BLACK, WHITE, BLACK, BLUE] },
  { position: [0, -1, 0], colors: [BLACK, BLACK, BLACK, WHITE, BLACK, BLACK] },
  { position: [0, -1, 1], colors: [BLACK, BLACK, BLACK, WHITE, GREEN, BLACK] },
  {
    position: [1, -1, -1],
    colors: [ORANGE, BLACK, BLACK, WHITE, BLACK, BLUE],
  },
  { position: [1, -1, 0], colors: [ORANGE, BLACK, BLACK, WHITE, BLACK, BLACK] },
  { position: [1, -1, 1], colors: [ORANGE, BLACK, BLACK, WHITE, GREEN, BLACK] },

  // middle plane
  { position: [-1, 0, -1], colors: [BLACK, RED, BLACK, BLACK, BLACK, BLUE] },
  { position: [-1, 0, 0], colors: [BLACK, RED, BLACK, BLACK, BLACK, BLACK] },
  { position: [-1, 0, 1], colors: [BLACK, RED, BLACK, BLACK, GREEN, BLACK] },
  { position: [0, 0, -1], colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLUE] },
  { position: [0, 0, 0], colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK] },
  { position: [0, 0, 1], colors: [BLACK, BLACK, BLACK, BLACK, GREEN, BLACK] },
  { position: [1, 0, -1], colors: [ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE] },
  { position: [1, 0, 0], colors: [ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK] },
  { position: [1, 0, 1], colors: [ORANGE, BLACK, BLACK, BLACK, GREEN, BLACK] },

  // top plane
  { position: [-1, 1, -1], colors: [BLACK, RED, YELLOW, BLACK, BLACK, BLUE] },
  { position: [-1, 1, 0], colors: [BLACK, RED, YELLOW, BLACK, BLACK, BLACK] },
  { position: [-1, 1, 1], colors: [BLACK, RED, YELLOW, BLACK, GREEN, BLACK] },
  { position: [0, 1, -1], colors: [BLACK, BLACK, YELLOW, BLACK, BLACK, BLUE] },
  { position: [0, 1, 0], colors: [BLACK, BLACK, YELLOW, BLACK, BLACK, BLACK] },
  { position: [0, 1, 1], colors: [BLACK, BLACK, YELLOW, BLACK, GREEN, BLACK] },
  {
    position: [1, 1, -1],
    colors: [ORANGE, BLACK, YELLOW, BLACK, BLACK, BLUE],
  },
  { position: [1, 1, 0], colors: [ORANGE, BLACK, YELLOW, BLACK, BLACK, BLACK] },
  { position: [1, 1, 1], colors: [ORANGE, BLACK, YELLOW, BLACK, GREEN, BLACK] },
];

export default cubes;
