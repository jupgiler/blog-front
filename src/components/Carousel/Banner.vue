<template>
  <div class="banner-container" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
          v-for="(item,index) in banners"
          :key="index"
          class="banner-item"
      >
        <img :src="item.pic" alt="" class="banner-img">
        <div class="banner-content">
          <p class="banner-title">{{ item.title }}</p>
          <p class="banner-subtitle">{{ item.subtitle }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>

import {getBannerList} from "@/api/article";

export default {
  name: "Banner",
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      },
      banners: []
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.navigation.$nextEl.addClass('hide')
    this.swiper.navigation.$prevEl.addClass('hide')
    this.getBanners()
  },
  methods: {
    async getBanners() {
      const res = await getBannerList();
      this.banners = res.data
    },
    onMouseenter() {
      this.swiper.autoplay.stop()
      this.swiper.navigation.$nextEl.removeClass('hide')
      this.swiper.navigation.$prevEl.removeClass('hide')
    },
    onMouseleave() {
      this.swiper.autoplay.start()
      this.swiper.navigation.$nextEl.addClass('hide')
      this.swiper.navigation.$prevEl.addClass('hide')
    }
  }
}
</script>

<style lang="less" scoped>
.banner-container {
  width: 100%;
  height: 400px;

  .banner-item {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;

    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }

    .banner-content {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 60px;
      width: 100%;
      background: rgba(0, 0, 0, .4);
      padding: 10px 80px 10px 14px;

      .banner-title {
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 18px;
        font-weight: 700;
      }

      .banner-subtitle {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #b9b9b9;
      }
    }
  }

  .hide {
    opacity: 0;
  }
}
</style>