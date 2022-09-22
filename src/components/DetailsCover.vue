<template>
  <div class="card rounded-lg container mx-auto">
    <div>
      <filter-bar class="border-b border-body-color"></filter-bar>
      <table-view></table-view>
    </div>
  </div>
</template>

<script>
import FilterBar from "@/components/FilterBar.vue";
import TableView from "./TableView.vue";
export default {
  components: {
    FilterBar,
    TableView,
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  min-height: 80vh;
}
</style>