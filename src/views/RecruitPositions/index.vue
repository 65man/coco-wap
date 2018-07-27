<template>
  <div class="rpositions">
    <div class="rpositions-container">
      <div class="position-bar">
        <button @click="selectType(index)" :class="{active:active == index}" v-for="(item,index) in navList" :key="index">{{item.name}}</button>
      </div>
      <div class="position-table">
        <table class="position-table" cellpadding="0" cellspacing="0" border="0">
          <thead>
              <tr>
                <th class="th1">招聘职位</th>
                <th class="th2">岗位类别</th>
                <th class="th3">酬薪待遇</th>
              </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(item,index) in serverList" :key="index">
              <td><span class="ser-tit">{{item.serverTitle}}</span></td>
              <td>{{item.serverTime}}</td>
              <td><a class="iconfont lb" href="#" @click="showDialog({dialogType:'gift',ios:item.iosUrl,and:item.androidUrl})">&#xe678;</a></td>
              <td><a class="iconfont xz" href="#" @click="showDialog({dialogType:'downGame'})">&#xe6ad;</a></td>
            </tr> -->

            <tr @click="toDetail(item.id)" v-for="(item,index) in selectData" :key="index">
              <td class="th1">{{item.position}}</td>
              <td class="th2">{{item.category}}</td>
              <td class="th3">{{item.pay}}</td>
            </tr>
            <!-- <div v-if="item.length == 0"  v-for="(item,index) in selectData" :key="index">暂无</div> -->

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const navList = [
  {name: '全部'},
  {name: '技术类'},
  {name: '策划类'},
  {name: '美术类'},
  {name: '职能类'}
]
const szOpations = {
  technology: [
    {position: 'Erlang服务端开发工程师', category: '技术类', pay: '面议', id: '000'},
    {position: 'C++服务端开发工程师', category: '技术类', pay: '面议', id: '001'},
    {position: 'Cocos2dx客户端开发工程师', category: '技术类', pay: '面议', id: '002'},
    {position: 'Unity3D客户端开发工程师', category: '技术类', pay: '面议', id: '003'},
    {position: 'H5客户端开发工程师', category: '技术类', pay: '面议', id: '004'},
    {position: 'SDK接入工程师', category: '技术类', pay: '面议', id: '005'},
    {position: 'Web前端开发工程师', category: '技术类', pay: '面议', id: '006'},
    {position: 'PHP开发工程师', category: '技术类', pay: '面议', id: '007'},
    {position: '游戏测试', category: '技术类', pay: '面议', id: '008'}
  ],
  plan: [
    {position: 'H5游戏策划', category: '策划类', pay: '面议', id: '100'},
    {position: '数值策划', category: '策划类', pay: '面议', id: '101'},
    {position: '系统策划', category: '策划类', pay: '面议', id: '102'},
    {position: '游戏文案策划', category: '策划类', pay: '面议', id: '103'},
    {position: '棋牌游戏策划', category: '策划类', pay: '面议', id: '104'},
    {position: '产品经理', category: '策划类', pay: '面议', id: '105'}
  ],
  arts: [
    {position: '3D场景建模', category: '美术类', pay: '面议', id: '200'},
    {position: '3D角色建模', category: '美术类', pay: '面议', id: '201'},
    {position: '角色原画师', category: '美术类', pay: '面议', id: '202'},
    {position: '游戏UI设计师', category: '美术类', pay: '面议', id: '203'},
    {position: '游戏特效设计师', category: '美术类', pay: '面议', id: '204'}
  ],
  functions: [
    {position: '招聘专员', category: '职能类', pay: '面议', id: '300'}
  ]
}

const xzOptions = {
  technology: [
    {position: 'C++服务端开发', category: '技术类', pay: '面议', id: 'x000'},
    {position: 'Erlang服务端开发', category: '技术类', pay: '面议', id: 'x001'},
    {position: 'PHP开发工程师', category: '技术类', pay: '面议', id: 'x002'}
  ],
  plan: [
    {position: '游戏策划', category: '策划类', pay: '面议', id: 'x100'}
  ],
  functions: [
    {position: '人事助理', category: '职能类', pay: '面议', id: 'x300'}
  ]
}

export default {
  data () {
    return {
      // 导航数据
      navList: navList,
      // 获取到的数据
      szData: szOpations,
      // 筛选数据
      selectData: szOpations.technology,
      // 被选中的样式
      active: 1
    }
  },
  methods: {
    selectType (type) {
      this.active = type
      if (type === 0) {
        var newArr = []
        for (const key in this.szData) {
          for (var i = 0; i < this.szData[key].length; i++) {
            newArr.push(this.szData[key][i])
          }
        }
        this.selectData = newArr
      } else if (type === 1) {
        this.selectData = this.szData['technology']
      } else if (type === 2) {
        this.selectData = this.szData['plan']
      } else if (type === 3) {
        this.selectData = this.szData['arts']
      } else {
        this.selectData = this.szData['functions']
      }
    },
    toDetail (id) {
      this.$router.push({path: 'rdetail', query: {id}})
    }
  },
  computed: {
    // selectData () {
    //   return this.szData.technology
    // }
    allData () {
      var newArr = []
      for (const key in this.szData) {
        for (var i = 0; i < this.szData[key].length; i++) {
          newArr.push(this.szData[key][i])
        }
      }
      return newArr
    }
  },
  mounted () {
    // console.log(this.$route.query.recruitType)
    if (this.$route.query.recruitType === 'xz') {
      this.szData = xzOptions
      this.selectData = xzOptions.technology
    }
  }
}
</script>

<style lang="scss">
.th1{
  width: 50%;
}
.th2{
  width: 25%;
}
.th3{
  width: 25%;
}
.rpositions{
  padding-top:40px;
  padding-bottom: 60px;
  .rpositions-container{
    // width: 96%;
    // margin: 10px 2%;
    // overflow: hidden;
    // background: #fff;
    // padding: 10px;
    // box-sizing: border-box;
    .position-bar{
      height: 45px;
      line-height: 45px;
      // text-align: center;
      padding-left:10px;
      border-bottom: 1px solid #ccc;
      button{
        width: 62px;
        height: 30px;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 5px;
        background: #fdfdfd;
        border: 1px solid #ccc;
        color: #999;
        margin-left: 5px;
      }
      .active{
        color: #000;
        background: #ffe26d;
      }
    }
    .position-table{
      width: 100%;
      tr{
        th{
          background-color: #f6f6f6;
          height: 42px;
          text-align: left;
          padding: 0 10px;
          color: #666;
          font-size: 12px;
          line-height: 42px;
          font-weight: bold;
          border-bottom: 1px solid #d5d5d5;
        }
        td{
          font-size: 12px;
          padding-left: 10px;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #d5d5d5;
          background: #fff;
        }
      }
    }
  }
}
</style>
