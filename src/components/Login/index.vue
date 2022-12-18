<template>
  <el-dialog
      :visible.sync="loginVisible"
      width="400px"
      :before-close="handleClose"
  >
    <div class="tab-content">
      <div class="tab-header">
        <div class="title">
          <p v-if="showLogin">登录</p>
          <p v-else>注册</p>
        </div>
        <a href="#" class="go" @click.prevent="showLogin = !showLogin">
          <span v-if="showLogin">没有账号？立即注册</span>
          <span v-else>已有账号,立即登录</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
      <div class="login-box" v-if="showLogin">
        <el-form ref="login-box" :model="loginForm" class="mt10" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
                v-model="loginForm.username"
                placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="loginForm.password"
                placeholder="密码"
                show-password
            >
            </el-input>
          </el-form-item>
          <div class="flex-between-center">
            <el-checkbox v-model="checked">记住登录</el-checkbox>
            <a href="#" style="color: #777">找回密码</a>
          </div>
          <div class="option mt10">
            <a href="#" class="login-btn btn" v-if="showLogin">
              登录
            </a>
          </div>
        </el-form>
      </div>
      <div class="register-box" v-else></div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!this.validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginVisible: false,
      showLogin: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}]
      },
      checked: false,
    }
  },
  mounted() {

  },
  methods: {
    handleClose() {
      this.loginVisible = false
    },
    open(showLogin) {
      this.showLogin = showLogin
      this.loginVisible = true
    },
    validUsername(str) {
      const valid_map = ['admin', 'editor']
      return valid_map.indexOf(str.trim()) >= 0
    }
  }
}
</script>

<style lang="less" scoped>
.tab-content {
  .title {
    position: relative;
    font-size: 1.8em;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }

  .title:after {
    position: absolute;
    content: '';
    width: 40px;
    height: 3px;
    top: auto;
    left: 0;
    bottom: -1px;
    transition: .4s ease all;
    border-radius: 2px;
    background: var(--wp--preset--color--vivid-cyan-blue);
  }

  .title:hover:after {
    width: 60px;
    transition: .4s ease all;
  }

  .go {
    font-size: var(--wp--preset-font-size-small);
    color: #777;
    cursor: pointer;
  }

  .go:hover {
    color: red;
  }

  .option {
    width: 100%;
    text-align: center;

    .btn {
      display: inline-block;
      width: 100%;
      height: 34px;
      line-height: 34px;
      border-radius: 17px;
      text-align: center;
      color: #fff;
      font-weight: 500;
    }

    .login-btn {
      background: linear-gradient(135deg, #59c3fb 10%, #268df7 100%);
    }

    .register-btn {
      background: linear-gradient(135deg, #60e464 10%, #5cb85b 100%);
    }
  }
}

/deep/ .el-checkbox__label {
  padding-left: 2px;
}
</style>
