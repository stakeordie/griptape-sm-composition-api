<template>
  <div>
    <h1>Griptape.js</h1>

    <count-displayer/>

    <count-increment/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountDisplayer from '@/components/CounterDisplayer.vue';
import CountIncrement from '@/components/CounterIncrement.vue';

export default defineComponent({
  name: 'App',
  components: { CountDisplayer, CountIncrement }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
