<template>
  <div
    class="
      relative
      bg-white
      flex
      items-center
      rounded-t-md
      justify-between
      px-3
      py-4
    "
  >
    <div
      v-if="filterIsVisible"
      class="absolute bg-white px-3 py-3 top-16 shadow-sm rounded-md z-10"
    >
      <div class="border-b border-gray-100">
        <h5 class="uppercase text-gray-500 mb-3">sort By:</h5>
        <ul class="flex flex-col space-y-2 mb-3">
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label class="flex-1" for="default">default</label>
            <input type="radio" name="filter" id="default" />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label class="" for="firstName">First Name</label>
            <input
              type="radio"
              name="filter"
              id="firstName"
              @click="sortUser($event)"
            />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="lastName">Last Name</label>
            <input type="radio" name="filter" id="lastName" />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="dueDate">Due Date</label>
            <input type="radio" name="filter" id="dueDate" />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="lastLogin">Last Login</label>
            <input type="radio" name="filter" id="lastLogin" />
          </li>
        </ul>
      </div>
      <div>
        <h5 class="uppercase text-gray-500 mb-3">Users:</h5>
        <ul>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="allUser">All</label>
            <input type="radio" name="filter" id="allUser" />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="activeUser">Active</label>
            <input
              type="radio"
              name="filter"
              id="activeUser"
              @change="searchUser"
            />
          </li>
          <li
            class="
              flex
              items-center
              justify-between
              hover:bg-light-purple
              px-2
              py-1
              rounded-md
            "
          >
            <label for="inactiveUser">Inactive</label>
            <input type="radio" name="filter" id="inactiveUser" />
          </li>
        </ul>
      </div>
    </div>
    <div class="flex items-center space-x-6">
      <div
        class="
          py-2
          px-4
          border-2 border-body-color
          flex
          items-center
          space-x-2
          rounded-md
          cursor-pointer
        "
        @click="toggleFilter"
      >
        <img src="./../assets/img/Filter.png" alt="" />
        <p>Filter</p>
      </div>
      <div class="flex items-center bg-light-purple text-primary-variant">
        <div class="py-2 px-2 rounded-md rounded-r-none">
          <img src="./../assets/img/Search.png" alt="" />
        </div>
        <input
          type="text"
          class="
            bg-light-purple
            outline-none
            rounded-md rounded-l-none
            py-2
            px-6
          "
          placeholder="Search user by Name, Email or Date"
        />
      </div>
    </div>
    <div>
      <button class="bg-primary text-white uppercase p-2 rounded-md">
        pay dues
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterIsVisible: false,
    };
  },

  methods: {
    toggleFilter() {
      this.filterIsVisible = !this.filterIsVisible;
    },
    sortUser(e) {
      const id = e.target.id;
      // console.log(id);
      // this.$store.dispatch("sortUser", { id });
    },
  },
};
</script>

<style scoped>
input {
  min-width: 20rem;
  border-radius: 1rem;
}
</style>