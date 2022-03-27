<template>
  <div class="flex flex-col justify-center items-center bg-slate-600">
    <div class="w-fit">
      <HeaderSection />
      <GameBoard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import HeaderSection from "./components/headerSection.vue";
//@ts-ignore
import GameBoard from "./components/game/gameBoard.vue";
export default defineComponent({
  name: "App",
  components: {
    GameBoard,
    HeaderSection,
  },
  data() {
    return { the: "yooo" };
  },
});
</script>
