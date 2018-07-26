<template>
  <div class="welcome">
    <!-- <swiper :aspect-ratio="300/800" loop auto :list="swriperList" :index="imgIndex" @on-index-change="onIndexChange"></swiper> -->
    <!-- 轮播图 -->
    <div class="welcome-swiper">
      <!-- @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex" -->
      <swiper :aspect-ratio="300/800" >
        <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <img :src="item" style="display:block;width:100%">
        </swiper-item>
      </swiper>
    </div>
    <!-- 主题内容 -->
    <div class="welcome-main">
      <!-- 今日推荐开始 -->
      <div class="recommend bgd">
        <div class="recom-title">
          <div class="fl z">今日推荐</div>
          <div class="fr y">
            <router-link tag="a" to="/game">查看全部 ></router-link>
          </div>
        </div>
        <div class="recom-box">
          <div class="recom-list">
            <ul>
              <li>
                <div class="one-block b1">
                  <a class="link-block clearfix" title="屠龙破晓（官网）" href="http://37.com.cn/tlpx/">
                    <div class="game-icon fl">
                      <img alt="屠龙破晓（官网）" src="../../assets/1531203757949225.png">
                    </div>
                    <div class="game-msg fl">
                      <div class="game-title">屠龙破晓（官网）</div>
                      <!-- <div class="iconfont">&#xe620;&#xe620;&#xe620;&#xe620;&#xe620;</div> -->
                      <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                      <div class="game-summary ell">三角合一，热血重写新传奇</div>
                    </div>
                    <!-- <div class="tag">
                      <i></i>
                      <span>免费</span>
                    </div> -->
                  </a>
                </div>
                <div class="one-block b1">
                  <a class="link-block clearfix" title="屠龙破晓（官网）" href="http://37.com.cn/tlpx/">
                    <div class="game-icon fl">
                      <img alt="屠龙破晓（官网）" src="../../assets/1531203757949225.png">
                    </div>
                    <div class="game-msg fl">
                      <div class="game-title">屠龙破晓（官网）</div>
                      <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                      <div class="game-summary ell">三角合一，热血重写新传奇</div>
                    </div>
                    <!-- <div class="tag">
                      <i></i>
                      <span>免费</span>
                    </div> -->
                  </a>
                </div>
                <div class="one-block b1">
                  <a class="link-block clearfix" title="屠龙破晓（官网）" href="http://37.com.cn/tlpx/">
                    <div class="game-icon fl">
                      <img alt="屠龙破晓（官网）" src="../../assets/1531203757949225.png">
                    </div>
                    <div class="game-msg fl">
                      <div class="game-title">屠龙破晓（官网）</div>
                      <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                      <div class="game-summary ell">三角合一，热血重写新传奇</div>
                    </div>
                    <!-- <div class="tag">
                      <i></i>
                      <span>免费</span>
                    </div> -->
                  </a>
                </div>
                <div class="one-block b1">
                  <a class="link-block clearfix" title="屠龙破晓（官网）" href="http://37.com.cn/tlpx/">
                    <div class="game-icon fl">
                      <img alt="屠龙破晓（官网）" src="../../assets/1531203757949225.png">
                    </div>
                    <div class="game-msg fl">
                      <div class="game-title">屠龙破晓（官网）</div>
                      <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                      <div class="game-summary ell">三角合一，热血重写新传奇</div>
                    </div>
                    <!-- <div class="tag">
                      <i></i>
                      <span>免费</span>
                    </div> -->
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 今日推荐结束 -->
      <div class="server-list bgd">
        <tab>
          <tab-item selected @on-item-click="tabIndex(0)">开服表</tab-item>
          <tab-item @on-item-click="tabIndex(1)">新游表</tab-item>
        </tab>
      </div>
      <div class="server-box" v-if="navIndex==0">

        <div class="sertable">
          <table class="server-table" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <th class="th1">开服名称</th>
                <th class="th2">开服时间</th>
                <th class="th3">礼包</th>
                <th class="th4">下载</th>
              </tr>

            <tbody>
            <tr v-for="(item,index) in serverList" :key="index">
              <td><span class="ser-tit">{{item.serverTitle}}</span></td>
              <td>{{item.serverTime}}</td>
              <td><a class="iconfont lb" href="#" @click="showDialog({dialogType:'gift',ios:item.iosUrl,and:item.androidUrl})">&#xe678;</a></td>
              <td><a class="iconfont xz" href="#" @click="showDialog({dialogType:'downGame'})">&#xe6ad;</a></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="get-more">
          <a id="server" href="javascript:;">查看更多</a>
        </div>
      </div>
      <div class="new-game" v-if="navIndex==1">
        <GameInfo @onDialog="showDialog"></GameInfo>
      </div>
    </div>

    <!-- 礼包弹框 -->
    <div v-transfer-dom>
      <alert v-model="showGift" title="礼包">礼包已经被领取完</alert>
    </div>

    <!-- 下载弹框 -->
    <div v-transfer-dom>
      <confirm
      v-model="showDown"
      hide-on-blur
      title="平台类型"
      confirm-text="安卓"
      cancel-text="苹果"
      @on-confirm="onAndroid"
      @on-cancel="onIos"
      >
        <p style="text-align:center;">请选择下载平台</p>
      </confirm>
    </div>

  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, TransferDomDirective as TransferDom } from 'vux'
import GameInfo from '@/components/GameInfo'

const imgList = [
  require('../../assets/s1.jpg'),
  require('../../assets/s2.jpg'),
  require('../../assets/s3.jpg')
]

const baseList = [
  {
    url: 'javascript:',
    img: '../../assets/s1.jpg',
    title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg:
      'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }
]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))
console.log(urlList)

const serverListData = [
  {
    serverTitle: '梦幻问仙 4服',
    serverTime: '7-26',
    gitfCdk: '123',
    iosUrl: 'ios1',
    androidUrl: 'and1'
  },
  {
    serverTitle: '大唐仙灵 4服',
    serverTime: '7-26',
    gitfCdk: '123',
    iosUrl: 'ios2',
    androidUrl: 'and2'
  },
  {
    serverTitle: '西游H5 4服',
    serverTime: '7-26',
    gitfCdk: '123',
    iosUrl: 'ios3',
    androidUrl: 'and3'
  }
]

export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    GameInfo
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      swriperList: urlList,
      imgIndex: '',
      demo04_list: imgList,
      navIndex: 0,
      serverList: serverListData,
      showGift: false,
      showDown: false,
      current: {
        ios: '',
        and: ''
      }
    }
  },
  methods: {
    onIndexChange () {
      console.log(11)
    },
    tabIndex (val) {
      this.navIndex = val
    },
    showDialog (data) {
      if (data.dialogType === 'downGame') {
        this.showDown = true
        console.log(data)
        this.current.ios = data.ios
        this.current.and = data.and
      } else if (data.dialogType === 'gift') {
        this.showGift = true
      }
    },
    onAndroid () {
      console.log(this.current.and)
      // window.location = this.current.and
    },
    onIos () {
      console.log(this.current.ios)
      // window.location = this.current.ios
    }
  },
  mounted () {
    console.log(this.serverList)
  }
}
</script>

<style lang="scss">
.lb{
  color: #fc9241;
  font-size: 20px;
}
.xz{
  color: #83ce63;
  font-size: 20px;
}
.welcome {
  padding-top: 40px;
  padding-bottom: 50px;
  .welcome-main {
    width: 98%;
    margin: 10px auto 0;
    padding-bottom: 10px;
    .bgd {
      background: #fff;
    }
    .recommend {
      .recom-title {
        height: 34px;
        line-height: 34px;
        border: #d5d5d5 solid 1px;
        border-bottom: none;
        .z {
          color: #343434;
          font-size: 14px;
          // font-size: 14rem;
          padding-left: 1%;
        }
        .y {
          font-size: 12px;
          color: #9a9a9a;
          font-size: 12px;
          // font-size: 1.2rem;
          padding-right: 1%;
        }
      }
      .recom-box{
        border: #d5d5d5 solid 1px;
        padding: 8px 0 25px;
        position: relative;
        .recom-list{
          width: 97%;
          margin: 0 auto;
          overflow: hidden;
          >ul{
            >li{
              .one-block{
                box-sizing: border-box;
                width: 50%;
                border: none;
                float: left;
                .link-block{
                  display: block;
                  padding: 8px 0 8px 5px;
                  position: relative;
                  .game-icon{
                    width: 30%;
                    max-width: 60px;
                    >img{
                      width: 100%;
                    }
                  }
                  .game-msg{
                    line-height: 16px;
                    padding-left: 5px;
                    box-sizing: border-box;
                    width: 70%;
                    .game-title{
                      color: #343434;
                      font-size: 14px;
                    }
                    .game-summary{
                      color: #9a9a9a;
                      font-size: 10px;
                    }
                    .iconfont{
                      font-size: 10px;
                      color: #fc9241;
                    }
                  }
                }
              }
              .b1{
                border-right: #d5d5d5 solid 1px;
                border-bottom: #d5d5d5 solid 1px;
              }
            }
          }
        }
      }
    }
  }
}
.server-box{
  .sertable{
    border: #d5d5d5 solid 1px;
    .server-table{
      width: 100%;
      font-size: 12px;
      tr{
        th{
          background-color: #f6f6f6;
          height: 42px;
          text-align: center;
          color: #666;
          font-size: 12px;
          line-height: 42px;
          font-weight: bold;
        }
        td{
          text-align: center;
          color: #343434;
          height: 40px;
          line-height: 40px;
          border-top: #d5d5d5 solid 1px;
          .ser-tit{
            text-align: left;
            display: block;
            padding-left: 5px;
            // text-align: center;
          }
        }
        .th1{
          width: 50%;
        }
        .th2{
          width: 20%;
        }
        .th3{
          width: 15%;
        }
        .th4{
          width: 15%;
        }
      }
      &:nth-child(n-1){
        background: #fff;
      }
    }
  }
  .get-more{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    padding-top: 10px;
    background: #fff;
    >a{
      display: block;
      width: 100%;
      height: 100%;
      color: #666;
    }
  }
}

.img-box{
  height: 200px;
  p{

  }
}
</style>

