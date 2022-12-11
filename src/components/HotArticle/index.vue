<template>
  <div class="hot-article">
    <span class="card-title">
      <svg-icon icon-class="hit" class-name="red-color mr05"/>
      热门文章
    </span>
    <ul class="hot-list">
      <li v-for="item in hotArticle" :key="item.id" class="hot-item flex">
        <div class="i-cover">
          <img :src="item.pic" alt="" class="img">
        </div>
        <div class="i-content">
          <div>
            <a href="#" class="i-title text-ellipsis-2">
              {{ item.title }}
            </a>
          </div>
          <div class="i-other flex-between-center mt10 fs12">
            <div class="i-time">
              <svg-icon icon-class="date"/>
              1个月前
            </div>
            <div class="i-view">
              <svg-icon icon-class="view"/>
              {{ item.views }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotArticle",
  data() {
    return {
      hotArticle: [
        {
          id: 1,
          title: "伏牛山的脚下一行碧",
          pic: "/image/20221122113809.jpg",
          createTime: "2022-01-22",
          views: 10,
        },
        {
          id: 2,
          title: "经过古城南阳的时候水面突然变得浩瀚，刹那间，风也浩荡，水也苍茫，那气势不象湖泊，竟像是大海。",
          pic: "/image/20221122113823.jpg",
          createTime: "2022-01-22",
          views: 10,
        },
        {
          id: 3,
          title: "许多年后，再次回到南阳时，我惊诧当初的异想天开忽然就变成了现实，比我当初想象的还要壮观",
          pic: "/image/20221122113911.jpg",
          createTime: "2022-01-22",
          views: 10,
        },
        {
          id: 4,
          title: "伏牛山的脚下，一行碧水迤逦而来",
          pic: "/image/20221122114247.jpg",
          createTime: "2022-01-22",
          views: 10,
        },
        {
          id: 5,
          title: "伏牛山的脚下，一行碧水迤逦而来",
          pic: "/image/20221122114228.jpg",
          createTime: "2022-01-22",
          views: 10,
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.hot-article {
  width: 100%;
  background: var(--main-bg-color);
  border-radius: var(--main-border-radius);
  box-shadow: var(--main-box-show);

  .hot-list {
    padding: 10px 15px;

    .hot-item {
      position: relative;
      padding: 5px 0;

      .i-cover {
        width: 93px;
        height: 65px;
        border-radius: 5px;
        overflow: hidden;
      }

      .i-content {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        min-width: 0;
        margin-left: 10px;

        .i-title {
          height: 2.8em;
          line-height: 1.4em;
          white-space: normal;
          font-size: 14px;
          color: #333;
        }

        .i-title:hover {
          color: #ff5473;
        }

        .i-other {
          color: #777;
        }
      }
    }
  }
}
</style>