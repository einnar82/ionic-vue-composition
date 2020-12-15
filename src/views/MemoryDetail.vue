<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Memory not found</h2>
    <ion-content v-else> {{ loadedMemory }} </ion-content>
  </base-layout>
</template>

<script type='ts'>
import { IonContent } from "@ionic/vue";
import { computed, defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    IonContent,
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
    return { ...data };
  },
});
</script>

<style>
</style>