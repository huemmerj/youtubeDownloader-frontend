import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueSocketIO from 'vue-socket.io';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:4000',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
  },
}))

Vue.config.productionTip = false;
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
