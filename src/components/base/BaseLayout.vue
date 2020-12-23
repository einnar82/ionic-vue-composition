<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script type='ts'>
import {
  IonPage,
  IonTitle,
  IonContent,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonHeader
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLayout",
  props: {
    pageTitle: {
      required: true,
      type: String,
    },
    pageDefaultBackLink: {
      type: String
    }
  },
  components: {
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonHeader
  },
});
</script>

<style>
</style>