<template>
  <div>Hello World</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "bruh",
  props: {
    count: {
      type: Number || null,
      default: 0,
    },
  },
  setup(props) {
    const counter = ref(props.count);
    const add = () => {
      counter.value += 1;
    };
    return { counter, add };
  },
});
</script>
