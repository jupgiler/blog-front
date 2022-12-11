import Vue from 'vue'
import Login from './index.vue'

const LoginBox = Vue.extend(Login)
Login.install = function (showLogin) {
    let instance = new LoginBox(showLogin).$mount()
    document.body.appendChild(instance.$el)
    instance.open(showLogin)
}

export default Login