import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueTypedJs from 'vue-typed-js'
import plugins from '@/utils/piugins'

import "@/mock/mockServer"
import "animate.css"
import '@/assets/icons'
import '@/assets/css/index.css'
import '@/assets/css/common.css'
import '@/assets/css/media.css'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueAwesomeSwiper)
Vue.use(mavonEditor)
Vue.use(VueTypedJs)
Vue.use(plugins)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
