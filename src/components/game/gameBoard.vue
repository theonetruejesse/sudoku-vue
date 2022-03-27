<template>
  <div class="w-fit bg-orange-50">
    <BoxContainer>
      <li v-for="i in 9" :key="i">
        <BoxContainer>
          <li v-for="j in 9" :key="j">
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

export default defineComponent({
  name: "game-board",
  components: { BoxContainer, SquareInput },
});
</script>
