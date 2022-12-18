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
        <HotArticle class="mt20"></HotArticle>
        <TagCloud class="mt20"></TagCloud>
        <Hopper class="mt20"></Hopper>
      </div>
    </div>
    <FootWaveLine></FootWaveLine>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import {getArticleList} from "@/api/article";
import Banner from "@/components/Carousel/Banner";
import AuthorCard from "@/components/UserCard/AuthorCard";
import ArticleCard from "@/components/ArticleCard";
import HotArticle from "@/components/HotArticle";
import Hopper from "@/components/Hopper";
import FootWaveLine from "@/components/Footer/FootWaveLine";
import TagCloud from "@/components/TagCloud";

export default {
  name: "Home",
  components: {TagCloud, FootWaveLine, Hopper, HotArticle, ArticleCard, AuthorCard, Banner, Nav},
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