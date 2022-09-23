<template>
  <div>
    <header class="mb-10">
      <the-header
        @changeComponent="changeComponent"
        :activeComponent="activeComponent"
      ></the-header>
    </header>
    <div class="card rounded-lg container mx-auto">
      <div>
        <filter-bar
          class="border-b border-body-color"
          @userPaid="userPaid"
        ></filter-bar>
        <component :is="activeComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import FilterBar from "@/components/FilterBar.vue";
import AllUser from "@/components/AllUser.vue";
import PaidUsers from "@/components/PaidUsers.vue";
import UnpaidUsers from "@/components/UnpaidUsers.vue";
import OverdueUsers from "@/components/OverdueUsers.vue";
import DetailsCover from "@/components/DetailsCover.vue";
export default {
  data() {
    return {
      activeComponent: "all-user",
      userToChange: null,
    };
  },
  components: {
    TheHeader,
    FilterBar,
    AllUser,
    PaidUsers,
    DetailsCover,
    UnpaidUsers,
    OverdueUsers,
  },
  methods: {
    changeComponent(comp) {
      this.activeComponent = comp;
    },
    async userPaid() {
      try {
        this.$store.dispatch("userHasPaid", this.userToChange);
      } catch (error) {
        console.log(error.message);
      }
    },
    checkedUser(id) {
      this.userToChange = id;
    },
  },
  provide() {
    return {
      checkedUser: this.checkedUser,
    };
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  min-height: 80vh;
}
</style>
