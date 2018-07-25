<template>
  <div class="game">
    <!-- tab栏开始 -->
    <div class="top-tab">
      <tab>
        <tab-item selected @on-item-click="tabIndex(0)">推荐</tab-item>
        <tab-item @on-item-click="tabIndex(1)">排行</tab-item>
      </tab>
    </div>
    <!-- tab栏结束 -->

    <!-- 游戏内容开始 -->
    <div class="body-box">
      <div class="main-box">
        <div class="game-box" v-if="navIndex == 0">
          <div class="game-img clearfix">
            <!-- <div class="lrow"></div>
            <div class="rrow"></div> -->
            <a href="#">
              <img src="http://image.37wan.cn/upload/image/20180717/1531822716418234.jpg" alt="">
            </a>
            <a href="#">
              <img src="http://image.37wan.cn/upload/image/20180717/1531822716418234.jpg" alt="">
            </a>
            <a href="#">
              <img src="http://image.37wan.cn/upload/image/20180717/1531822716418234.jpg" alt="">
            </a>
            <a href="#">
              <img src="http://image.37wan.cn/upload/image/20180717/1531822716418234.jpg" alt="">
            </a>
          </div>
          <div class="game-recom game-list-box">
            <div class="game-row clearfix">
              <a class="game-link fl" href="#">
                <div class="game-icon fl">
                  <img src="http://image.37wan.cn/upload/image/20180724/1532413320965900.png" alt="">
                </div>
                <div class="game-msg fl">
                  <div class="game-title">屠龙破晓（官网）</div>
                  <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                  <div class="game-summary ell">三角合一，热血重写新传奇</div>
                </div>
              </a>
              <div class="game-down-btn fr">
                <a class="game-xz" href="#">下载</a>
              </div>
            </div>
            <div class="game-row clearfix">
              <a class="game-link fl" href="#">
                <div class="game-icon fl">
                  <img src="http://image.37wan.cn/upload/image/20180724/1532413320965900.png" alt="">
                </div>
                <div class="game-msg fl">
                  <div class="game-title">屠龙破晓（官网）</div>
                  <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                  <div class="game-summary ell">三角合一，热血重写新传奇</div>
                </div>
              </a>
              <div class="game-down-btn fr">
                <a class="game-xz" href="#">下载</a>
              </div>
            </div>
          </div>
          <div class="get-more"></div>
        </div>

        <div class="game-box" v-if="navIndex == 1">
          <div class="ranking game-list-box">
            <div class="game-row clearfix">
              <div class="tag-box fl">
                <div class="ln-tag lt1">
                  <span>1</span>
                  <i></i>
                </div>
              </div>
              <a class="game-link fl" href="#">
                <div class="game-icon fl">
                  <img src="http://image.37wan.cn/upload/image/20180724/1532413320965900.png" alt="">
                </div>
                <div class="game-msg fl">
                  <div class="game-title">屠龙破晓（官网）</div>
                  <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                  <div class="game-summary ell">三角合一，热血重写新传奇</div>
                </div>
              </a>
              <div class="game-down-btn fr">
                <a class="game-xz" href="#">下载</a>
              </div>
            </div>
            <div class="game-row clearfix">
              <div class="tag-box fl">
                <div class="ln-tag lt2">
                  <span>2</span>
                  <i></i>
                </div>
              </div>
              <a class="game-link fl" href="#">
                <div class="game-icon fl">
                  <img src="http://image.37wan.cn/upload/image/20180724/1532413320965900.png" alt="">
                </div>
                <div class="game-msg fl">
                  <div class="game-title">屠龙破晓（官网）</div>
                  <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                  <div class="game-summary ell">三角合一，热血重写新传奇</div>
                </div>
              </a>
              <div class="game-down-btn fr">
                <a class="game-xz" href="#">下载</a>
              </div>
            </div>
            <div class="game-row clearfix">
              <div class="tag-box fl">
                <div class="ln-tag lt3">
                  <span>3</span>
                  <i></i>
                </div>
              </div>
              <a class="game-link fl" href="#">
                <div class="game-icon fl">
                  <img src="http://image.37wan.cn/upload/image/20180724/1532413320965900.png" alt="">
                </div>
                <div class="game-msg fl">
                  <div class="game-title">屠龙破晓（官网）</div>
                  <i class="iconfont">&#xe6d5;&#xe6d5;&#xe6d5;&#xe6d5;</i>
                  <div class="game-summary ell">三角合一，热血重写新传奇</div>
                </div>
              </a>
              <div class="game-down-btn fr">
                <a class="game-xz" href="#">下载</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <!-- 游戏内容结束 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      navIndex: 0
    }
  },
  methods: {
    tabIndex (val) {
      this.navIndex = val
    }
  }
}
</script>

<style lang="scss">
.lt1{
  background: #e65022;
}
.lt2{
  background: #ec7450;
}
.lt3{
  background: #eea44c;
}
.game-row:first-child{
  border-top: none !important;
}
.game{
  padding-top:40px;
  .body-box{
    .main-box{
      width: 96%;
      margin: 10px 2%;
      overflow: hidden;
      height: 640px;
      .game-box{
        .ranking{
          .game-row{
            .tag-box{
              width: 12%;
              max-width: 45px;
              .ln-tag{
                width: 24px;
                height: 46px;
                position: relative;
                margin: 10px 0 0;
                span{
                  display: block;
                  color: #fff;
                  text-align: center;
                  height: 36px;
                  line-height: 36px;
                  font-size: 16px;
                }
                i{
                  display: block;
                  border-style: solid;
                  border-color: transparent transparent #fff transparent;
                  border-width: 0 12px 10px 12px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                }
              }
            }
            .game-link{
              width: 58% !important;
            }
          }
        }
        .game-img{
          >a{
            float: left;
            display: block;
            width: 49%;
            margin-bottom: 2%;
            >img{
              display: block;
              width: 100%;
              border-radius: 5px;
            }
            &:nth-child(even){
              margin-left: 2%;
            }
          }
        }
        .game-list-box{
          box-sizing: border-box;
          width: 100%;
          margin: 0;
          border: #d6d6d6 solid 1px;
          background-color: #fff;
          .game-row{
            width: 96%;
            padding: 12px 0;
            margin: 0 2%;
            border-top: #d6d6d6 solid 1px;
            .game-link{
              width: 70%;
              .game-icon{
                width: 30%;
                max-width: 60px;
                >img{
                  width: 100%;
                }
              }
              .game-msg{
                box-sizing: border-box;
                padding-left: 10px;
                width: 70%;
                line-height: 20px;
                .game-title{
                  color: #343434;
                  font-size: 14px;
                }
                .iconfont{
                  color: #fc9241;
                }
                .game-summary{
                  font-size: 10px;
                  color:#9a9a9a;
                }
              }
            }
            .game-down-btn{
              width: 25%;
              max-width: 120px;
              height: 30px;
              line-height: 30px;
              margin-top: 15px;
              .game-xz{
                width: 90%;
                display: block;
                background-color: #83ce63;
                color: #fff;
                text-align: center;
                margin: 0 auto;
                font-size: 14px;
                border-radius: 5px;
              }
            }
          }
          &:first-child{
            border-top: none;
          }
        }

      }
    }
  }
}
</style>
