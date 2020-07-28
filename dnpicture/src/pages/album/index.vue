<template>
  <view class="content">
      <view class="top" v-if="shop!=null">
        <view class="banner">
          <image mode="aspectFill" :src="'http://anets.top/'+shop.preview"></image>
        </view>
        <view class="desc">
            <view class="left">
                {{shop.name}}
            </view>
            <view class="right">
                {{shop.createtime}}
            </view>
        </view>
      </view>

      <view class="user" v-if="shop!=null">
        <view class="img">
          <image style="width:100rpx;height:100rpx;border-radius:50%" mode="aspectFill" :src="'http://anets.top/'+shop.preview"></image>
        </view>
        <view class="name">
          {{shop.user.username}}
        </view>
      </view>

      <view class="detail" v-if="shop!=null" v-html="shop.detail">
         
      </view>
  </view>
</template>

<script>
export default {
  data(){
     return {
         shop:null
     }
  },
  onLoad(options){
      console.log(options.id);
      this.request({
        url:"http://shop.anets.top/api/shop/queryDisabledShop.action?",
        data:{
          sid:options.id
        }
        
      })
      .then((result)=>{
          console.log(result.data.data);
          this.shop=result.data.data;
      })
  },
  onReachBottom(){
    console.log("我也是有底线的");
  }
}
</script>

<style lang="scss">
.top{
  position:relative;
  height:25vh;
  .banner{
     height:25vh;
     image{
       height:25vh;
     }
  }

  .desc{
    position:absolute;
    bottom:0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.3);
    font-size: 33rpx;
    color:white;
    width: 100%;
    .left{
      // background-color: red;
    }
    .right{
      // background-color: green;
    }

  }
}


.user{
  display: flex;
  flex-direction: row;
  .img{
     
  }

  .name{
    line-height: 100rpx;
    margin-left: 20rpx;
    
  }

  
}

.detail{
  width:100%;
}
</style>