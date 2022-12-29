<template>
  <div class="tag-cloud">
    <span class="card-title">
      <svg-icon icon-class="tag" class-name="mr05"/>
      标签云
    </span>
    <div class="tag-list">
      <word-cloud
          :data="words"
          nameKey="name"
          valueKey="value"
          :color="myColors"
          :showTooltip="false"
          :fontSize="[10,30]"
          :wordPadding="3"
          :rotate="{from: 0, to: 0, numOfOrientation: 5 }"
          spiral='rectangular'
          :wordClick="wordClickHandler">
      </word-cloud>
    </div>
  </div>
</template>

<script>
import {getLabelList} from "@/api/label";
import wordCloud from 'vue-wordcloud'

export default {
  name: "TagCloud",
  components: {wordCloud},
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      words: []
    }
  },
  mounted() {
    this.getLabels()
  },
  methods: {
    async getLabels() {
      const res = await getLabelList();
      this.words = res.data
    },
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
}
</script>

<style lang="less" scoped>
.tag-cloud {
  width: 100%;
  background: var(--main-bg-color);
  border-radius: var(--main-border-radius);
  box-shadow: var(--main-box-show);
}
</style>