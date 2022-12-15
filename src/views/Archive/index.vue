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
      <div class="archive-label archive mt20">
        <p class="label-title archive-title">标签</p>
        <ul class="label-list">
          <li v-for="(item,index) in labels" :key="index" class="label-item text-ellipsis"
              :style="{background:item.background}">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="archive-group archive mt20">
        <p class="time-title archive-title">时间轴</p>
        <ul class="archive-list">
          <li class="archive-item" v-for="(item,i) in timelines" :key="i" @click="setActiveIdx(i)">
            <div class="archive-wrapper">
              <div class="time-in flex-between-center">
                {{ item.timestamp }}
                <i class="el-icon-arrow-down" v-if="isActive(i)"></i>
                <i class="el-icon-arrow-right" v-else></i>
              </div>
              <ol class="time-body" v-if="isActive(i)">
                <li class="time-item" v-for="(sub,index) in item.collapse" :key="index">
                  <span>{{ sub.date }}:</span>
                  <span>{{ sub.title }}</span>
                </li>
              </ol>
            </div>
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
      labels: [],
      timelines: [],
      activeIdx: [0],
    }
  },
  mounted() {
    this.getLabels()
    this.getTimelines()
  },
  methods: {
    async getLabels() {
      const res = await getLabelList();
      this.labels = res.data
      this.labels.forEach((element) => {
        element.background = this.randomColor()
      })
    },
    async getTimelines() {
      this.timelines = [
        {
          timestamp: "2018年4月",
          collapse: [
            {
              date: "4-12",
              title: "通过界面样式和交互动效让用户可以清晰的感知自己的操作"
            },
            {
              date: "4-13",
              title: "操作后，通过页面元素的变化清晰地展现当前状态"
            }
          ]
        },
        {
          timestamp: "2018年5月",
          collapse: [
            {
              date: "5-20",
              title: "通过界面样式和交互动效让用户可以清晰的感知自己的操作"
            },
            {
              date: "5-21",
              title: "操作后，通过页面元素的变化清晰地展现当前状态"
            },
            {
              date: "5-22",
              title: "操作后，通过页面元素的变化清晰地展现当前状态"
            },
            {
              date: "5-23",
              title: "操作后，通过页面元素的变化清晰地展现当前状态"
            }
          ]
        },
        {
          timestamp: "2018年6月",
          collapse: [
            {
              date: "6-21",
              title: "操作后，通过页面元素的变化清晰地展现当前状态"
            }
          ]
        }
      ]
    },
    setActiveIdx(index) {
      if (this.isActive(index)) {
        this.activeIdx.splice(this.activeIdx.indexOf(index), 1)
      } else {
        this.activeIdx.push(index)
      }
    },
    isActive(index) {
      return this.activeIdx.indexOf(index) > -1
    },
    randomColor() {
      let color = "rgba("
      for (let i = 0; i < 3; i++) {
        color += Math.random() * 256 + ","
      }
      let alpha = (Math.random() * 10 / 10).toFixed(1)
      alpha = alpha === "0.0" ? "0.8" : alpha
      color += alpha + ")"
      return color
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

  .archive {
    background: var(--main-bg-color);
    box-shadow: var(--main-box-show);
    border-radius: var(--main-border-radius);
    position: relative;
  }

  .archive-title {
    position: absolute;
    top: 15px;
    left: -10px;
    color: #fff;
    -webkit-box-shadow: 2px 5px 10px rgb(49 58 70 / 15%);
    box-shadow: 2px 5px 10px rgb(49 58 70 / 15%);
    height: 30px;
    line-height: 30px;
    padding: 0 12px;
    border-radius: 2px 2px 2px 0;
    user-select: none;
  }

  .archive-title:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -10px;
    border-style: solid;
    border-width: 10px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .archive-label {
    .label-title {
      background: var(--brand-color);
    }

    .label-title:before {
      border-color: var(--brand-color) transparent transparent;
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

  .archive-group {
    .time-title {
      background: var(--wp--preset--color--luminous-vivid-orange);
    }

    .time-title:before {
      border-color: var(--wp--preset--color--luminous-vivid-orange) transparent transparent;
    }

    .archive-list {
      padding: 60px 15px 15px 15px;

      .archive-item {
        position: relative;
        cursor: pointer;
        margin-bottom: 10px;

        .archive-wrapper {
          padding-left: 30px;
          overflow: hidden;
          transition: height .25s ease;

          .time-in {
            position: relative;
            color: #fb6c28;
            cursor: pointer;
            background: #f2f6fc;
            height: 40px;
            line-height: 40px;
            border-radius: 4px;
            padding: 0 5px;
            font-size: 14px;
          }

          .time-in:before {
            position: absolute;
            content: "";
            top: 50%;
            transform: translateY(-50%);
            left: -8px;
            width: 0;
            height: 0;
            border-right: 8px solid #f2f6fc;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
          }

          .time-body {
            padding: 15px 5px 0;
            transition: opacity .25s;

            .time-item {
              margin-bottom: 15px;
              max-width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #606266;
              font-size: 14px;
            }

            .time-item:hover {
              color: var(--wp--preset--color--vivid-purple);
            }
          }
        }
      }

      .archive-item:after {
        position: absolute;
        content: "";
        left: 6px;
        top: 25px;
        width: 1px;
        height: 100%;
        background: #ebeef5;
      }

      .archive-item:last-child:after {
        height: 0;
      }

      .archive-item:before {
        position: absolute;
        content: "";
        top: 14px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #ebeef5;
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
