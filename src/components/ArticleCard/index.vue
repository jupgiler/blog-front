<template>
  <div class="article-card">
    <ul class="article-list">
      <li class="article-item flex between"
          v-for="(item,index) in articles"
          :key="index">
        <div class="article-pic">
          <img :src="item.pic" class="article-img" alt="">
        </div>
        <div class="article-info">
          <a href="#" @click.prevent="readArticle(item)" class="article-header">
            <!--            <span v-if="item.isTop" class="badge">置顶</span>-->
            <span class="title text-ellipsis">{{ item.title }}</span>
          </a>
          <div class="article-abstract text-ellipsis-2">
            {{ item.abstract }}
          </div>
          <div class="article-meta">
            <div class="i-time mr16">
              {{ item.createTime }}
            </div>
            <div class="i-view mr16">
              <svg-icon icon-class="view"/>
              {{ item.views }}
            </div>
            <div class="i-comment mr16">
              <svg-icon icon-class="comment"/>
              {{ item.comments }}
            </div>
            <div class="i-like">
              <svg-icon icon-class="like"/>
              {{ item.likes }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="article-page">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="500">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getArticleList} from "@/api/article";

export default {
  name: "ArticleCard",
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      const res = await getArticleList();
      this.articles = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.article-card {
  .article-list {
    .article-item {
      margin: 15px 0;
      background: #fff;
      border-radius: 8px;
      box-shadow: var(--main-box-show);

      .article-pic {
        width: 230px;
        height: 180px;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;

        .article-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          overflow: hidden;
          border-radius: 8px 0 0 8px;
          transition: 2s;
        }

        .article-img:hover {
          transform: scale(1.1);
        }
      }

      .article-info {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-flex: 1;
        flex: 1;
        min-width: 0;
        padding: 15px;

        .article-header {
          font-size: 18px;

          .badge {
            padding: 0 6px;
            height: 20px;
            margin-right: 5px;
            line-height: 20px;
            font-size: 12px;
            white-space: nowrap;
            vertical-align: 2px;
            color: #fff;
            background-image: -webkit-linear-gradient(0deg, #3ca5f6 0, #a86af9 100%);
            border-radius: 2px 6px;
          }

          .title {
            font-size: 18px;
            font-weight: bold;
            color: var(--main-color);
          }

          .title:hover {
            cursor: pointer;
            color: #F56C6C;
          }
        }

        .article-abstract {
          color: #262727;
          line-height: 22px;
          max-height: 44px;
          opacity: .9;
          margin-top: 15px;
        }

        .article-meta {
          display: flex;
          font-size: 13px;
          color: #909399;
          margin-top: auto;
        }
      }
    }
  }

  .article-page {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
}
</style>