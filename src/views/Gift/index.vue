<template>
  <div class="gift">
    <GameInfo :tagShow="isTag" :starShow="isStar" :btnTxt="btnTxt" @onDialog="showDialog" :dialogType="'gift'"></GameInfo>

    <!-- 下载弹框 -->
    <div v-transfer-dom>
      <confirm
      v-model="showGift"
      hide-on-blur
      title="礼包信息"
      confirm-text="确定"
      cancel-text="取消"
      >
        <p style="text-align:center;">礼包已经被领取完</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import { TransferDomDirective as TransferDom } from 'vux'
import GameInfo from '@/components/GameInfo'

export default {
  components: {
    GameInfo
  },
   directives: {
    TransferDom
  },
  data () {
    return {
      isTag: false,
      isStar: false,
      btnTxt: '领取',
      showGift: false
    }
  },
  methods: {
    showDialog (data) {
      console.log(data)
      if (data.dialogType === 'gift') {
        this.showGift = true
      }
    }
  }
}
</script>

<style lang="scss">
.gift{
  margin-top:40px;
}
</style>
