<template class="relative"
>
  <tr
    class="bg-white hover:bg-light-purple border-y border-gray-200 duration-300"
    :class="detailIsVisible ? 'border-l-4 border-l-primary' : ''"
  >
    <td class="py-4 pl-3">
      <input type="checkbox" id="check" class="hidden" />
      <label for="check">
        <div
          class="
            border-2 border-primary-variant
            bg-white
            rounded-sm
            h-5
            w-5
            flex
            items-center
            justify-center
          "
        >
          <img src="./../assets/img/mark.png" alt="" class="w-9/12" /></div
      ></label>
    </td>
    <td>
      <img
        v-if="detailIsVisible"
        @click="hideDetails"
        src="./../assets/img/arrow-up.png"
        alt=""
        class="w-12"
      />
      <img
        v-else
        @click="showDetails"
        src="./../assets/img/arrow-down.png"
        alt=""
      />
    </td>
    <td>
      <h4 class="font-semibold mb-2">{{ fullName }}</h4>
      <p class="text-primary-variant text-sm">{{ user.email }}</p>
    </td>
    <td class="py-4">
      <div
        class="
          bg-light-purple
          p-1
          px-3
          rounded-full
          flex
          items-center
          justify-center
          space-x-2
          mb-2
          max-w-fit
        "
        :class="
          user.userStatus === 'inactive' ? 'bg-body-color bg-opacity-50' : ''
        "
      >
        <div
          class="w-2 h-2 rounded-full bg-primary"
          :class="user.userStatus === 'inactive' ? 'bg-primary-variant' : ''"
        ></div>
        <p
          class="font-semibold"
          :class="
            user.userStatus === 'inactive'
              ? 'text-primary-variant'
              : 'text-primary'
          "
        >
          {{ user.userStatus === "inactive" ? "Inactive" : "Active" }}
        </p>
      </div>
      <p class="text-primary text-xs">{{ getDate(user.lastLogin) }}</p>
    </td>
    <td>
      <div
        class="
          bg-light-green
          p-1
          px-3
          rounded-full
          flex
          items-center
          justify-center
          space-x-2
          max-w-fit
          mb-2
        "
        :class="
          user.paymentStatus === 'overdue'
            ? 'bg-light-red'
            : user.paymentStatus === 'unpaid'
            ? 'bg-light-yellow'
            : ''
        "
      >
        <div
          class="w-2 h-2 rounded-full bg-green"
          :class="
            user.paymentStatus === 'overdue'
              ? 'bg-red'
              : user.paymentStatus === 'unpaid'
              ? 'bg-yellow'
              : ''
          "
        ></div>
        <p
          class="text-green font-semibold"
          :class="
            user.paymentStatus === 'overdue'
              ? 'text-red'
              : user.paymentStatus === 'unpaid'
              ? 'text-yellow'
              : ''
          "
        >
          {{
            user.paymentStatus === "overdue"
              ? "Overdue"
              : user.paymentStatus === "unpaid"
              ? "Unpaid"
              : "Paid"
          }}
        </p>
      </div>
      <p class="text-xs font-semibold">Paid on {{ getDate(user.paidOn) }}</p>
    </td>
    <td>
      <div>
        <h3 class="font-semibold">
          ${{ (user.amountInCents / 100).toFixed(2) }}
        </h3>
        <p class="text-xs text-primary">USD</p>
      </div>
    </td>
    <td><p class="text-primary text-xs">View More</p></td>
    <td>
      <div class="relative">
        <img
          @click="showEditModal"
          src="./../assets/img/More.png"
          alt="more"
          class="cursor-pointer"
          :class="detailIsVisible ? 'w-5' : ''"
        />

        <!---Edit MOdal starts----->
        <div
          v-if="modalIsVisible"
          class="
            absolute
            w-40
            p-4
            top-3
            right-3
            z-10
            bg-white
            rounded-md
            shadow-md
          "
        >
          <div
            class="absolute p-2 bg-white shadow-md rounded-full -top-2 -right-2"
          >
            <img
              src="./../assets/img/Close.png"
              alt=""
              @click="hideEditModal"
              class="cursor-pointer"
            />
          </div>
          <div class="mb-2 border-b border-gray-300 pb-3">
            <p>Edit</p>
            <p>View Profile</p>
            <p class="text-green">Activate User</p>
          </div>
          <div>
            <p class="text-red">Delete</p>
          </div>
        </div>
        <!---Edit MOdal ends----->
      </div>
    </td>
  </tr>
  <!--Details starts-->
  <tr
    v-if="detailIsVisible"
    class="
      uppercase
      text-primary-variant
      border-b
      bg-body-color
      border-gray-300
      font-semibold
    "
  >
    <td></td>
    <td></td>

    <td>Date</td>
    <td colspan="2">User activity</td>
    <td class="flex items-center space-x-2 py-5" colspan="2">
      <p>detail</p>
      <img src="./../assets/img/Info.png" alt="" />
    </td>
    <td></td>
    <!-- <td></td> -->
    <td></td>
  </tr>
  <tr
    v-if="detailIsVisible"
    class="text-sm border-b bg-light-purple border-gray-300"
  >
    <td class="py-8"></td>
    <td></td>
    <td class="text-primary-variant">dwdwuhdiwdd</td>
    <td colspan="2" class="py-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aliquid.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ratione
      eos facere pariatur earum asperiores consequuntur odit veniam in possimus?
    </td>
    <td colspan="2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, obcaecati.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, debitis.
    </td>
    <!-- <td></td> -->
    <td></td>
  </tr>

  <!--Details ends-->
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      modalIsVisible: false,
      detailIsVisible: false,
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    showEditModal() {
      this.modalIsVisible = true;
    },
    hideEditModal() {
      this.modalIsVisible = false;
    },
    showDetails() {
      this.detailIsVisible = true;
    },
    hideDetails() {
      this.detailIsVisible = false;
    },
    getDate(date) {
      if (date == null) {
        return "______";
      }
      const dateArr = date.split("-");
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEPT",
        "OCT",
        "NOV",
        "DEC",
      ];

      return `${dateArr[2]}/${months[dateArr[1] - 1]}/${dateArr[0]}`;
    },
  },
};
</script>

<style scoped>
#check:checked ~ label > div {
  background: #6d5bd0;
}
th,
td {
  padding-right: 10px;
  padding-left: 10px;
}
</style>