<template>
  <nav class="container mx-auto text-primary-variant">
    <h3 class="uppercase font-semibold mb-4">Table heading</h3>
    <div class="flex items-center justify-between border-b-2 border-gray-300">
      <!--Navbar--->
      <ul class="flex items-center">
        <li
          class="border-b-2 border-primary-variant px-3 cursor-pointer"
          @click="$emit('changeComponent', 'all-user')"
        >
          All
        </li>
        <li
          class="border-b-2 border-transparent px-3 cursor-pointer"
          @click="$emit('changeComponent', 'paid-users')"
        >
          Paid
        </li>
        <li
          class="border-b-2 border-transparent px-3 cursor-pointer"
          @click="$emit('changeComponent', 'unpaid-users')"
        >
          Unpaid
        </li>
        <li
          class="border-b-2 border-transparent px-3 cursor-pointer"
          @click="$emit('changeComponent', 'overdue-users')"
        >
          Overdue
        </li>
      </ul>

      <!--Price part---->
      <div>
        <p>
          Total payable amount:
          <span class="text-primary font-bold">${{ amountToPay }}</span> USD
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    amountToPay() {
      return this.$store.getters.totalToPay;
    },
  },
};
</script>

<style scoped>
ul {
  margin-bottom: -2px;
}
</style>