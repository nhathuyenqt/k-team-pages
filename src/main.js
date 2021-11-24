import Vue from 'vue'
import { BootstrapVue} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDvcMMz_JrWt6iNxIkP4DaTvYyTZS6DXTI",
        libraries: 'places'
    },
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
