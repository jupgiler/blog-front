<template>
  <div id="archive-container">
    <Nav></Nav>
    <div class="container wrapper mt20">
      <div class="panel-group">
        <div class="panel-item flex-between-center">
          <svg-icon icon-class="archive-article" class-name="panel-icon"/>
          <div class="flex-column-center archive-count">
            <p class="panel-text">文章数</p>
            <span class="panel-num">11</span>
          </div>
        </div>
        <div class="panel-item flex-between-center">
          <svg-icon icon-class="archive-category" class-name="panel-icon"/>
          <div class="flex-column-center archive-count">
            <p class="panel-text">分类数</p>
            <span class="panel-num">11</span>
          </div>
        </div>
        <div class="panel-item flex-between-center">
          <svg-icon icon-class="archive-label" class-name="panel-icon"/>
          <div class="flex-column-center archive-count">
            <p class="panel-text">标签数</p>
            <span class="panel-num">11</span>
          </div>
        </div>
        <div class="panel-item flex-between-center">
          <svg-icon icon-class="archive-like" class-name="panel-icon"/>
          <div class="flex-column-center archive-count">
            <p class="panel-text">点赞数</p>
            <span class="panel-num">11</span>
          </div>
        </div>
      </div>
      <div class="archive-label mt20">
        <p class="label-title">标签</p>
        <ul class="label-list">
          <li v-for="(item,index) in labels" :key="index" class="label-item text-ellipsis">
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import {getLabelList} from "@/api/label";

export default {
  name: "Archive",
  components: {Nav},
  data() {
    return {
      labels: []
    }
  },
  mounted() {
    this.getLabels()
  },
  methods: {
    async getLabels() {
      const res = await getLabelList();
      this.labels = res.data
    }
  }
}
</script>

<style lang="less" scoped>
#archive-container {
  .panel-group {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px 20px;

    .panel-item {
      padding: 20px;
      background: var(--main-bg-color);
      box-shadow: var(--main-box-show);
      cursor: pointer;

      .panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, .45);
        font-size: 16px;
        margin-bottom: 5px;
      }

      .panel-num {
        font-size: 20px;
      }
    }

    .panel-item:hover:nth-child(1) {
      .panel-icon {
        background: var(--wp--preset--color--light-green-cyan);
      }
    }

    .panel-item:hover:nth-child(2) {
      .panel-icon {
        background: var(--wp--preset--color--pale-pink);
      }
    }

    .panel-item:hover:nth-child(3) {
      .panel-icon {
        background: var(--wp--preset--color--luminous-vivid-amber);
      }
    }

    .panel-item:hover:nth-child(4) {
      .panel-icon {
        background: var(--wp--preset--color--pale-cyan-blue);
      }
    }

    .panel-icon {
      width: 60px;
      height: 60px;
      padding: 10px;
      border-radius: var(--main-border-radius);
    }
  }

  .archive-label {
    background: var(--main-bg-color);
    box-shadow: var(--main-box-show);
    border-radius: var(--main-border-radius);
    position: relative;

    .label-title {
      position: absolute;
      top: 15px;
      left: -10px;
      background: var(--brand-color);
      color: #fff;
      font-weight: 500;
      -webkit-box-shadow: 2px 5px 10px rgb(49 58 70 / 15%);
      box-shadow: 2px 5px 10px rgb(49 58 70 / 15%);
      height: 30px;
      line-height: 30px;
      padding: 0 12px;
      border-radius: 2px 2px 2px 0;
      user-select: none;
    }

    .label-title:before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: -10px;
      border-style: solid;
      border-width: 10px;
      border-color: var(--brand-color) transparent transparent;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .label-list {
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      padding: 60px 15px 15px 15px;

      .label-item {
        user-select: none;
        background: #f2f6fc;
        height: 28px;
        line-height: 28px;
        border-radius: 14px;
        cursor: pointer;
        color: #606266;
        font-size: 12px;
        padding: 0 15px;
        text-align: center;
      }
    }
  }
}

@media screen and(max-width: 960px) {
  #archive-container {
    .panel-group {
      grid-template-columns: auto auto;
    }
  }
}
</style>