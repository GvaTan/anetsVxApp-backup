<template>
  <view class="addr">
      <view class="addrs" v-if="addrs!=null&&addrs.length!=0" v-for="(item,index) in addrs">
          <view class="name">
              <text style="font-size:36rpx;color:black;font-weight:bold;">{{item.name}}</text><text style="font-size:36rpx;color:black;font-weight:bold;margin-left:20rpx">{{item.phone}}</text>
          </view>
          <view class="content" style="font-size:30rpx;">
              {{item.content}}
          </view>
      </view>
      <view class="addrs" v-if="addrs==null||addrs.length==0" style="text-align:center">
           你还没有收货地址哟！！
      </view>

      <navigator class="add" url="/pages/addr/index">
          新增收货地址
      </navigator>
  </view>
</template>

<script>
export default {
    data(){
        return {
             addrs:[
                //  {name:"谭洋波",phone:"15587491751",content:"陕西省太原市中北大学文涛器104"},
                //  {name:"谭洋波",phone:"15587491751",content:"陕西省太原市中北大学文涛器104"},
                //  {name:"谭洋波",phone:"15587491751",content:"陕西省太原市中北大学文涛器104"},
                //  {name:"谭洋波",phone:"15587491751",content:"陕西省太原市中北大学文涛器104"}
             ]
        }
    }
}
</script>

<style scoped lang="scss">
.addr{
    width: 100vw;
    height: 100vh;
    background-color: #EEEEEE;
}

.addrs{
    
    background-color: white;
    padding: 20rpx 20rpx;
    border-bottom: 1upx solid rgba($color: #707070, $alpha: 0.3);
}

.add{
    margin:20rpx 20rpx;
     padding:15rpx 30rpx;
    color: #E80376;
    border-radius: 7rpx;
     border:1rpx solid  #E80376;
     text-align: center;
}
</style>