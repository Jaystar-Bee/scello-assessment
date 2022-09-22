import { createStore } from "vuex";
import axios from "axios";
const myId = "uSjHbl7tYiTDhIx";

export default createStore({
  state: {
    users: null,
    paidUsers: [],
    unpaidUsers: [],
    overdueUsers: [],
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
      } catch (error) {
        console.log(error);
      }
    },
  },
  // modules: {}
});
