<template>
  
  <view>
    <swiperAction @swiperAction="handleSwiperAction">
        <image :src="'http://anets.top/'+imgDetail.preview">
       </image>
    </swiperAction>
      
      <view class="btn" @click="download()">
          <view class="download">
              Download
          </view>
      </view>
  </view>
</template>

<script>
import swiperAction from "@/components/swiperAction"
export default {
    components:{swiperAction},
    data(){
        return {
            imgDetail:{},
            imgIndex:0,
            imgList:[]
        }
    },
   onLoad(){
       console.log(getApp().globalData);
       const {imgList,imgIndex} =getApp().globalData;
       this.imgDetail=imgList[imgIndex];
       this.imgIndex=imgIndex;
       this.imgList=imgList;

   },
   methods:{
       handleSwiperAction(e){
         console.log(e);
         if(e.direction=="left"&&this.imgIndex<this.imgList.length-1){
            //  左滑
            this.imgDetail=this.imgList[++this.imgIndex];
         }else if(e.direction=="right"&&this.imgIndex>0){
            this.imgDetail=this.imgList[--this.imgIndex];
         }else{
             uni.showToast({
                 title:"没有数据了",
                 icon:"none"
             });
         }
       },
       async download(){
        await uni.showLoading({title:"下载中"})
        //    将远程文件下载到小程序内存中
         const result=await uni.downloadFile({url:'http://anets.top/'+this.imgDetail.preview});
         if(result.length==1){
                uni.showToast({
                    title:result[0].errMsg,
                    icon:"none"
                });
                return;
         }
         const {tempFilePath} = result[1];

        //  将小程序的临时文件下载到本地
        const result2=await uni.saveImageToPhotosAlbum({filePath:tempFilePath})

        console.log("下载成功");
        uni.hideLoading();

        await uni.showToast({title:"下载成功"})
       }
   }

}
</script>

<style lang="scss">
.btn{
    height:120rpx;
    display: flex;
    align-items: center;
    justify-content: center;

    .download{
        color:white;
      width: 90%;
      height:85%;
      background-color: $color;
      font-size: 50rpx;
      font-weight: 600;
      display: flex;
       align-items: center;
      justify-content: center;
    }
}
</style>