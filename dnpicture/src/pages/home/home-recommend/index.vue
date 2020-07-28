<template>
  <scroll-view @scrolltolower="handleToLower()" scroll-y class="recommend_view" v-if="recommends.length>0">
    <!-- 推荐 -->
    <view class="recommend_wrap">
      <navigator  :url="'/pages/album/index?id='+item.sid" class="recommend_item" v-for="(item,index) in recommends" :key="index">
        <image class="img" mode="widthFix" :src="'http://anets.top/'+item.preview"></image>
      </navigator>
    </view>
    <!-- 月份 -->
    <view class="month">
      <view class="left">
        <view class="time">
           <text>{{mouthes.DD}}/{{mouthes.MM}}月</text>
       </view>
      <view class="content">
         你负责美丽，我保持神秘
      </view>
      </view>
      <view class="more">
        更多>>
      </view>
    </view>
    <!--  -->
   
    <!-- 热门数据 -->
    <view class="hots">
      <view class="title" style="border:5px left $color">
        
      </view>
      <view class="items">
        <view  class="item" v-for="(item,index) in hots">
           <goDetail :list="hots" :index="index">
             <image class="img" mode="aspectFill" :src="'http://anets.top/'+item.preview"></image>
           </goDetail>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import  moment  from  "moment"
import goDetail from "@/components/goDetail"
export default {
  components:{goDetail},
   data(){
     return {
       recommends:[],
       mouthes:{
         MM:"",
         DD:""
       },
       hots:[],
       params:{
         size:4,
         start:1
       },
       hasMore:true
     }
   },
   mounted(){
      // 修改页面标题
      uni.setNavigationBarTitle({title:"推荐"});
     console.log("推荐模块挂载了");
     this.request({
       url:"http://shop.anets.top/api/shop/queryHotShops.action",
       data:this.params
       })
        .then(result=>{
          console.log(result.data.data.shops);
           this.recommends=result.data.data.shops;
          this.hots=result.data.data.shops;
     })

     this.mouthes.MM=moment(new Date()).format("MM");
     this.mouthes.DD=moment(new Date()).format("DD");
   },
   methods:{
     handleToLower(){
       console.log("滚动到底了");
       this.params.start+=1;
       if(this.hasMore){
          this.getList();
       }else{
          uni.showToast({
            title:"没有更多数据了",
            icon:"none"
          });
       }
     },
     getList(){
       this.request({
       url:"http://shop.anets.top/api/shop/queryHotShops.action",
       data:this.params
       })
        .then(result=>{
          console.log(result.data.data.shops);
          if(result.data.data.shops.length==0){
              this.hasMore=false;
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

<style  lang="scss" scoped>
 

.recommend_view{
  //  height:屏幕高度-头部标题的高度
  height : calc( 100vh - 36px);

}


.recommend_wrap{
  display: flex;
  flex-wrap: wrap;
  padding:2rpx 2rpx;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  .recommend_item{
    width:49.5%;
    border:0rpx solid #fff;
    .img{
      width: 100%;
    }
  }
}

.month{
   margin-top: 10px;
   margin-bottom: 10px;
   display: flex;
   justify-content: space-between;
   line-height: 36rpx;
   .left{
    //  background-color: red;
     display: flex;
     .time{
       text{
         font-size: 36rpx;
         font-weight: 600;
         color: $color;
       }
     }

     .content{
        font-size: 30rpx;
        margin-top: 0px;
     }
   }

   .more{
     color: $color;
     font-size: 30rpx;
   }
}


.hots{
  .items{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
    .item{
      width:33%;
      // background-color: red;

      image{
        width:100%;
      }
    }
  }
}
</style>