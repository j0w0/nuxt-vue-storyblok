<template>
  <div v-editable="blok" class="feature">
    <h3>{{ blok.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { SbBlokData } from "@storyblok/vue";

defineProps<{
  blok: SbBlokData & { name?: string };
}>();
</script>
