<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.layout{
  font-family: SimHei;
  background-color: #f5f5f5;
}
</style>

