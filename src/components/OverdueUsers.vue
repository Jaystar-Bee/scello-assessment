<template>
  <table-view></table-view>
</template>

<script>
import TableView from "./TableView.vue";

export default {
  components: {
    TableView,
  },
  computed: {
    overdueUsers() {
      return this.$store.getters.overdueUsers;
    },
  },
  mounted() {
    // this.$store.getters.users;
    // console.log(this.overdueUsers);
  },
  provide() {
    return {
      users: this.overdueUsers,
    };
  },
};
</script>