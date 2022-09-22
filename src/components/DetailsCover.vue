<template>
  <div class="card rounded-lg container mx-auto">
    <div>
      <filter-bar class="border-b border-body-color"></filter-bar>
      <all-user></all-user>
    </div>
  </div>
</template>

<script>
import FilterBar from "@/components/FilterBar.vue";
import AllUser from "./AllUser.vue";
export default {
  components: {
    FilterBar,
    AllUser,
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  min-height: 80vh;
}
</style>