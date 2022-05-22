<template>
  <div class="w-fit bg-orange-50">
    <BoxContainer>
      <li v-for="i in 9" :key="i + r">
        <BoxContainer>
          <li v-for="j in 9" :key="j + r">
            <SquareInput :id="i + '-' + j" />
          </li>
        </BoxContainer>
      </li>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import SquareInput from "./squareInput.vue";
//@ts-ignore
import BoxContainer from "./boxContainer.vue";
import { problem } from "../../helpers/problem";
import { game } from "../../state/game";
import { onMounted, ref } from "vue";

console.log("set board");
// problem.then((p) => (game.board = p));

export default defineComponent({
  name: "game-board",
  props: {
    refresh: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const r = ref(props.refresh);
    async () => {
      game.board = await problem;
      r.value = "-";
    };

    return { r };
  },
  components: { BoxContainer, SquareInput },
});
</script>
