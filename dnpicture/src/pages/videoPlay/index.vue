<template>
  <view class="play">
      <image :src="'http://anets.top/'+videoObj.preview"></image>
      <view class="tool">
          <view class="iconfont iconshengyin"></view>
          <view class="iconfont iconzhuanfa">
              <button open-type="share"></button>
          </view>
      </view>

      <view class="wrap">
          <video objectFit="fill" src="http://okzy.xzokzyzy.com/20200620/11543_472dc79e/万界神主第103话.mp4"></video>
      </view>

      <view class="download">
          <view class="btn" @click="download()">
              DOWNLOAD
          </view>
      </view>
  </view>
</template>

<script>
export default {
    data() {
        return {
            videoObj: {}
        }
    },
    created(){
        console.log(getApp().globalData.item);
        this.videoObj=getApp().globalData.item;
    },
    methods:{
        async download(){
            await uni.showLoading({title:"下载中"});
            // 将远程文件下载到小程序内存
            const result= await uni.downloadFile({url:"http://okzy.xzokzyzy.com/20200620/11543_472dc79e/万界神主第103话.mp4"});
            console.log(result);
            if(result.length==1){
                uni.showToast({
                    title:result[0].errMsg,
                    icon:"none"
                });
                return;
            }
            const {tempFilePath} = result[1];
           
            console.log(tempFilePath);
            // 将内存中的文件保存到本地
            console.log("下载完毕");
            await uni.saveVideoToPhotosAlbum({
                filePath:tempFilePath
            })
            uni.hideLoading();

            await uni.showToast({title:"下载成功"});
            
        }
    }
}
</script>

<style lang="scss" scoped>
.play{
    position: relative;
    image{
       position: absolute;
       width: 100vw;
       height: 100vh;
       z-index: -1;
       filter: blur(20px);
    }
    .tool{
        height: 80rpx;
        display: flex;
        justify-content: flex-end;

        .iconfont{
            width:80rpx;
            color: white;
            font-size: 50rpx;
            border-radius: 40rpx;
            background-color: rgba(0, 0,0,.2);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20rpx;
        }

        .iconzhuanfa{
            position: relative;
            button{
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
        }
    }

    .wrap{
        display: flex;
        justify-content: center;
        video{
            width: 80%;
            height: 150px;
        }

        
    }


    .download{
        display: flex;
        justify-content: center;
        margin-top:30rpx;
            .btn{
                width: 360rpx;
                height: 80rpx;
                border-radius: 40rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                border: 1rpx solid #fff;    
                background-color: rgba(0, 0,0,.6);
            }
    }
}
</style>