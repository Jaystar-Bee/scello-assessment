<template>
  <table-view :unpaidUsers="users"></table-view>
</template>

<script>
import TableView from "./TableView.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TableView,
  },
  computed: {
    ...mapGetters(["unpaidUsers"]),
    users() {
      return this.$store.getters.unpaidUsers;
    },
  },
  mounted() {
    // this.$store.getters.users;
    console.log(this.unpaidUsers);
  },
  provide() {
    return {
      users: this.unpaidUsers,
    };
  },
};
</script>