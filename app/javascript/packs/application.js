/* eslint no-console: 0 */

import Vue from 'vue';
import Vuex from 'vuex';
import App from '../app.vue';
import '../styles/scaffolds.scss';
import store from './store.js';
import ActionCableVue from "actioncable-vue";

Vue.use(Vuex);
Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: "error",
  connectImmediately: true,
  store,
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('vue')) {
    const app = new Vue({
      render: (h) => h(App),
      store,
      el: "#vue",
      channels: {
        SongsChannel: {
          connected() {
            console.log("connected");
          },
          received(data) {
            const json = data;
            this.$store.dispatch("setSong", json.data.attributes);
          },
          disconnected() {
            console.log('disconnected!')
          },
        },
      },
      mounted() {
        const channel = this.$store.state.channel;
        const id = this.$store.state.songId;
        this.$cable.subscribe({ channel, id });
      },
    });
  }
})
