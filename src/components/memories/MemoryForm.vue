<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="title" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" v-model="image" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="description" required />
      </ion-item>
      <ion-button expand="block" type="submit">Save</ion-button>
    </ion-list>
  </form>
</template>
<script lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  setup(props, { emit }) {
    const data = reactive({
      title: "",
      image: "",
      description: "",
    });
    const submitForm = () => {
      emit("save-memory", data);
    };

    return { ...toRefs(data), submitForm };
  },
});
</script>

<style>
</style>