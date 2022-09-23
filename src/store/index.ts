import { createStore } from "vuex";
import axios from "axios";
const myId = "uSjHbl7tYiTDhIx";

export default createStore({
  state: {
    users: null,
    paidUsers: [],
    unpaidUsers: [],
    overdueUsers: [],
    totalToPay: 0,
  },
  getters: {
    users(state) {
      return state.users;
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
      console.log(payload);
      // let;
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
        await axios.patch(`remove-user/${payload}`);
        alert("User Activated");
        context.dispatch("getUsers");
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
    },
  },
  // modules: {}
});
