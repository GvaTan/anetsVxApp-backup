<template>
  <view>
        <view class="swiper">
              <swiper autoplay indicator-dots circular>
                <swiper-item v-for="(item,index) in banner">
                  <image mode="aspectFill" :src="item"></image>
                </swiper-item>
              </swiper>
        </view>
        <view class="classify">
           <view class="item" v-for="(item,index) in classify">
             <image mode="widthFix" :src="item.img"></image>
             <view class="text">{{item.text}}</view>
           </view>
        </view>

        <view class="new">
           <view class="left">
              <text style="font-weight:bold;font-size:36rpx;color:black">新品</text>
              <view style="font-weight:600;font-size:30rpx;height:48rpx;line-height:48rpx">每周四上新</view>
              <view class="goods">
                  <view class="item">
                      <image mode="widthFix" src="https://appserversrc.8btc.com/images/9c77c2b07de62d3a53ad4a11d17947b3.png"></image>
                      <text>¥228</text>
                  </view>
                  <view class="item">
                      <image mode="widthFix" src="https://appserversrc.8btc.com/images/b89bd1eaadf6db9ee8d586c8ab4a0854.jpg"></image>
                      <text>¥43.9</text>
                  </view>
              </view>
           </view>
           <view class="left">
              <text style="font-weight:bold;font-size:36rpx;color:black">热销</text>
              <view style="font-weight:600;font-size:30rpx;height:48rpx;line-height:48rpx">最受欢迎区块链周边</view>
              <view class="goods">
                  <view class="item">
                      <image mode="widthFix" src="https://appserversrc.8btc.com/images/00cf60b19301818ff7619435db9ecda1.jpg"></image>
                      <text>¥228</text>
                  </view>
                  <view class="item">
                      <image mode="widthFix" src="https://appserversrc.8btc.com/images/17642d1d1a09047422fe2881880412db.jpg"></image>
                      <text>¥43.9</text>
                  </view>
              </view>
           </view>
        </view>


        <view class="mkill">
            <view class="title"  style="font-weight:bold;font-size:36rpx;color:black">
              秒杀专题
            </view>
            <view class="shops">
               <navigator class="item" url="/pages/detail/index?sid=6" v-for="(item,index) in shops">
                   <image mode="widthFix" :src="item.img"></image>
                   <view class="name">
                     {{item.name}}
                   </view>
                   <text>
                     ¥{{item.price}}
                   </text>
               </navigator>
            </view>
        </view>
  </view>
</template>

<script>
export default {
  data(){
    return {
      banner:[
        "https://appserversrc.8btc.com/activity/store/img/20200624173906_80323.jpg",
        "https://appserversrc.8btc.com/activity/store/img/20200624173850_66836.jpg",
        "https://appserversrc.8btc.com/activity/store/img/20200624103133_86422.png",
        "https://appserversrc.8btc.com/activity/store/img/20200624102029_71498.jpg"
      ],
      classify:[
        {img:"http://appserversrc.8btc.com/classify/boutique.png",text:"链作精品",url:""},
        {img:"http://appserversrc.8btc.com/classify/digital.png",text:"数码硬件",url:""},
        {img:"http://appserversrc.8btc.com/classify/books.png",text:"图书文具",url:""},
        {img:"http://appserversrc.8btc.com/classify/daily.png",text:"居家日用",url:""},
        {img:"http://appserversrc.8btc.com/classify/clothes.png",text:"服饰箱包",url:""}
      ],
      shops:[
        {img:"https://appserversrc.8btc.com/images/17642d1d1a09047422fe2881880412db.jpg",name:"人气比特币十年·创世本册 书写你的区块链人生",price:"68"},
        {img:"https://appserversrc.8btc.com/images/32204f60fb2722268428d562d2a9c783.jpg",name:"链作服饰 | 比原链周边T恤",price:"39"},
        {img:"https://appserversrc.8btc.com/images/d8be249d92a849f5b043df4f8ffbc3b4.jpg",name:"链作日用 | 链大星可爱公仔玩偶",price:"49"},
        {img:"https://appserversrc.8btc.com/images/5aef15026fb2972e6071ef9e356a7454.png",name:"链作钱包 | 比原链纪念版硬件钱包",price:"199"},
        {img:"https://appserversrc.8btc.com/images/0efd0ab4d2ec15cb0dfb7e9088c6b939.png",name:"比特派 | 刀锋 硬件冷钱包",price:"689"},
        {img:"https://appserversrc.8btc.com/images/eaa47846a5dca0d5c051787b7bae4286.jpg",name:"Cobo | Tablet助记词板",price:"168"},
        {img:"https://appserversrc.8btc.com/images/becff4e5bcd274f72d1e9c1654f77389.jpg",name:"重磅出品！链作联合巴比特推出产业区块链图册 一图了解区块链赋能实体经济 行业必备(确认收货赠送 58 金币)",price:"58"},
        {img:"https://appserversrc.8btc.com/images/1479a250b8c633f9ee5cfd92ecedbd06.jpg",name:"产业区块链：中国核心技术自主创新的重要突破口",price:"68"},
        {img:"https://appserversrc.8btc.com/images/098f0affd0215c50e975457e4a20d927.jpg",name:"区块链：从数字货币到信用社会",price:"58"},
      ]
    }
  }

}
</script>

<style lang="scss">




swiper {
   height:calc(750rpx/3);
   image{
    height: 100%;
  }
}

.classify{
  padding: 10rpx 0;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  // background-color: royalblue;
  .item{
    width: 20%;
    padding: 20rpx;
    image{
      width: 100%;
    }
    .text{
      // display: inline-block;
      padding: 10rpx 0rpx;
      font-size: 25rpx;
      width: 100%;
      text-align: center;
      // background-color: RED;
    }
  }
}


.new{
  width: 750rpx;
  background-color: rgba(248,248,248,1);
  padding: 10rpx 10rpx;
  display: flex;
  flex-direction: row;
  .left{
        width: 50%;
        background-color: white;
        border-right: 2rpx solid rgba(248,248,248,1);

        padding: 5rpx 10rpx;
       
        .goods{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width:100%;
            .item{
              width: 49%;
              // border: 1px solid red;
              box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
              image{
                width:100%;
              }
              text{
                color: #EE0000;
              }
            }
        }
  }
  .right{
        width: 50%;
        background-color: white;
  }
}


.mkill{
  padding: 10rpx 10rpx;
  
  .shops{
     width:100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     flex-wrap: wrap;
    .item{
      width: 49%;
      margin-top: 16rpx;
      image{
        width:100%;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
      }
      .name{
        font-weight: bold;
        color: black;
        font-size: 32rpx;
        height:76rpx;
        overflow: hidden;
      }
      text{
        color: #EE0000;
        font-size: 32rpx;
        font-weight: bold;
      }
    }
  }
}
</style>