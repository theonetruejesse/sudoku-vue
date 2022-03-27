import { reactive } from "vue";

interface GameInterface {
  toggle: boolean;
  active: string | undefined;
  board: number[][] | undefined[][];
  // board:
}

const empty = [...Array(9)].map((x) => Array(9));

export const game: GameInterface = reactive({
  toggle: false,
  active: undefined,
  board: empty,
});
