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
    // ...mapGetters(["users"]),
    users() {
      return this.$store.getters.users;
    },
  },
  mounted() {
    // this.$store.getters.users;
    console.log(this.users);
  },
  provide() {
    return {
      users: this.users,
    };
  },
};
</script>