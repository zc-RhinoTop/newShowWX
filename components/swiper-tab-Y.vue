<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-y="true">
			<block v-for="(item,index) in firstCategory" :key="item.categoryId">
				<view class="item" 
				:class="{'active_item':isActive==index}"
				@tap="tabtap(index)"
				>
				{{item.categoryName}}
				</view>
			</block>
		</scroll-view>
		</view>
</template>

<script>
	export default {
		props:{
			firstCategory:Array,
			isActive:Number
		},
		data() {
			return {
				
			};
		},
		methods: {
			tabtap(index) {
				this.$emit('tabtap',index)
				// this.isActive=index;
			}
		}
	}
</script>

<style lang="scss">
 .item{
	 	 text-align: center;
	 	 line-height: 80upx;
	 	 width: 160upx;
	 	 height: 80upx;
	 	 color: #333333;
	 	 font-size: 26upx;
	 	 background-color: #f2f2f2;
	  }
	  .active_item{
	  	 box-sizing: border-box;
	  	 color:#F23F3B!important;
	  	 border-left: 8upx solid #F23F3B;
	  }
</style>
