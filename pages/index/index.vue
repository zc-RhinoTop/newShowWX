<template>
	<view class="home">
		<view class="nav">
			<view class="iconfont icon-weizhi">		
			<text>当前自取点:  厦门集美总店</text>
			</view>
			<view class="box">
				<image src="../../static/slider/search.png" mode=""></image>
				<input type="text" value="" placeholder=" 统一品牌满九减2" placeholder-class="place-hoder"/>
			</view>
		</view>
		<view class="slider">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in advertList" :key="item.id">
					<view class="swiper-item"><image :src="item.AdvertImgUrl" mode=""></image></view>
				</swiper-item>
			
			</swiper>
		</view>
	</view>
</template>

<script>
	import { getIndexList } from "../../util/index.js"
	export default {
		data() {
			return {
				advertList:[]
			}
		},
		onLoad(options) {
			getIndexList().then(res => {
				if(res.data.code == 100){
					console.log(res)
					 this.advertList=res.data.info.advertList
				}else{
					return uni.showToast({
						title: '获取数据失败'
					})
				}
			});
			// getWxDecode(this.encryptedData,this.iv,this.code).then(res => {
			// 		console.log(res)
			// }),
			// getWxLogin(this.unionId,this.loginType).then(res => {
			// 	if(res.data.code == 100){
			// 		console.log(res)
			// 	}
			// })
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.home{
		display: flex;
		flex-direction: column;
		.nav{
			background-color: #FB8629;
			width: 100%;
			height: 170rpx;
			.iconfont{
				font-size: 48rpx;
				height: 48rpx;
				color: #FFFFFF;
				padding: 20rpx 20rpx;
				display: flex;
				text{
					margin-top: 4rpx;
					align-items: center;
					height: 48rpx;
					font-size: 28rpx;
					color: #FFFFFF;
				}
			}
			.box{
				display: flex;
				text-align: center;
				input{
					position: absolute;
					width: 702rpx;
					height: 60rpx;
					border-radius: 30rpx;
					border: 1px solid rgba($color: #ffffff, $alpha: 0.5);
					background: inherit;
					margin: 0 20rpx 20rpx 20rpx;
					.place-hoder{
						color: #BCBCBC;
						font-size: 24rpx;
						text-align: center;
					}
				}
				image{
					width: 34rpx;
					height: 34rpx;
					margin: 16rpx 0 0 240rpx;
					position: relative;
				}
			}
		
	}
   .slider{
	   display: flex;
	   flex-direction: column;
	   background-color: #f23f3b;
	   swiper{
		   margin: 30rpx 24rpx 30rpx 24rpx;
		   border-radius: 30rpx;
		   width: 702rpx;
		   height: 336rpx;
		   image{
		    		 width: 702rpx;
		    		 height: 336rpx;
		    }
	   }
	 
   }
	
	}
</style>
