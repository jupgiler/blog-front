import Mock from 'mockjs'
import banner from './banner.json'
import article from './article.json'
import label from './label.json'

Mock.mock(/\/article\/get_article_list/, 'get', article.articles)
Mock.mock(/\/article\/get_recommend_list/, 'get', article.recommends)

Mock.mock(/\/banner\/get_banner_list/, 'get', banner.banners)

Mock.mock(/\/label\/get_label_list/, 'get', label.labels)
