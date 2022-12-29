<template>
  <div id="foot-wave-line">
    <div class="foot-content">
      <div class="flex-between-center">
        <div class="foot-left">
          <div class="my-fan"></div>
          <div class="my-face">
            走自己的路,让别人去说吧
          </div>
        </div>
        <div class="foot-right flex-between-center">
          <div class="random-article">
            <el-tooltip effect="dark" v-for="(item,index) in randomList" :key="item.id" v-if="index===randomNum"
                        :content="item.title" placement="top">
              <a href="#" class="r-title">
                <i class="el-icon-link"></i>
                {{ item.title }}
              </a>
            </el-tooltip>
            <span class="r-wz">随机推荐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootWaveLine",
  data() {
    return {
      randomNum: 1,
      timer: null,
      randomList: [
        {
          id: 1,
          title: "一个阳光温煦、微风徐徐的下午",
        },
        {
          id: 2,
          title: "人最大的清醒就是认识到自己的局限性",
        },
        {
          id: 3,
          title: "国外有句名谚：“创业就是命运跟我们开着一连串玩笑",
        },
        {
          id: 4,
          title: "有志者,事竟成",
        }
      ]
    }
  },
  mounted() {
    this.timer = setInterval(this.genRandom, 2000)
  },
  methods: {
    genRandom() {
      let number = Math.floor(Math.random() * this.randomList.length);
      while (number === this.randomNum) {
        number = Math.floor(Math.random() * this.randomList.length)
      }
      this.randomNum = number
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
#foot-wave-line {
  .foot-content {
    width: 100%;
    height: 50px;
    line-height: 50px;
    bottom: 0;
    position: fixed;
    z-index: 1600;
    background: var(--main-bg-color);
    box-shadow: 0 -2px 10px rgb(0 0 0 / 10%);

    .foot-left {

      .my-face {
        animation: my-face 5s infinite ease-in-out;
        font-size: 13px;
        color: #797979;
        margin-left: 20px;
      }
    }

    .foot-right {
      margin-right: 20px;

      .random-article {
        .r-title {
          font-size: 15px;
        }

        .r-title:hover {
          color: #F56C6C;
        }

        .r-wz {
          margin-left: 3px;
          border: 1px solid #bbbbbb;
          height: auto;
          color: #bbbbbb;
          font-size: 10px;
          border-radius: 2px;
          padding: 0 2px;
        }
      }
    }
  }
}

@keyframes my-face {
  2%, 24%, 80% {
    -webkit-transform: translate(0, 1.5px) rotate(1.5deg);
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4%, 68%, 98% {
    -webkit-transform: translate(0, -1.5px) rotate(-.5deg);
    transform: translate(0, -1.5px) rotate(-.5deg);
  }
  38%, 6% {
    -webkit-transform: translate(0, 1.5px) rotate(-1.5deg);
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8%, 86% {
    -webkit-transform: translate(0, -1.5px) rotate(-1.5deg);
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10%, 72% {
    -webkit-transform: translate(0, 2.5px) rotate(1.5deg);
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12%, 64%, 78%, 96% {
    -webkit-transform: translate(0, -0.5px) rotate(1.5deg);
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14%, 54% {
    -webkit-transform: translate(0, -1.5px) rotate(1.5deg);
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    -webkit-transform: translate(0, -0.5px) rotate(-1.5deg);
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18%, 22% {
    -webkit-transform: translate(0, 0.5px) rotate(-1.5deg);
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20%, 36%, 46% {
    -webkit-transform: translate(0, -1.5px) rotate(2.5deg);
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  26%, 50% {
    -webkit-transform: translate(0, 0.5px) rotate(.5deg);
    transform: translate(0, 0.5px) rotate(.5deg);
  }
  28% {
    -webkit-transform: translate(0, 0.5px) rotate(1.5deg);
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30%, 40%, 62%, 76%, 88% {
    -webkit-transform: translate(0, -0.5px) rotate(2.5deg);
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32%, 34%, 66% {
    -webkit-transform: translate(0, 1.5px) rotate(-.5deg);
    transform: translate(0, 1.5px) rotate(-.5deg);
  }
  42% {
    -webkit-transform: translate(0, 2.5px) rotate(-1.5deg);
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44%, 70% {
    -webkit-transform: translate(0, 1.5px) rotate(.5deg);
    transform: translate(0, 1.5px) rotate(.5deg);
  }
  48%, 74%, 82% {
    -webkit-transform: translate(0, -0.5px) rotate(.5deg);
    transform: translate(0, -0.5px) rotate(.5deg);
  }
  52%, 56%, 60% {
    -webkit-transform: translate(0, 2.5px) rotate(2.5deg);
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    -webkit-transform: translate(0, 0.5px) rotate(2.5deg);
    transform: translate(0, 0.5px) rotate(2.5deg);
  }

  84% {
    -webkit-transform: translate(0, 1.5px) rotate(2.5deg);
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  90% {
    -webkit-transform: translate(0, 2.5px) rotate(-.5deg);
    transform: translate(0, 2.5px) rotate(-.5deg);
  }
  92% {
    -webkit-transform: translate(0, 0.5px) rotate(-.5deg);
    transform: translate(0, 0.5px) rotate(-.5deg);
  }
  94% {
    -webkit-transform: translate(0, 2.5px) rotate(.5deg);
    transform: translate(0, 2.5px) rotate(.5deg);
  }
  0%, 100% {
    -webkit-transform: translate(0, 0) rotate(0);
    transform: translate(0, 0) rotate(0);
  }
}
</style>