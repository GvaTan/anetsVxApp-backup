<template>
	<view class="content">
		<view  class="sass">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content{
		.sass{
			width:750rpx;
			height:30px;
			background-color: $uni-color-primary;
		}
	}
</style>
