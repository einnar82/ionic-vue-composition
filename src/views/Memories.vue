<template>
  <base-layout page-title="All Memories">
    <ion-content>
      <ion-list>
        <ion-item
          v-for="(memory, key) in memories"
          :key="key"
          :router-link="`/memories/${memory.id}`"
        >
          <ion-thumbnail slot="start">
            <ion-img :src="memory.image" :alt="memory.title" />
          </ion-thumbnail>
          <ion-label>
            {{ memory.title }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </base-layout>
</template>

<script type='ts'>
import {
  IonContent,
  IonList,
  IonItem,
  IonImg,
  IonThumbnail,
  IonLabel,
} from "@ionic/vue";
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Memories",
  components: {
    IonContent,
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
  setup() {
    const store = useStore()
    const memories = computed(() => {
      return store.state.memories;
    })

    return { memories }
  }
});
</script>

<style>
</style>