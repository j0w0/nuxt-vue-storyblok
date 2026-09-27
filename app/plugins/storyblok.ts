import PageComponent from "~/components/PageComponent.vue";
import TeaserComponent from "~/components/TeaserComponent.vue";
import GridComponent from "~/components/GridComponent.vue";
import FeatureComponent from "~/components/FeatureComponent.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("page", PageComponent);
  nuxtApp.vueApp.component("teaser", TeaserComponent);
  nuxtApp.vueApp.component("grid", GridComponent);
  nuxtApp.vueApp.component("feature", FeatureComponent);
});
