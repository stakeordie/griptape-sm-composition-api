import { ref, computed, ComputedRef } from 'vue';
import { counter } from '@/contracts';

export interface CounterState {
  count?: number;
}

export interface CounterStore {
  count: ComputedRef<number | undefined>,
  loading: ComputedRef<boolean>,
  getCount(): Promise<void>;
  increment(): Promise<void>;
}

// state
const state = ref<CounterState>({ count: undefined });
const loading = ref(false);

// actions
async function $loadCount() {
  const res = await counter.getCount();
  state.value.count = res.count;
}

async function getCount() {
  loading.value = true;
  await $loadCount();
  loading.value = false;
}

async function increment() {
  try {
    loading.value = true;
    await counter.increment();
    await $loadCount();
  } catch (e: any) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

export default function useCounterStore(): CounterStore {
  return {
    count: computed(() => state.value.count),
    loading: computed(() => loading.value),
    getCount,
    increment
  };
}
