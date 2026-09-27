<template>
  <div v-editable="blok" class="grid">
    <StoryblokComponent v-for="column in blok.columns" :key="column._uid" :blok="column" />
  </div>
</template>

<script setup lang="ts">
import type { SbBlokData } from "@storyblok/vue";

defineProps<{
  blok: SbBlokData & { columns: SbBlokData[] };
}>();
</script>
