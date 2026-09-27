<template>
  <div v-if="story">
    <StoryblokComponent :blok="story.content" />
  </div>
  <div
    v-else
    class="flex min-h-screen items-center justify-center text-slate-500"
  >
    Story not found
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const storyblokApi = useStoryblokApi();

const slug = computed(() => {
  const path = Array.isArray(route.params.slug)
    ? route.params.slug.join("/")
    : route.params.slug;
  return path || "home";
});

const { data: story } = await useAsyncData(`story-${slug.value}`, async () => {
  const { data } = await storyblokApi.get(`cdn/stories/${slug.value}`, {
    version: getStoryVersion(),
  });
  return data.story;
});

if (import.meta.client && story.value) {
  useStoryblokBridge(story.value.id, (evStory) => {
    story.value = evStory;
  });
}
</script>
