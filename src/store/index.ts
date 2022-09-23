import { createStore } from "vuex";
import axios from "axios";
const myId = "uSjHbl7tYiTDhIx";

export default createStore({
  state: {
    users: [],
    searchUser: [],
    paidUsers: [],
    unpaidUsers: [],
    overdueUsers: [],
    totalToPay: 0,
  },
  getters: {
    users(state) {
      if (state.searchUser.length > 0) {
        return state.searchUser;
      } else {
        return state.users;
      }
    },
    paidUsers(state) {
      return state.paidUsers;
    },
    unpaidUsers(state) {
      return state.unpaidUsers;
    },
    overdueUsers(state) {
      return state.overdueUsers;
    },
    totalToPay(state) {
      return state.totalToPay;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload.data;
    },
    setUnpaidUsers(state, payload) {
      const newArr = payload.data.filter(
        (user: any) => user.paymentStatus == "unpaid"
      );

      state.unpaidUsers = newArr;
    },
    setPaidUsers(state, payload) {
      const newArr = payload.data.filter(
        (user: any) => user.paymentStatus == "paid"
      );
      state.paidUsers = newArr;
    },
    setOverdueUsers(state, payload) {
      const newArr = payload.data.filter(
        (user: any) => user.paymentStatus == "overdue"
      );
      state.overdueUsers = newArr;
    },
    setTotalToPay(state, payload) {
      const unpaidSum = payload.reduce((acc: number, user: any) => {
        if (user.paymentStatus === "!unpaid") {
          return;
        }
        return acc + user.amountInCents;
      }, 0);
      const overdueSum = payload.reduce((acc: number, user: any) => {
        if (user.paymentStatus === "!overdue") {
          return;
        }
        return acc + user.amountInCents;
      }, 0);
      const amountToPay = (unpaidSum + overdueSum) / 100;
      state.totalToPay = amountToPay;
    },
  },
  actions: {
    async getUsers(context: any) {
      try {
        const res = await axios.get(`users/${myId}`);
        console.log(res);
        context.commit("setUsers", res.data);
        context.commit("setUnpaidUsers", res.data);
        context.commit("setPaidUsers", res.data);
        context.commit("setOverdueUsers", res.data);
        context.commit("setTotalToPay", res.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async activateUser(context, payload) {
      try {
        await axios.patch(`activate-user/${payload}`);
        alert("User Activated");
        context.dispatch("getUsers");
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    },
    async deleteUser(context, payload) {
      try {
        await axios.delete(`remove-user/${payload}`);
        alert("User Deleted");
        context.dispatch("getUsers");
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    },
    sortUser(context, payload) {
      const users = context.state.users;
      const name = payload.id;
      if (name === "firstName") {
        users.sort((a: any, b: any) =>
          a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
        );
      } else if (name === "lastName") {
        users.sort((a: any, b: any) =>
          a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
        );
      } else if (name === "default") {
        context.dispatch("getUsers");
      }
    },
    filterUser(context, text) {
      if (text !== "") {
        let users = context.state.users;
        users = users.filter(
          (user: any) =>
            user.firstName.includes(text) ||
            user.lastName.includes(text) ||
            user.email.includes(text)
        );
        context.state.searchUser = users;
        context.commit("setUnpaidUsers", { data: context.state.searchUser });
        context.commit("setPaidUsers", { data: context.state.searchUser });
        context.commit("setOverdueUsers", { data: context.state.searchUser });
      } else {
        context.state.searchUser = context.state.users;
        context.commit("setUnpaidUsers", { data: context.state.users });
        context.commit("setPaidUsers", {
          data: context.state.searchUser,
        });
        context.commit("setOverdueUsers", {
          data: context.state.searchUser,
        });
      }
    },
    async userHasPaid(context, userId) {
      try {
        await axios.patch(`mark-paid/${userId}`);
        alert("User altered to paid successfully!");
        context.dispatch("getUsers");
      } catch (error: any) {
        throw Error(error.response.message || "Something went wrong");
      }
    },
  },
  // modules: {}
});
