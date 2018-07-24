<template>
  <div class="footer">
    <tabbar>
      <tabbar-item link='/' selected >
        <icon slot="icon" name="index" scale="2"></icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/game">
        <icon slot="icon" name="game" scale="2"></icon>
        <span slot="label">游戏</span>
      </tabbar-item>
      <tabbar-item  link="/about">
        <icon slot="icon" name="about" scale="2"></icon>
        <span slot="label">关于</span>
      </tabbar-item>
      <tabbar-item link="/recruit">
        <icon slot="icon" name="recruit" scale="2"></icon>
        <span slot="label">招聘</span>
      </tabbar-item>
    </tabbar>
  </div>
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

<style>

</style>
