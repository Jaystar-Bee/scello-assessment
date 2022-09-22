<template>
  <table-view></table-view>
</template>

<script>
import TableView from "./TableView.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TableView,
  },
  computed: {
    ...mapGetters(["paidUsers"]),
    users() {
      return this.$store.getters.paidUsers;
    },
  },
  mounted() {
    // this.$store.getters.users;
    // console.log(this.paidUsers);
  },
  provide() {
    return {
      users: this.paidUsers,
    };
  },
};
</script>