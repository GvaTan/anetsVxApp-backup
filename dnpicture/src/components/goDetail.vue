<template>
  <view @click="handleClick()">
      <slot></slot>
  </view>
</template>

<script>
export default {
  props:{
      list:Array,
      index:Number
  },
  mounted(){
      console.log(this.list);
      console.log(this.index);
  },
  methods:{
      handleClick(){
        
        //   1将数据缓存下来
        getApp().globalData.imgList=this.list;
        getApp().globalData.imgIndex=this.index;
        // 2再实现点击跳转页面
        console.log("跳转中...");
        uni.navigateTo({
            url:"/pages/imageDetail/index"
        });
      }
  }
}
</script>

<style>

</style>