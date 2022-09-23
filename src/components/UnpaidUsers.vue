<template>
  <table-view :users="users"></table-view>
</template>

<script>
import TableView from "./TableView.vue";
export default {
  components: {
    TableView,
  },
  computed: {
    users() {
      return this.$store.getters.unpaidUsers;
    },
  },
  mounted() {
    console.log(this.unpaidUsers);
  },
};
</script>