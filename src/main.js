import Vue from 'vue'
import { BootstrapVue} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-material-design-icons/styles.css'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mdiVue from 'mdi-vue/v3'
// import * as mdijs from '@mdi/js'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDvcMMz_JrWt6iNxIkP4DaTvYyTZS6DXTI",
        libraries: 'places'
    },
});
Vue.use(mdiVue, {
  icons: {
    iconfont: 'mdi'
 }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
