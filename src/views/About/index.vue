<template>
  <div class="about">
    <div class="about-container">
      <h2>关于我们</h2>
      <p class="about-intro">
广州众玩网络有限公司成立于2015年，作为一家专业的网络游戏自主研发公司，公司核心研发人员均具备大型网络游戏项目开发经验，对网络游戏的设计研发具备深刻的了解与独到的见解。公司下设策划部、研发部、职能部、美术部等部门，在职员工有80多人并在不断壮大队伍，正处于快速发展上升期，欢迎各路人才的加入。秉承“一切以用户体验为核心”的经营理念，以打造精品游戏为目标，致力于不断优化用户体验，持续提高自身核心技术研发能力，为用户提供更优质的产品。公司目前雄踞在广州繁华的天河北商圈，交通快捷便利。如果你是个有梦想并且肯为之奋斗的人，我们不仅能给你提供的是一个工作机会，更能为你提供一个实现梦想的平台！
      </p>
      <h2>联系我们</h2>
      <div class="about-map">
        <img src="../../assets/zw.png" alt="">
      </div>
      <div class="about-address">
        <p>联系地址：广州市天河区龙怡路117号银汇大厦18楼1805室</p>
        <p>简历投递邮箱：hr@gzzhongwan.net</p>
        <p>联系电话：020-37887202 / 18022890303</p>
        <p>乘车温馨提示：</p>
        <p>地铁：广州地铁3号线华师站E出口</p>
        <p>公交：师大后门站（B10、B17、B11、813、298、775、41）</p>
        <p>五山路口站(B10、B11、B17、B14、20、32、78a、130、191）</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about{
  padding-top:40px;
  padding-bottom: 40px;
  .about-container{
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
    .about-intro{
      text-indent: 2em;
      font-size: 14px;
      line-height: 20px;
      margin: 10px auto;
    }
    .about-map{
      margin: 10px auto;
      img{
        display: block;
        width: 100%;
      }
    }
    .about-address{
      font-size: 14px;
      p{
        line-height: 20px;
      }
    }
  }
}
</style>
