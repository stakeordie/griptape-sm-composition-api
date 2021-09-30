<template>
  <div>
    <button :disabled="loading" @click="increment">Increment counter</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '@/stores/counter';

export default defineComponent({
  setup() {
    const { increment, loading } = useCounter();
    return { increment, loading };
  },
})
</script>

