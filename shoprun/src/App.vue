<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		created(){
		},
		data(){
			return {
				
			}
		},
		globalData:{
			user:null
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./styles/iconfont.wxss";
	@import "./styles/base.wxss";


</style>
