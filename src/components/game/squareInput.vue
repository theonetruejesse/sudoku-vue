<template>
  <button class="border-2 w-14 h-14 border-blue-600 shadow-md rounded-md">
    {{ input }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "square-input",
  props: {
    input: {
      type: String || null,
      default: null,
    },
  },
});
</script>
