<template>
  <div id="user-card">
    <div v-if="$store.state.login">
      <div class="flex">
        <el-avatar></el-avatar>
        <div class="ml10">
          <a href="#" class="nickname">apple</a>
          <p class="user-desc">这个人很懒,什么都没有写</p>
        </div>
      </div>
      <div class="flex evenly center mt20">
        <el-tooltip effect="dark" content="共10篇文章" placement="top">
          <a href="#" class="medium-rect blue-bg-1 blue-color fs12">
            <svg-icon icon-class="article"/>
            1
          </a>
        </el-tooltip>
        <el-tooltip effect="dark" content="共10条评论" placement="top">
          <a href="#" class="medium-rect green-bg-1 green-color fs12">
            <svg-icon icon-class="comment"/>
            2
          </a>
        </el-tooltip>
        <el-tooltip effect="dark" content="人气值" placement="top">
          <a href="#" class="medium-rect red-bg-1 red-color fs12">
            <svg-icon icon-class="hit"/>
            3
          </a>
        </el-tooltip>
      </div>
      <div class="flex around mt20">
        <a href="#" class="flex-column-center blue-color">
          <span class="small-circle blue-bg-1"> <svg-icon icon-class="user"/></span>
          <span class="mt05 fs12">用户中心</span>
        </a>
        <a href="#" class="flex-column-center green-color">
          <span class="small-circle green-bg-1"> <svg-icon icon-class="edit"/></span>
          <span class="mt05 fs12">发布文章</span>
        </a>
        <a href="#" class="flex-column-center red-color">
          <span class="small-circle red-bg-1"> <svg-icon icon-class="return"/></span>
          <span class="mt05 fs12">退出登录</span>
        </a>
      </div>
    </div>
    <div v-else>
      <div class="flex around">
        <a href="#" class="flex-column-center blue-color" @click.prevent="openLoginDialog">
          <span class="small-circle blue-bg-1"> <svg-icon icon-class="login"/></span>
          <span class="mt05 fs12">用户登录</span>
        </a>
        <a href="#" class="flex-column-center green-color" @click.prevent="openRegisterDialog">
          <span class="small-circle green-bg-1"> <svg-icon icon-class="register"/></span>
          <span class="mt05 fs12">用户注册</span>
        </a>
        <a href="#" class="flex-column-center red-color">
          <span class="small-circle red-bg-1"> <svg-icon icon-class="password"/></span>
          <span class="mt05 fs12">找回密码</span>
        </a>
      </div>
      <FastLogin class="mt20"></FastLogin>
    </div>
  </div>
</template>

<script>
import FastLogin from "@/components/Login/FastLogin";

export default {
  name: "UserCard",
  components: {FastLogin},
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>