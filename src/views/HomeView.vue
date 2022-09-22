<template>
  <div>
    <header class="mb-10">
      <the-header></the-header>
    </header>

    <details-cover></details-cover>
  </div>
</template>

<script lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import DetailsCover from "@/components/DetailsCover.vue";
export default {
  components: {
    TheHeader,
    DetailsCover,
  },
};
</script>
