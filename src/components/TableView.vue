<template>
  <div class="overflow-x-auto relative">
    <table class="table-auto w-full border-spacing-10 min-h-full">
      <thead
        class="
          text-left
          uppercase
          text-primary-variant
          bg-light-purple
          font-semibold
        "
      >
        <tr>
          <th class="py-4 pl-3">
            <div
              class="border-2 border-primary-variant rounded-sm w-5 h-5"
            ></div>
          </th>
          <th></th>
          <th><p>name</p></th>
          <th><p>user status</p></th>
          <th><p>payment status</p></th>
          <th>amount</th>
          <th></th>
          <th>
            <img
              src="./../assets/img/More.png"
              alt="more"
              class="cursor-pointer"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <user-overview v-for="user in users" :key="user.id" :user="user"></user-overview>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserOverview from "@/components/UserOverview.vue";
export default {
  inject: ["users"],
  components: {
    UserOverview,
  },
  mounted() {
    console.log(this.users);
  },
};
</script>

<style scoped>
#check:checked ~ label > div {
  background: #6d5bd0;
}
th,
td {
  padding: 10px;
}
</style>