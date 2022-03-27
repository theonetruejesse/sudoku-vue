<template>
  <ui
    class="border-black border-2 p-2 grid grid-cols-3 grid-rows-3 gap-2 w-fit list-none"
  >
    <slot></slot>
  </ui>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "box-container",
  // props: {},
});
</script>
