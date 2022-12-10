<template>
  <div id="home-container">
    <Nav></Nav>
    <div class="mt20 flex between container wrapper">
      <div class="left-aside">
        <Banner></Banner>
        <ArticleCard class="mt20"></ArticleCard>
      </div>
      <div class="right-aside">
        <AuthorCard></AuthorCard>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import {getArticleList} from "@/api/article";
import Banner from "@/components/Carousel/Banner";
import AuthorCard from "@/components/UserCard/AuthorCard";
import ArticleCard from "@/components/ArticleCard";

export default {
  name: "Home",
  components: {ArticleCard, AuthorCard, Banner, Nav},
  data() {
    return {}
  },
  mounted() {
    this.getArticleList()
  },
  methods: {
    async getArticleList() {
      const res = await getArticleList();
    }
  }
}
</script>

<style lang="less" scoped>
#home-container {
  width: 100%;
  min-height: 100vh;
  background-image: -webkit-linear-gradient(top, transparent 39px, #efefef 40px),
  -webkit-linear-gradient(left, transparent 39px, #efefef 40px);
  background-size: 40px 40px;
}
</style>