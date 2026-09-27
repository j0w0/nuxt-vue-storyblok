export default function getStoryVersion() {
  return process.env.STORYBLOK_IS_PREVIEW === "true" ? "draft" : "published";
}
