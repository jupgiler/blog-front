<template>
  <div id="home-container">
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Home",
  components: {Nav},
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
#home-container {
  width: 100%;
  min-height: 100vh;
  background-image: -webkit-linear-gradient(top, transparent 39px, #efefef 40px),
  -webkit-linear-gradient(left, transparent 39px, #efefef 40px);
  background-size: 40px 40px;
}
</style>