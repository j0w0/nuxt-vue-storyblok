<template>
  <div v-editable="blok" class="teaser">
    <h1>{{ blok.headline }}</h1>
    <p>{{ blok.subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import type { SbBlokData } from "@storyblok/vue";

defineProps<{
  blok: SbBlokData & { headline?: string; subtitle?: string };
}>();
</script>
