<template>
  <view class="detail">
      <view class="top">
          <image mode="aspectFill" :src="shop.img"></image>
      </view>
      <view class="name">
          {{shop.name}}
      </view>
      <view class="price">
          ¥{{shop.price}}
      </view>
      <view class="hr" style="width:100%;height:10px;background-color:#F8F8F8">
          
      </view>
      <view class="content" >
          <jyf-parser :html="shop.content" ref="article"></jyf-parser>
          <image style="width:100%" mode="widthFix" src="https://appserversrc.8btc.com/images/2020042211342412213.jpg"></image>
      </view>


      <view class="bottom">
          <navigator open-type="navigateBack" class="home" url="pages/home/index">
              <img mode="heightFix" src="../../static/icon/_home.png" alt="">
              <view class="info">
                  首页
              </view>
          </navigator>
          <view class="addCart">
              
              <CountDown :time="time">
                <template v-slot="{hour, minute, second}">
                    <view> 距结束还有&nbsp;&nbsp; <text style="margin-left:10rpx;">{{hour}}</text>:<text>{{minute}}</text>:<text>{{second}}</text></view>        
                </template>
             </CountDown>
          </view>
          <view class="buy" @click="goBuy()">
              {{msg}}
          </view>
      </view>
  </view>
</template>

<script>
import jyfParser from "@/components/jyf-parser/jyf-parser";
import CountDown from '../../components/CountDown'
export default {
   components:{CountDown,jyfParser},
   onLoad(options){
       console.log(options.sid);
   },
   onReady() {
   
   },
   data(){
       return {
           msg:"立即抢购",
           time: new Date('2020/04/24 01:00:00').getTime() - new Date('2020/04/24 00:20:00').getTime(),
           shop: {img:"https://appserversrc.8btc.com/images/becff4e5bcd274f72d1e9c1654f77389.jpg",name:"重磅出品！链作联合巴比特推出产业区块链图册 一图了解区块链赋能实体经济 行业必备(确认收货赠送 58 金币)",price:"58",
           content:"<div><p></p><h3></h3><br><p><br></p><h3><b>“拾”光捉影字在心，《区块链十年·创世本册》限量发售中。</b></h3><div><b><br></b></div><div><iframe src='https://1259667713.vod2.myqcloud.com/6fa6e451vodcq1259667713/625bc1e25285890799246991646/3XVaH4smWaAA.mp4' height='480' width='800' allowfullscreen='true' frameborder='0'></iframe><p><br></p></div><p></p><p></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610034228132.jpg' key='key_0' src='https://appserversrc.8btc.com/images/2020041610034228132.jpg' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loaded'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610035061165.jpg' key='key_1' src='https://appserversrc.8btc.com/images/2020041610035061165.jpg' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loaded'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610040016021.jpg' key='key_2' src='https://appserversrc.8btc.com/images/2020041610040016021.jpg' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loaded'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610041291418.jpg' key='key_3' src='/inset/content.png' data-loading='https://m.chainnode.com//inset/content.png' data-error='/inset/content.png' lazy='loading'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610042137151.jpg' key='key_4' src='/inset/content.png' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loading'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610042892254.jpg' key='key_5' src='/inset/content.png' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loading'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610044012731.jpg' key='key_6' src='https://m.chainnode.com//inset/content.png' data-loading='/inset/content.png' data-error='/inset/content.png' lazy='loading'></p><p><img data-src='https://appserversrc.8btc.com/images/2020041610044713139.jpg' key='key_7' src='/inset/content.png' data-loading='/inset/content.png' data-error='https://m.chainnode.com/inset/content.png' lazy='loading'></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p></div>"}   
       }
   },
   methods:{
       goBuy(){
           if(getApp().globalData.user==null||getApp().globalData.user==false){
               uni.navigateTo({url:"/pages/login/login"})
               return;
           }
           console.log(getApp().globalData.user);
           this.msg="正在抢购..."



       }
   }
}
</script>

<style lang="scss">
.top{
    image{
        width:100%;
        height: 30vh;
    }
}

.name{
    font-size: 32rpx;
    padding: 10rpx 15rpx;
    
}

.price{
     padding: 10rpx 15rpx;
    font-weight:bold;
    color: #EE0000;
    font-size: 40rpx;
}

.content{
    width: 100;
     padding: 10rpx 15rpx;
     image{
         width: 100%;
     }
     img{
         width:100%;
     }
}


.bottom{
    display: flex;
    flex-direction: row;
    height:80rpx;
    position: fixed;
    bottom: 0px;
    z-index: 111;
    align-items: center;
    width:100%;
    background-color: white;
    .home{
        width:15%;
        height: 100%;
        image{
            height:40rpx;
            margin:auto;
        }
        .info{
            text-align: center;
        }
    }

    
    
    .addCart{
        display: flex;
        justify-content: center;
         align-items: center;
        width:45%;
        height: 100%;
        
        color: white;
        background-color: #282828;

        text{
            padding: 3rpx;
            background-color: #E80376;
            color: white;
            border-radius: 5rpx;
        }
    }

    .buy{
        display: flex;
        justify-content: center;
        align-items: center;
        width:40%;
        height: 100%;
        color: white;
        background-color: #00A494;
    }
    
}
</style>