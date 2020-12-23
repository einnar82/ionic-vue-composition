<template>
  <base-layout page-title="All Memories">
    <ion-content>
      <memories-list :memories="memories" />
    </ion-content>
  </base-layout>
</template>

<script type='ts'>
import { IonContent } from "@ionic/vue";
import MemoriesList from "@/components/memories/MemoriesList.vue";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Memories",
  components: {
    IonContent,
    MemoriesList,
  },
  setup() {
    const store = useStore();
    const memories = computed(() => {
      return store.state.memories;
    });

    return { memories };
  },
});
</script>

<style>
</style>