<template>
  <div class="card rounded-lg container mx-auto">
    <div>
      <filter-bar class="border-b border-body-color"></filter-bar>
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import FilterBar from "@/components/FilterBar.vue";
import AllUser from "./AllUser.vue";
import PaidUsers from "./PaidUsers.vue";
export default {
  props: ["activeComponent"],

  components: {
    FilterBar,
    AllUser,
    PaidUsers,
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  min-height: 80vh;
}
</style>