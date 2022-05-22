<template>
  <button
    class="border-2 w-14 h-14 border-blue-600 shadow-md rounded-md"
    @click="setActive()"
  >
    {{ square != 0 ? square : "" }}
    <!-- {{}} -->
    <!-- {{ id }} -->
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { game } from "../../state/game";
import { getCoordinates } from "../../helpers/getCoordinates";
// import { problem } from ".././helpers/problem";

export default defineComponent({
  name: "square-input",

  props: {
    id: String,
    value: Number,
  },
  setup(props) {
    const square = ref(props.value);

    const getValue = (id: string) => {
      const idArray = id.split("-").map((i) => parseInt(i));
      const { x, y } = getCoordinates(idArray[0], idArray[1]);
      return game.board[y][x];
    };

    const setActive = () => {
      game.active = props.id;
      game.toggle = true;
    };

    // yeah there should be no edge cases, all gud

    square.value = getValue(props.id!);

    return { square, setActive };
  },
});
</script>
