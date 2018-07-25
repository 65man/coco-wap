<template>
  <div class="header">
    <router-link tag="a" to="/" class="logo">
      <img src="../../assets/logo(1).png" alt="">
      <span>可可豆</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  // background: url(../../assets/logo.png) no-repeat;
  background: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 8px #e1e1e1;
  background-size: contain;
  visibility:visible;
  >.logo{
    width: 40%;
    height: 31px;
    max-width: 120px;
    float: left;
    margin-top: 5px;
    margin-left: 5%;
    >img{
      width: 25%;
      height: 30px;
      display: inline-block;
    }
    >span{
      vertical-align: super;
      line-height: 31px;
      font-size: 14px;
    }
  }
}
</style>

