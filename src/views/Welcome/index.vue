<template>
  <div class="welcome">
    <!-- <swiper :aspect-ratio="300/800" loop auto :list="swriperList" :index="imgIndex" @on-index-change="onIndexChange"></swiper> -->
    <!-- 轮播图 -->
    <div class="welcome-swiper">
      <swiper :aspect-ratio="300/800" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
          <img :src="item" style="display:block;width:100%">
        </swiper-item>
      </swiper>
    </div>
    <!-- 主题内容 -->
    <div class="welcome-main">
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
                      <div class="iconfont">&#xe620;&#xe620;&#xe620;&#xe620;&#xe620;</div>
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
    </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

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
export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  data () {
    return {
      swriperList: urlList,
      imgIndex: '',
      demo04_list: imgList
    }
  },
  methods: {
    onIndexChange () {
      console.log(11)
    }
  }
}
</script>

<style lang="scss">
.welcome {
  margin-top: 40px;
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
</style>

