import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    channel: "SongsChannel",
    song: null,
    songId: document.getElementById("vue").dataset.songid,
  },
  actions: {
    setSong({ commit }, data) {
      commit("SET_SONG", data);
    },
    saveSong(context, data) {
      this.$cable.perform({ channel: context.state.channel, action: "save_song", data });
    },
  },
  mutations: {
    SET_SONG: (state, payload) => {
      state.song = payload;
    },
  },
});

export default store;
