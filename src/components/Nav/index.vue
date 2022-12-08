<template>
  <div id="nav-container">
    <div class="horizontal">
      <div class="wrapper container flex-between-center">
        <div class="nav-switch">
          <a href="#" @click.prevent="navVisible= !navVisible">
            <svg-icon icon-class="s-fold"></svg-icon>
          </a>
        </div>
        <div class="nav-tabs">
          <a class="tab-logo" href="#">logo</a>
          <a href="#"
             v-for="(tab,index) in menus" :key="index"
             @click.prevent="handleCommand(tab)"
             class="tab-menu">
            <svg-icon :icon-class="tab.icon"></svg-icon>
            {{ tab.name }}
          </a>
        </div>
        <div class="nav-btn flex center">
          <el-popover
              class="user-btn"
              placement="bottom"
              width="250"
              trigger="hover">
            <UserCard></UserCard>
            <a slot="reference">
              <svg-icon icon-class="female"></svg-icon>
            </a>
          </el-popover>
          <a href="#" class="search-btn ml20" @click.prevent="searchVisible=true">
            <svg-icon icon-class="search"></svg-icon>
          </a>
          <el-popover
              class="bell-btn ml20"
              placement="bottom"
              width="100"
              trigger="hover">
            <a slot="reference">
              <svg-icon icon-class="notice"></svg-icon>
            </a>
          </el-popover>
        </div>
      </div>
    </div>
    <!-- 竖向导航 -->
    <el-drawer
        :visible.sync="navVisible"
        :with-header="false"
        direction="ltr"
        :modal="false"
        :size="300"
    >
      <ul class="tab-list">
        <li v-for="(tab,index) in menus" :key="index"
            @click.prevent="handleCommand(tab)"
            class="tab-item"
        >
          <a href="#">
            <svg-icon :icon-class="tab.icon"></svg-icon>
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>

import UserCard from "@/components/UserCard";

export default {
  name: "Nav",
  components: {UserCard},
  data() {
    return {
      activeName: "Home",
      searchVisible: false,
      navVisible: false,
      loginVisible: false,
      menus: [
        {
          name: "首页",
          path: "Home",
          icon: "home"
        },
        {
          name: "归档",
          path: "Archive",
          icon: "archive"
        },
        {
          name: "友链",
          path: "",
          icon: "link"
        },
        {
          name: "留言",
          path: "",
          icon: "message"
        },
        {
          name: "关于",
          path: "",
          icon: "about"
        }
      ]
    }
  },
  mounted() {
    this.activeName = this.$route.name
  },
  methods: {
    handleCommand(tab) {
      let route = this.$router.resolve({
        name: tab.path
      })
      let target = "_blank"
      if (this.activeName === this.$route.name) {
        target = "_self"
      }
      this.activeName = this.$route.name
      window.open(route.href, target)
    },
    // 搜索子组件关闭的回调
    closeSearchDrawer() {
      this.searchVisible = false
    },
    // 打开登录弹窗
    openLoginModel() {
      this.loginVisible = true
    },
    // 关闭登录弹窗
    closeLoginModel() {
      this.loginVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
#nav-container {
  .horizontal {
    width: 100%;
    background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
    position: fixed;
    top: 0;
    z-index: 1600;
    height: 60px;
    line-height: 60px;
    opacity: 0.9;

    .nav-switch {
      display: none;
    }

    .nav-tabs {
      .tab-logo {
        font-size: 0;
        display: inline-block;
        width: 70px;
        height: 30px;
        background: url("../../assets/logo.png") no-repeat;
        background-size: 70% 100%;
        vertical-align: middle;
        position: relative;
        margin-right: 15px;
      }

      .tab-logo:after {
        position: absolute;
        content: "";
        width: 1px;
        height: 20px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #999;
      }

      .tab-menu {
        margin-right: 15px;
        font-size: 15px;
        color: var(--main-color);
        position: relative;
        padding: 0 5px;
      }
    }
  }

  .tab-list {
    margin-top: 20px;

    .tab-item {
      padding: 10px 40px;
    }
  }


  /deep/ .el-drawer__wrapper {
    top: 59px;

    .el-drawer {
      min-height: 450px;
    }
  }
}

@media screen and (max-width: 960px) {
  #nav-container {
    .horizontal {
      .nav-switch {
        display: inline-block;
      }

      .nav-tabs {
        .tab-logo {
          width: 40px;
          background-size: 100% 100%;
        }

        .tab-logo:after {
          width: 0;
        }

        .tab-menu {
          display: none;
        }
      }

      .nav-btn {
        .user-btn, .bell-btn {
          display: none;
        }
      }
    }
  }
}
</style>