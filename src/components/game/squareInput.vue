<template>
  <button
    class="border-2 w-14 h-14 border-blue-600 shadow-md rounded-md"
    @click="setActive()"
  >
    {{ value }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { game } from "../../state/game";

export default defineComponent({
  name: "square-input",

  props: {
    id: String,
  },
  setup(props) {
    const getValue = (id: string) => {
      const index = id.split("-").map((i) => {
        return parseInt(i) - 1;
      });
      return game.board[index[0]][index[1]];
    };
    const setActive = () => {
      game.active = props.id;
      console.log(game.active);
    };

    const value = getValue(props.id!);

    // const add = () => {
    //   count.value += 1;
    // };
    return { value, setActive };
  },
});
</script>
