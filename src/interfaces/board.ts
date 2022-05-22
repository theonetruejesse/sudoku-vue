export interface BoardGame {
  toggle: boolean;
  active: string | undefined;
  // board: BoardSquare[][] | undefined[][];
  board: number[][] | undefined[][];
}

export interface BoardSquare {
  // x: number;
  // y: number;
  value: number | undefined;
}
