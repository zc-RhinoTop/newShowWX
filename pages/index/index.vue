<template>
	<view class="home">
		<view class="nav">
			<view class="iconfont icon-weizhi">		
			<text>当前自取点:  厦门集美总店</text>
			</view>
			<view class="box">
				<image src="../../static/image/search.png" mode=""></image>
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
		<view class="classSlider">
			<view class="csBox">
				<swiper :indicator-dots="true" :duration="1000">
					<swiper-item >
				     <view class="swiper-item"  v-for="(item,index) in csList" :key="index">
						 <image :src="item.csImg"></image>
						 <text>{{item.csText}}</text>
					 </view>
					 </swiper-item>
					 <swiper-item >
					  <view class="swiper-item"  v-for="(item,index) in csList2" :key="index">
					 	 <image :src="item.csImg"></image>
					 	 <text>{{item.csText}}</text>
					  </view>
					  </swiper-item>
					 </swiper>
				</view>
			</view>
		<view class="perch"></view>
		<view class="perchImg">
			<image src="../../static/image/t1.png"></image>
			<image src="../../static/image/t1.png"></image>
			<image src="../../static/image/t1.png"></image>
			<image src="../../static/image/t1.png"></image>
			<image src="../../static/image/t1.png"></image>
		</view>
		<view class="specialTitle">
			<image class="titleImg1" src="../../static/image/g1.png"></image>
			<text>特价商品</text>
			<image class="titleImg2" src="../../static/image/g1.png"></image>
		</view>
		<view class="specialImg">
			<image src="../../static/image/g3.jpg"></image>
		</view>
		<view class="ImgTitle">
			京东生鲜 肉禽蛋品
		</view>
		<view class="ImgPirce">
			<text class="specialPrice">￥129</text>
			<text class="origiPrice">￥159</text>
		</view>
		<view class="precell">
			<view>
				预售时间：<text class="time">12.2</text>
			</view>
			<view>
				已售：<text class="soldOut">100</text>份
			</view>
		</view>
		<view class="pickUpGoods">
			<view>
				提货时间：<text class="time">11.2</text>
			</view>
			<view>
				限量：<text class="bounds">100</text>份
			</view>
		</view>
		<view class="specialBtn">
			<button class="openBtn" type="primary" size="mini">进入肉禽蛋品 		
			<image src="../../static/image/s1.png"></image>
			</button>
			<button type="warn" size="mini">加入购物车</button>
		</view>
		<view class="perchBottom"></view>
		<view class="perch2"></view>
</view>
</template>

<script>
	import { getIndexList } from "../../util/index.js"
	export default {
		data() {
			return {
				advertList:[],
				csList:[
					{
						csImg:'../../static/image/t2.png',
						csText:'水果'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'蔬菜'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'烧烤季'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'蔬菜豆品'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'海鲜水产'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'粮油调品'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'肉禽蛋品'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'牛奶面包'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'酒水饮料'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'休闲零食'
					}
				],
				csList2:[
					{
						csImg:'../../static/image/t2.png',
						csText:'熟食冻品'
					},
					{
						csImg:'../../static/image/t2.png',
						csText:'日用品'
					}
				]
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
			})
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
			height: 170upx;
			.iconfont{
				font-size: 48upx;
				height: 48upx;
				color: #FFFFFF;
				padding: 20upx 20upx;
				display: flex;
				text{
					margin-top: 4upx;
					align-items: center;
					height: 48upx;
					font-size: 28upx;
					color: #FFFFFF;
				}
			}
			.box{
				display: flex;
				text-align: center;
				input{
					position: absolute;
					width: 702upx;
					height: 60upx;
					border-radius: 30upx;
					border: 1px solid rgba($color: #ffffff, $alpha: 0.5);
					background: inherit;
					margin: 0 20upx 20upx 20upx;
					.place-hoder{
						color: #BCBCBC;
						font-size: 24upx;
						text-align: center;
					}
				}
				image{
					width: 34upx;
					height: 34upx;
					margin: 16upx 0 0 240upx;
					position: relative;
				}
			}
		
	}
   .slider{
	   display: flex;
	   flex-direction: column;
	   background-color: $index-slide-bgColor;
	   swiper{
		   margin: 30upx 24upx 30upx 24upx;
		   border-radius: 30upx;
		   width: 702upx;
		   height: 336upx;
		   image{
		    		 width: 702upx;
		    		 height: 336upx;
		    }
	   }
   }
	.classSlider{
		background-color: $index-slide-bgColor;
		.csBox{
			width: 702upx;
			height: 410upx;
			background-color: #FFFFFF;
			border-radius: 30upx;
			margin: 30upx 24upx 30upx 24upx;
			swiper{
				width: 670upx;
				height: 340upx;
				swiper-item{
					margin: 30upx 20upx 30upx 24upx;
					display: flex;
					flex-wrap: wrap;
					.swiper-item{
						width: 100upx;
						height: 150upx;
						color: #333333;
						font-size:24upx;
						text-align: center;
						margin: 0 24upx 10upx 10upx;
						image{
							width: 94upx;
							height: 94upx;
						}
					}
				}
			}
		}
	}
	.perch{
		width: 100%;
		height: 60upx;
		background-color: $index-slide-bgColor;
	}
	.perchImg{
		display: flex;
		margin-top: -20upx;
		image{
			width: 160upx;
			height: 90upx;
		}
	}
	.specialTitle{
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content: center;
		.titleImg1{
			width: 60upx;
			height: 60upx;
		}
		text{
			font-size: 36upx;
			color: #333333;
			font-weight: bold;
		}
		.titleImg2{
			margin-top: 20upx;
			width: 40upx;
			height: 40upx;
		}
	}
	.specialImg{
		width: 702upx;
		height: 390upx;
		margin: 30upx 20upx 10upx 24upx;
		image{
			width: 702upx;
			height: 390upx;
		}
	}
	.ImgTitle{
		margin: 0 0 10upx 10upx;
		font-size: 28upx;
		color: #333333;
		font-weight: bold;
	}
	.ImgPirce{
		margin: 0 0 0 15upx;
		.specialPrice{
			color: #ff0000;
			font-size: 36upx;
			font-weight: bold;
		}
		.origiPrice{
			text-decoration: line-through;
			margin-left: 20upx;
			color: #949494;
			font-size: 24upx;
		}
	}
	.precell{
		font-size: 24upx;
		display: flex;
		justify-content: space-evenly;
		.time{
			color:#ff9900;
		}
		.soldOut{
			color: #ff0000;
		}
	}
	.pickUpGoods{
		font-size: 24upx;
		display: flex;
		justify-content: space-evenly;
		.time{
			color:#ff9900;
		}
		.bounds{
			color: #ff0000;
		}
	}
	.specialBtn{
		width: 100%;
		height: 120upx;
		margin-top: 10upx;
		display: flex;
		justify-content:space-evenly;
		border-radius: 60upx;
		button{
			width: 316upx;
			height: 70upx;
			align-items: center;
		}
		.openBtn{
			background: linear-gradient(90deg, rgba(255, 204, 102, 1) 0%, rgba(255, 204, 102, 1) 1%, rgba(255, 102, 51, 1) 100%, rgba(255, 102, 51, 1) 100%);
		}
		image{
			width: 60upx;
			height: 42upx;
			margin: 14upx 0 0 20upx;
		}
	}
	.perchBottom{
		background-color: #FFFFFF;
		border-top: 2upx solid rgb(242,242,242);
		width: 100%;
		height: 66upx;
	}
	.perch2{
		width: 100%;
		height: 15upx;
		background-color: $index-slide-bgColor;
	}
}
</style>
