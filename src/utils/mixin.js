export const globalMixin = {
    methods: {
        readArticle(item) {
            console.log("readArticle item:", item)
            let route = this.$router.resolve({
                name: "ReadArticle",
                query: {
                    id: item.id
                }
            })
            window.open(route.href, "_blank")
        },
        // 打开登录弹窗
        openLoginDialog() {
            this.$login(true)
        },
        // 打开注册弹窗
        openRegisterDialog() {
            this.$login(false)
        },
        // 打开搜索抽屉
        openSearchDrawer() {
            this.$search()
        }
    }
}