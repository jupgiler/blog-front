import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/archive',
        name: 'Archive',
        component: () => import('@/views/Archive')
    },
    {
        path: '/readArticle',
        name: 'ReadArticle',
        component: () => import('@/views/ReadArticle')
    },
    {
        path: '/writeArticle',
        name: 'WriteArticle',
        component: () => import('@/views/WriteArticle')
    },
    {
        path: '/userCenter',
        name: 'UserCenter',
        component: () => import('@/views/UserCenter')
    }
]

const router = new VueRouter({
    routes
})

export default router
