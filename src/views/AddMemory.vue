<template>
  <base-layout page-title="Add A Memory" page-default-back-link="/memories">
    <memory-form @save-memory="saveMemory"></memory-form>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MemoryForm from "@/components/memories/MemoryForm.vue";
export default defineComponent({
  components: {
    MemoryForm,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const saveMemory = (memoryData: object) => {
      store.dispatch("addMemory", memoryData);
      router.replace("/memories");
    };

    return { saveMemory };
  },
});
</script>

<style>
</style>