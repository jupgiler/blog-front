<template>
  <div class="tag-cloud">
    <span class="card-title">
      <svg-icon icon-class="tag" class-name="mr05"/>
      标签云
    </span>
    <div class="tag-all">
      <a v-for='(tag,index) in tags'>
        {{ tag.name }}
      </a>
    </div>
  </div>
</template>

<script>
import {getLabelList} from "@/api/label";

export default {
  name: "TagCloud",
  data() {
    return {
      tags: [],
    }
  },
  mounted() {
    this.getLabels()
  },
  methods: {
    rotateX(angleX) {
      let cos = Math.cos(angleX);
      let sin = Math.sin(angleX);
      for (let tag of this.tags) {
        let y1 = (tag.y - this.cy) * cos - tag.z * sin + this.cy;
        let z1 = tag.z * cos + (tag.y - this.cy) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY) {
      let cos = Math.cos(angleY);
      let sin = Math.sin(angleY);
      for (let tag of this.tags) {
        let x1 = (tag.x - this.cx) * cos - tag.z * sin + this.cx;
        let z1 = tag.z * cos + (tag.x - this.cx) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) {//响应鼠标移动
      let x = event.clientX - this.cx;
      let y = event.clientY - this.cy;
      this.speedX = x * 0.0001 > 0 ? Math.min(this.radius * 0.00002, x * 0.0001) : Math.max(-this.radius * 0.00002, x * 0.0001);
      this.speedY = y * 0.0001 > 0 ? Math.min(this.radius * 0.00002, y * 0.0001) : Math.max(-this.radius * 0.00002, y * 0.0001);
    },
    changeColors() { //随机变色
      for (let i = 0; i < this.tags.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        this.colors[i] = "rgb(" + r + ',' + g + ',' + b + ")";
      }
    },
    async getLabels() {
      const res = await getLabelList();
      this.tags = res.data
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

  .tag-all {
    position: relative;
  }
}
</style>