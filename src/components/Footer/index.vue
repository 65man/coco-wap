<template>

    <tabbar>
      <tabbar-item link='/' selected >
        <icon slot="icon" name="index" scale="2"></icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/game">
        <icon slot="icon" name="game" scale="3"></icon>
        <span slot="label">游戏</span>
      </tabbar-item>
      <tabbar-item  link="/gift">
        <icon slot="icon" name="gift" scale="2.5"></icon>
        <span slot="label">礼包</span>
      </tabbar-item>
      <tabbar-item link="/recruit">
        <icon slot="icon" name="recruit" scale="2.5"></icon>
        <span slot="label">招聘</span>
      </tabbar-item>
      <tabbar-item  link="/about">
        <icon slot="icon" name="about" scale="2"></icon>
        <span slot="label">关于</span>
      </tabbar-item>
    </tabbar>

</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style lang="scss">
.footer{
  // position: fixed;
  // left: 0;
  // bottom: 0;
  // height: 53px;
}
.weui-tabbar{
  position: fixed !important;
}
</style>

