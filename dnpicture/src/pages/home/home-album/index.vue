<template>
  <view>
    <!-- swiper组件
       1自动轮播 autoplay
       2指示器  indicator-dots
       3衔接轮播 circular
     -->
     <swiper autoplay indicator-dots circular>
       <swiper-item  v-for="(item,index) in banner">
         <image :src="item"></image>
       </swiper-item>
     </swiper>

     <view class="detail">
       <navigator class="item" :url="'/pages/album/index?id='+item.sid" v-for="(item,index) in hots">
          <view class="left">
              <image mode="widthFix" :src="'http://anets.top/'+item.preview"></image>
          </view>
          <view class="right">
                <view class="titile">{{item.name}}</view>
                <view class="content">{{item.discription}}</view>
                <view class="btn">
                  <view class="attention">
                    关注
                  </view>
                </view>
          </view>
       </navigator>
     </view>
  </view>
</template>

<script>
export default {
   data(){
     return {
       banner:[
         "http://anets.top//group1/M00/00/06/rBEqJl7pbE2AF1wiAAAU-YD57QY590.jpg",
         "http://anets.top//group1/M00/00/06/rBEqJl7mnySAGZ9AAAAWdISwkok622.jpg",
         "http://anets.top//group1/M00/00/05/rBEqJl6Vo3WAUxUwAAAWK6gPocw791.jpg",
         "http://anets.top//group1/M00/00/03/rBEqJl6CHWmALAEwAAAZkeobgDU964.jpg"
       ],
       params:{
         size:4,
         start:1
       },
       hots:[]
     }
   },
   mounted(){
      // 修改页面标题
      uni.setNavigationBarTitle({title:"专辑"});
      this.getList();
   },
   methods:{
     getList(){
       this.request({
       url:"http://shop.anets.top/api/shop/queryHotShops.action",
       data:this.params
       })
        .then(result=>{
          console.log(result.data.data.shops);
          if(result.data.data.shops.length==0){
              uni.showToast({
                title:"没有更多数据了",
                icon:"none"
              });
          }
          this.hots=[...this.hots,...result.data.data.shops];
       })

     }
   }
}
</script>

<style lang="scss">
swiper{
  height:calc(750rpx/1.5);
  image{
    height: 100%;
  }
}


.detail{
  .item{
    display: flex;

      .left{
          flex:1;
          padding: 10rpx;
          image{
            width:200rpx;
            height:200rpx;
          }
        }

        .right{
          flex:2;
          padding: 0 10px;
          .title{
            font-size: 30rpx;
            color:#000;
            padding: 10rpx 0;
          }
          .content{
            padding: 10rpx 0;
            font-size: 24rpx;
          }

          .btn{
              padding: 10rpx;
              display: flex;
              justify-content: flex-end;
              .attention{
                color:$color;
                border:1px solid $color;
                padding:5 10rpx;
                font-size: 21rpx;
              }
          }
        }
  }
}
</style>