export const mixin = {
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
        }
    }
}