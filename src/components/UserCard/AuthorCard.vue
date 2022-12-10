<template>
  <div class="author-card">
    <div class="author-bg">
      <img src="/image/20221122114159.jpg" alt="" class="bg-img">
    </div>
    <div class="text-center">
      <div class="author-avatar">
        <el-avatar :size="80"></el-avatar>
      </div>
      <div v-if="$store.state.login">
        <a href="#" class="mt10 nickname">apple</a>
        <p class="mt20 user-desc">这个人很懒,什么都没有写</p>
        <div class="author-count mt20">
          <el-tooltip effect="dark" content="共10篇文章" placement="top">
            <a href="#" class="medium-rect blue-bg-1 blue-color fs12">
              <i class="el-icon-chat-dot-round"></i>
              1000
            </a>
          </el-tooltip>
          <el-tooltip effect="dark" content="共10条评论" placement="top">
            <a href="#" class="medium-rect green-bg-1 green-color fs12" style="margin: 0 8px">
              <i class="el-icon-chat-dot-round"></i>
              2
            </a>
          </el-tooltip>
          <el-tooltip effect="dark" content="" placement="top">
            <a href="#" class="medium-rect red-bg-1 red-color fs12">
              <i class="el-icon-chat-dot-round"></i>
              3
            </a>
          </el-tooltip>
        </div>
        <div class="mt30">
          <a href="#" class="new-article btn" @click.prevent="pushArticle">发布文章</a>
          <a href="#" class="user-info btn">用户中心</a>
        </div>
      </div>
      <div v-else>
        <p class="mt20 login-title">HI 请登录</p>
        <a href="#" class="login-btn" @click.prevent="$emit('openLoginModel')">登录</a>
        <div class="separator mt20">
          社交账号登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorCard",
  props: {},
  data() {
    return {}
  },
  methods: {
    pushArticle() {
      this.$router.push("/WriteArticle")
    }
  }
}
</script>

<style lang="less" scoped>
.author-card {
  width: 100%;
  height: 400px;
  background: var(--main-bg-color);
  box-shadow: var(--main-box-show);
  border-radius: var(--main-border-radius);

  .author-bg {
    width: 100%;
    height: 140px;

    .bg-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: 5px 5px 0 0;
    }
  }

  .author-avatar {
    margin-top: -40px;
  }

  .login-title {
    font-size: var(--wp--preset--spacing--40);
    color: #777;
  }

  .login-btn {
    width: 100px;
    height: 34px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    line-height: 34px;
    color: #fff;
    display: inline-block;
    background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);
    margin-top: 20px;
  }

  .author-count {
    display: flex;
    justify-content: center;
  }

  .btn {
    display: inline-block;
    width: 84px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }

  .new-article {
    background: linear-gradient(135deg, #ff5e7f 30%, #ff967e 100%);
    margin-right: 8px;
  }

  .user-info {
    background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);
  }
}

</style>