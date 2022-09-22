<template>
  <div class="bg-body-color font-Inter py-16">
    <router-view />
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
