import Vue from 'vue'
import Search from './index.vue'

const SearchBox = Vue.extend(Search)
Search.install = function () {
    let instance = new SearchBox().$mount()
    document.body.appendChild(instance.$el)
    instance.open()
}

export default Search