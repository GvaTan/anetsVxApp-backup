<template>
  <view>
    <view class="category">
      <view class="item" v-for="(item,index) in category" @click="toVideo(item)">
         <image mode="aspectFill" :src="'http://anets.top/'+item.preview"></image>
         <view class="name">
            {{item.name}}
         </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      category:[

      ],
      params:{
         size:15,
         start:1
      }
    }
  },
  created(){
     this.getList();
  },
    mounted(){
      // 修改页面标题
      uni.setNavigationBarTitle({title:"分类"})
    },
    methods:{
       async getList(){
         let result = await this.request({
             url:"http://shop.anets.top/api/shop/queryHotShops.action",
             data:this.params
         });
         console.log("分类模块");
         console.log(result);
         this.category=result.data.data.shops;
       },
       toVideo(item){
        //  将数据存储到全局共享
        getApp().globalData.item=item;
        // 页面跳转
        console.log("play");
        uni.navigateTo({
          url:"/pages/videoPlay/index"
        });
       }
    }
}
</script>

<style lang="scss" scoped>
.category{
   display: flex;
   flex-wrap: wrap;
  .item{
    width: 33.33%;
    position: relative;
    border: 5rpx solid #fff;
    image{
       height: 240rpx;
    }
    .name{
       position: absolute;
       width: 100%;
       height: 40rpx;
       left:0px;
       bottom: 0px;
       color: #fff;
       white-space: nowrap;
      //  线性渐变
       background-image: linear-gradient(to right top,rgba(0,0,0,.2),rgba(0,0,0,0));
       font-size: 25rpx;
       display: flex;
       padding:0 ;
       align-items: center;

    }
  }
}
</style>