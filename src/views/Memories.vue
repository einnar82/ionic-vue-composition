<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories" />
  </base-layout>
</template>

<script type='ts'>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import MemoriesList from "@/components/memories/MemoriesList.vue";

export default defineComponent({
  name: "Memories",
  components: {
    MemoriesList,
    IonButton,
    IonIcon,
  },
  setup() {
    const store = useStore();
    const data = reactive({
      add,
      memories: computed(() => {
        return store.state.memories;
      }),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style>
</style>