import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    addTableEntry(state, payload) {
      this.state.tableData.push(payload);
    }
  },
  actions: {},
  getters: {
    tableDataCount: state => {
      return state.tableData.length;
    }
  }
});
