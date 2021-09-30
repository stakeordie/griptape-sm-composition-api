<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else><b>Count is:</b> {{ count }}</p>
    <button @click="getCount">Get Count</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '@/stores/counter';

export default defineComponent({
  setup() {
    const { count, loading, getCount } = useCounter();
    return { count, loading, getCount };
  },
})
</script>
