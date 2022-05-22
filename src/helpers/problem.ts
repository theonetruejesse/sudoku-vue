import axios, { AxiosResponse } from "axios";

const difficulty = "easy";

const getProblem = async () => {
  // get random board
  console.log("finding problem");
  const result: AxiosResponse = await axios.get(
    `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`
  );
  console.log("found problem");
  console.log(result.data.board);
  return result.data.board as number[][];
};

// export const problem = getProblem().then((b) => formatBoard(b));
export const problem = getProblem();
