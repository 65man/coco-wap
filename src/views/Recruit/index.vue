<template>
  <div class="recruit">
    <div class="recruit-container">
      <div class="xz" @click="rpositions(0)"></div>
      <div class="sz" @click="rpositions(1)"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    rpositions (val) {
      if (val === 0) {
        console.log(1)
        // this.$router.push({path: '/recruit/rpositions'})
        this.$router.push({path: '/rpositions', query: {recruitType: 'sz'}})
      } else {
        this.$router.push({path: '/rpositions', query: {recruitType: 'xz'}})
      }
    }
  }
}
</script>

<style lang="scss">
.recruit{
  padding-top:40px;
  .recruit-container{
    width: 96%;
    margin: 10px 2%;
    overflow: hidden;
    height: 640px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    div{
      border: 1px solid #000;
      // height: 240px;
      height: 233px;
      border-radius: 20px;
    }
    .xz{
      background: url(../../assets/xz.jpg);
      background-size: 100% 100%;
    }
    .sz{
      margin-top: 10px;
      background: url(../../assets/sz.jpg);
      background-size: 100% 100%;
    }
  }
}
</style>
