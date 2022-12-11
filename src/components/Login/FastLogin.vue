<template>
  <div class="fast-login">
    <p class="separator">快速登录</p>
    <div class="mt10">
      <el-tooltip effect="dark" content="QQ登录" placement="top">
        <svg-icon icon-class="qq" class-name="small-btn"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="微信登录" placement="top">
        <svg-icon icon-class="wechat" class-name="small-btn ml10 mr10"/>
      </el-tooltip>
      <el-tooltip effect="dark" content="GitHub" placement="top">
        <svg-icon icon-class="github" class-name="small-btn"/>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "FastLogin"
}
</script>

<style scoped>
.fast-login {
  text-align: center;
}
</style>