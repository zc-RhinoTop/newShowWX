<template>
	<view class="index">
		<view class="index-top">
			<view class="map">
				<text class="iconfont icon-icon-test1"></text><text>当前自取点：厦门集美总店</text>
			</view>
			<view class="inde-search" @tap="toSerach">
				<icon class="icon-search" type="search" size="14" /><text>统一品牌满9减2</text>
			</view>
		</view>
		<scroll-view class="index-main" scroll-y enable-back-to-top>
			<view class="slider">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="item in advertList" :key="item.id">
						<view class="swiper-item">
							<image :src="item.AdvertImgUrl" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="category">
				<swiper indicator-dots indicator-active-color='#FB8629' style="height: 410upx;padding: 0 24upx;">
					<swiper-item v-for="(item,index) in newDemo" :key='index' class="category-box">
						<view v-for="(list,i) in item" :key='i' class="category-item" @tap="goCategory(i,list.categoryId)">
							<image class="category-img" :src="list.imgUrl" mode="widthFix" />
							<view class="category-text">{{list.categoryName}}</view>
						</view>
					</swiper-item>
				</swiper>
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
		</scroll-view>
	</view>
</template>

<script>
	import {
		getIndexList
	} from "../../util/index.js"
	export default {
		data() {
			return {
				advertList: [],
				category: [],
				goods: [],
				stores: ''
			}
		},
		onLoad(options) {
			getIndexList().then(res => {
				if (res.data.code == 100) {
					console.log(res)
					this.advertList = res.data.info.advertList
					this.category = res.data.info.categoryList
					this.goods = res.data.info.bargainCommodityList
				} else {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
			})
		},
		methods: {
			toSerach() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
			goCategory(index, id) {
				uni.switchTab({
					url: '/pages/category/category'
				})
				uni.$emit('onceKinds', {
					index: index,
					id: id
				})
			}
		},
		computed: {
			newDemo() {
				if (this.category.length > 10) {
					let arr = []
					for (let i = 0; i < this.category.length; i += 10) {
						arr.push(this.category.slice(i, i + 10))
					}
					return arr
				} else {
					return this.category
				}
			}
		},
	}
</script>

<style lang="scss">
	.index {
		display: flex;
		flex-direction: column;
		height: 100%;
		.index-top {
			height: 170upx;
			background-color: #FB8629;
			color: $uni-text-color-inverse;
			padding: 0 20upx;
			.map {
				height: 90upx;
				line-height: 90upx;
			}
			.inde-search {
				height: 60upx;
				border-radius: 30upx;
				background-color: $uni-bg-color;
				text-align: center;
				line-height: 60upx;
				color: #CCCCCC;
			}
			.icon-search {
				padding-right: 10upx;
			}
		}
		.index-main {
			height: calc(100% - 170upx);
			.slider {
				display: flex;
				flex-direction: column;
				background-color: $index-slide-bgColor;
				swiper {
					margin: 30upx 24upx 30upx 24upx;
					border-radius: 30upx;
					width: 702upx;
					height: 336upx;
					image {
						width: 702upx;
						height: 336upx;
					}
				}
			}
			.category {
				background-color: $index-slide-bgColor;
				padding: 20upx 0;
				.category-box {
					display: flex;
					flex-flow: row wrap;
					background-color: #FFFFFF;
					border-radius: 20upx;
					.category-item {
						width: 20%;
						text-align: center;
						.category-img {
							width: 92upx;
						}
					}
				}
			} 	
			.perch {
				width: 100%;
				height: 60upx;
				background-color: $index-slide-bgColor;
			}

			.perchImg {
				display: flex;
				margin-top: -20upx;

				image {
					width: 160upx;
					height: 90upx;
				}
			}

			.specialTitle {
				width: 100%;
				height: 60upx;
				display: flex;
				justify-content: center;

				.titleImg1 {
					width: 60upx;
					height: 60upx;
				}

				text {
					font-size: 36upx;
					color: #333333;
					font-weight: bold;
				}

				.titleImg2 {
					margin-top: 20upx;
					width: 40upx;
					height: 40upx;
				}
			}

			.specialImg {
				width: 702upx;
				height: 390upx;
				margin: 30upx 20upx 10upx 24upx;

				image {
					width: 702upx;
					height: 390upx;
				}
			}

			.ImgTitle {
				margin: 0 0 10upx 10upx;
				font-size: 28upx;
				color: #333333;
				font-weight: bold;
			}

			.ImgPirce {
				margin: 0 0 0 15upx;

				.specialPrice {
					color: #ff0000;
					font-size: 36upx;
					font-weight: bold;
				}

				.origiPrice {
					text-decoration: line-through;
					margin-left: 20upx;
					color: #949494;
					font-size: 24upx;
				}
			}

			.precell {
				font-size: 24upx;
				display: flex;
				justify-content: space-evenly;

				.time {
					color: #ff9900;
				}

				.soldOut {
					color: #ff0000;
				}
			}

			.pickUpGoods {
				font-size: 24upx;
				display: flex;
				justify-content: space-evenly;

				.time {
					color: #ff9900;
				}

				.bounds {
					color: #ff0000;
				}
			}

			.specialBtn {
				width: 100%;
				height: 120upx;
				margin-top: 10upx;
				display: flex;
				justify-content: space-evenly;
				border-radius: 60upx;

				button {
					width: 316upx;
					height: 70upx;
					align-items: center;
				}

				.openBtn {
					background: linear-gradient(90deg, rgba(255, 204, 102, 1) 0%, rgba(255, 204, 102, 1) 1%, rgba(255, 102, 51, 1) 100%, rgba(255, 102, 51, 1) 100%);
				}

				image {
					width: 60upx;
					height: 42upx;
					margin: 14upx 0 0 20upx;
				}
			}

			.perchBottom {
				background-color: #FFFFFF;
				border-top: 2upx solid rgb(242, 242, 242);
				width: 100%;
				height: 66upx;
			}

			.perch2 {
				width: 100%;
				height: 15upx;
				background-color: $index-slide-bgColor;
			}
		}
	}
</style>
