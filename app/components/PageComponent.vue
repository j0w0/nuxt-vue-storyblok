<template>
  <div v-editable="blok" class="page">
    <StoryblokComponent
      v-for="nestedBlok in blok.body"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { SbBlokData } from "@storyblok/vue";

defineProps<{
  blok: SbBlokData & { body: SbBlokData[] };
}>();
</script>
