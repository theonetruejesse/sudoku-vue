import { empty } from "../helpers/empty";
import { reactive } from "vue";
import { BoardGame, BoardSquare } from "../interfaces/board";
// import { problem } from "../helpers/problem";

export const game: BoardGame = reactive({
  toggle: false,
  active: undefined,
  board: empty,
  // board: problem,
});
