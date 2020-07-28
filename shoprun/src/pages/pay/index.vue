<template>
  <view class="pay">
      <navigator class="addr" url="/pages/addr/new">
          <text>请添加收货地址</text><text>></text>
      </navigator>
      <view class="shop">
          <view class="left">
              <image mode="aspectFill" :src="shop.img"></image>
              <view class="content">
                  <view class="title">
                      {{shop.name}}
                  </view>
                  <view class="price">
                      ¥{{shop.price}}
                  </view>
              </view>
          </view>
          <view class="right">
              x1
          </view>
      </view>

      <view class="word">
          <text>买家留言</text><input type="text" placeholder="最多45个字，如需电子发票请填写邮箱"></input>
      </view>
     
      
       <view class="money">
          <view class="amount">
              <text>商品金额</text>
              <text>{{shop.price}}</text>
          </view>
          <view class="amount">
              <text>运费(包邮)</text>
              <text>¥0</text>
          </view>
      </view>

      <view class="buys">
          <image mode="heightFix" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3494098844,2004389666&fm=26&gp=0.jpg"></image>
        <image mode="heightFix" style="height:40rpx" src="http://img02.taobaocdn.com:80/tfscom/TB16YTtLWL7gK0jSZFBXXXZZpXa"></image>
        
      </view>


      <view class="go">
          <view class="money">
              合计<text style="color:#EE0000;font-weight:bold;">¥</text><text style="color:#EE0000;font-weight:bold;font-size:34rpx">{{shop.price}}</text>
          </view>
          <view class="btn">
              提交订单
          </view>
      </view>
     
  </view>
</template>

<script>
export default {
    data(){
        return {
           shop: {img:"https://appserversrc.8btc.com/images/becff4e5bcd274f72d1e9c1654f77389.jpg",
           name:"重磅出品！链作联合巴比特推出产业区块链图册",
           price:"58"}
       }
    }
}
</script>

<style lang="scss">
.pay{
    width:100vw;
    min-height:100vh;
    background-color: #EEEEEE;
}
.addr{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30rpx 20rpx;
    background-color: white;
    border: 1px 1px 5px rgba(0,0,0,0.2);
    font-size: 30rpx;
    color: black;
}

.shop{
   
    margin-top:20rpx;
    width: 100%;
    height: 200rpx;
    padding: 130rpx 30rpx;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 1px 1px 5px rgba(0,0,0,0.2);

    .left{
        width:90%;
        display: flex;
        flex-direction: row;
        // justify-content: center;
        // align-items: center;
        
        image{
            height: 200rpx;
            width:40%;
        }

        .content{
            padding-left: 15rpx;
            width:60%;
            display: flex;
            flex-direction: column;

            .title{
                color: #777;
                font-weight: bold;
                font-size: 30rpx;
            }

            .price{
                margin-top:10rpx;
                color: #EE0000;
                font-weight: bold;
            }
        }
    }
    .right{
        text-align: right;
        width: 10%;
    }
}

.word{
    margin-top:20rpx;
    display: flex;
    flex-direction: row;
    align-items: content;
    padding: 30rpx 20rpx;
    background-color: white;
    border: 1px 1px 5px rgba(0,0,0,0.2);
    font-size: 30rpx;
    color: black;
    text{
        // background-color: red;
        height: 57rpx;
        line-height: 57rpx;
        width:20%;
    }
    input{
        margin-left: 15rpx;
        width:80%;
        height: 57rpx;
    }
}
.money{
    margin-top:20rpx;
    display: flex;
   
    padding: 10rpx 20rpx 20rpx 20rpx;
    background-color: white;
    border: 1px 1px 5px rgba(0,0,0,0.2);
    flex-direction: column;

    .amount{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 10rpx;
    }

    
}

.buys{
    margin-top:20rpx;
    padding: 20rpx 20rpx;
    background-color: white;
    border: 1px 1px 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    image{
        height:70rpx;
    }
}

.go{
    position: fixed;
    z-index: 999;
    bottom: 0px;
    left:0px;
    background-color: white;
    height: 70rpx;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .btn{
        padding:10rpx 30rpx;
        background-color: #E80376;
        border-radius: 7rpx;
        color: white;
    }

    .money{

        display: flex;
        flex-direction: row;
        align-items: center;

    }
}
</style>