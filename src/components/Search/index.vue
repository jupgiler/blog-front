<template>
  <el-drawer
      :visible.sync="searchVisible"
      :with-header="false"
      direction="ttb"
      :modal="false"
      :before-close="handleClose"
  >
    <div class="search-frame">
      <el-autocomplete
          class="search-text"
          v-model="searchVal"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          :withHeader="false"
          @select="handleAutoSelect"
      >
        <template slot-scope="{ item }">
          <div class="flex-between-center">
            <p class="text-ellipsis max-width-80">{{ item.title }}</p>
            <p>10人搜索过</p>
          </div>
        </template>
      </el-autocomplete>
      <div class="hot-search mt10" v-if="hotList.length > 0">
        <p class="muted">热门搜索</p>
        <div class="tags mt10">
          <el-tag
              class="mr10"
              type="info"
              size="small"
              v-for="(name,index) in hotList" :key="index"
          >
            {{ name }}
          </el-tag>
        </div>
      </div>
      <div class="history-search mt10" v-if="historyList.length > 0">
        <div class="flex-between-center">
          <p class="muted">历史搜索</p>
          <a href="#" class="muted" @click.prevent="clearHistoryList"><i class="el-icon-delete"></i></a>
        </div>
        <div class="tags mt10">
          <el-tag
              class="mr10"
              type="info"
              size="small"
              v-for="(name,index) in historyList" :key="index"
          >
            {{ name }}
          </el-tag>
        </div>
      </div>
      <div class="recommend-article mt10" v-if="recommendVisible">
        <p class="muted">推荐文章</p>
        <Recommend class="mt10"></Recommend>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import Recommend from "@/components/Carousel/Recommend";

export default {
  name: "Search",
  components: {Recommend},
  props: {
    searchVisible: {
      type: Boolean,
      default: false
    },
    recommendVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      searchVal: "", // 搜索的值
      hotList: ["测试一", "测试二", "测试三"], // 热门搜索列表
      historyList: [], // 历史搜索列表
      proposalList: [],  // 搜索建议列表,后台返回
    }
  },
  mounted() {
    // 历史列表有值,直接赋值
    if (JSON.parse(localStorage.getItem("historyList"))) {
      this.historyList = JSON.parse(localStorage.getItem("historyList"));
    }
  },
  methods: {
    // 获取搜索列表,根据输入的值调用后台接口查询,cb将搜索到的结果回调
    querySearch(queryStr, cb) {

    },
    // 搜索框选中之后,将选中的值赋值给searchVal
    handleAutoSelect(item) {
      this.searchVal = item.title
    },
    // 去搜索
    goSearch() {
      if (this.searchVal === "") {
        return
      }
      // 有搜索记录,删除之前的久记录,将新的记录放在第一位
      if (this.historyList.includes(this.searchVal)) {
        let index = this.historyList.indexOf(this.inputValue)
        this.historyList.splice(index, 1)
      }
      this.historyList.unshift(this.searchVal)
      localStorage.setItem("historyList", JSON.stringify(this.historyList))
    },
    // 清理历史记录
    clearHistoryList() {
      localStorage.removeItem('historyList');
      this.historyList = [];
    },
    // 调用父组件的closeSearchDrawer方法,将searchDrawer置为false
    handleClose() {
      this.$emit("closeSearchDrawer")
    }
  }
}
</script>

<style lang="less" scoped>
.search-frame {
  max-width: 600px;
  margin: 0 auto;

  .search-text {
    width: 100%;
    margin-top: 40px;
  }
}

.muted {
  color: var(--muted-color);
  font-size: 14px;
}
</style>