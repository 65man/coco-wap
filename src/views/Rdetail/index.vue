<template>
  <div class="rdetail">
    <div class="rdetail-container">
      <h2>Erlang服务端开发工程师</h2>

    </div>
  </div>
</template>

<script>
const rdetail = {

}

export default {
  mounted () {
    console.log(this.$route.query.id)
  }
}
</script>

<style lang="scss">
.rdetail{
  padding-top: 40px;
  padding-bottom: 50px;
  .rdetail-container{
    width: 96%;
    margin: 10px 2%;
    overflow: hidden;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    h2{
      height: 30px;
      line-height: 30px;
      padding-bottom: 5px;
      border-bottom: 1px solid;
      font-weight: bold;
    }
  }
}
</style>
