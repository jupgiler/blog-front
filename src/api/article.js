import request from '@/utils/request'

export function getArticleList() {
    return request({
        url: "article/get_article_list",
        method: 'get',
    })
}

export function getHotArticle(param) {
    return request({
        url: "",
        method: 'get',
        param
    })
}

export function getRecommendList() {
    return request({
        url: "article/get_recommend_list",
        method: "get"
    })
}

export function getBannerList() {
    return request({
        url: "banner/get_banner_list",
        method: "get"
    })
}