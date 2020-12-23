<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Memory not found</h2>
    <memory-overview v-else v-bind="{...loadedMemory}"></memory-overview>
  </base-layout>
</template>

<script type='ts'>
import { computed, defineComponent, reactive, toRefs } from "vue";
import MemoryOverview from '@/components/memories/MemoryOverview.vue'
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    MemoryOverview
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const memoryId = route.params.id;
    const data = reactive({
      memoryId,
      loadedMemory: computed(() => {
        return store.getters.memory(Number(memoryId));
      }),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style>
</style>