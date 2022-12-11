import {globalMixin} from "@/utils/mixin";
import Login from '@/components/Login/login.js'
import Search from '@/components/Search/search.js'

export default {
    install(Vue) {
        Vue.mixin(globalMixin)
        Vue.prototype.$login = Login.install
        Vue.prototype.$search = Search.install
    }
}