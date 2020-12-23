<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    />
  </ion-list>
</template>

<script type="ts">
import { defineComponent } from "vue";
import { IonList } from '@ionic/vue'
import MemoryListItem from "@/components/memories/MemoryListItem.vue";

export default defineComponent({
  components: {
    MemoryListItem,
    IonList
  },
  props: {
    memories: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
    },
  },
});
</script>

<style>
</style>