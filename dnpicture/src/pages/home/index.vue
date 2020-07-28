<template>
  <view>
      <view class="home_tab">
        <view class="title">
            <view class="title-inner">
                <uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem" style-type="text" active-color="#4cd964"></uni-segmented-control>
            </view>
            <view class="iconfont iconsearch">
                
            </view>
        </view>
        <view class="content">
            <view v-if="current === 0">
                <homeRecommend></homeRecommend>
            </view>
            <view v-if="current === 1">
                <homeCategory></homeCategory>
            </view>
            <view v-if="current === 2">
                <homeNew></homeNew>
            </view>
            <view v-if="current === 3">
                <homeAlbum></homeAlbum>
            </view>
         </view>
      </view>
  </view>
</template>

<script>
import homeAlbum from "./home-album"
import homeCategory from "./home-category"
import homeNew from "./home-new"
import homeRecommend from "./home-recommend"

import {uniSegmentedControl} from '@dcloudio/uni-ui'
export default {
    components:{homeAlbum,homeCategory,homeNew,homeRecommend,uniSegmentedControl},
    data(){
        return {
            items:[
                {title:'推荐'},
                {title:"分类"},
                {title:"最新"},
                {title:"专辑"}
            ],
            current:0
        }
    },
    methods:{
        onClickItem(e){
            if(this.current!==e.currentIndex){
                this.current=e.currentIndex;
            }
        }
    },
    onLoad(){
        console.log("启动");
        this.request({
            url:"http://anets.top/api/translate.action?query=我们",
        })
        .then(res=>{
            console.log(res);
        })
    }
}
</script>

<style lang="scss">
.home_tab{
    .title{
        position: relative;
        .title-inner{
            width: 60%;
            margin: 0 auto;
        }
        .iconsearch{
            position: absolute;
            top:50%;
            transform: translate(0,-50%);
            right: 5%;
        }
    }
    .content{

    }
}
</style>