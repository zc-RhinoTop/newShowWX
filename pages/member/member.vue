<template>
	<view class="member">
	<view v-if="!isLogin" class="header">
		<view class="unlogin"/>
		<view class="">
			<button class="login-text"
			open-type="getUserInfo" @tap="sign">登录/注册</button>
		</view>
	</view>
	<view v-else  class="header">	
		<view class="login">
			<image :src="user.avatarUrl" mode=""></image>
		</view>
		<view class="info">
			<view class="name">{{user.nickName}}</view>
			<view class="tel">{{user.userName}}</view>
		</view>
	</view>
		<view class="perch">
			<image src="../../static/image/mBg.png"></image>
			<view class="mbList">
				<view class="mbBox" v-for="(item,index) in mbList" :key="index">
					<image :src="item.mbImg"></image>
					<text>{{item.mbText}}</text>
				</view>
			</view>
		</view>
		<view class="perchBg"></view>
		<view class="mbSol">
			<view class="solBox" v-for="(item,index) in mbSol" :key="index" @tap="indexLink(index)">
				<image :src="item.solImg"></image>
				<text>{{item.solText}}</text>
			</view>
		</view>
		<view class="sign-login">
			退出登录
		</view>
	</view>
</template>

<script>
	import {
		getWxDecode,
		login
	} from "../../util/user.js"
	export default {
		data() {
			return {
				user:{},
				unionid:'',
				isLogin:uni.getStorageSync('login'),
				mbList: [{
						mbImg: '../../static/image/m2.png',
						mbText: '待付款'
					},
					{
						mbImg: '../../static/image/m3.png',
						mbText: '待发货'
					},
					{
						mbImg: '../../static/image/m4.png',
						mbText: '已发货'
					},
					{
						mbImg: '../../static/image/m5.png',
						mbText: '已收货'
					}
				],
				mbSol: [{
						solImg: '../../static/image/m6.png',
						solText: '收货地址'
					},
					{
						solImg: '../../static/image/m7.png',
						solText: '全部订单'
					},
					{
						solImg: '../../static/image/m8.png',
						solText: '退款申请'
					},
					{
						solImg: '../../static/image/m9.png',
						solText: '关于我们'
					}
				]	
			}

		},
		onLoad() {
			if(this.isLogin){
				this.user=this.$store.getters.getUserInfo
			}
			this.unionid=uni.getStorageSync('unionid')
		},
		methods: {
			sign(){
				if(this.unionid){
					this.user = this.$store.getters.getUserInfo()
				}else{
					uni.navigateTo({
						url:'/pages/member/login'
					})
				}
			},
			indexLink(index){
				console.log(index)
				if(index==0){
					uni.navigateTo({
						url:'/pages/deliveryAddress/deliveryAddress'
					})
				}else if(index==1){
					uni.navigateTo({
						url:'/pages/allOrders/allOrders'
					})
				}else if(index==2){
					uni.navigateTo({
						url:'/pages/applicationForDrawback/applicationForDrawback'
					})
				}else{
					uni.navigateTo({
						url:'/pages/aboutUs/aboutUs'
					})
				}
			},
			signOut(){
				uni.removeStorageSync('login')
				this.isLogin = false
				uni.showToast({
					title:'退出成功'
				})
			}
		}
	}
</script>

<style lang="scss">
	.member {
		display: flex;
		flex-direction: column;

		.header{
			width: 100%;
			height: 260upx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: url(../../static/image/u6.png) no-repeat center/100%;
			.unlogin{
				margin: 0 40upx;
				width: 156upx;
				height: 156upx;
				border-radius: 50%;
				background: #F7F7F7 url(../../static/image/u1146.png) no-repeat center;
				background-size: 140upx 140upx;
			}
			.login{
				margin: 0 40upx;
				width: 156upx;
				height: 156upx;
				border-radius: 50%;
				overflow: hidden;
				&>image{
					width: 100%;
					height: 100%;
				}
			}
			.info{
				color: #fff;
				.name{
					padding-bottom: 20rpx;
				}
			}
			.login-text{
				width: 172upx;
				height: 60upx;
				font-size: 26upx;
				border-radius: 40upx;
				border: 1px solid #fff;
				text-align: center;
				line-height: 60upx;
				padding: 0;
				background-color: #FB8629;
				color: #fff;
			}
			
		}
		.perch {
			width: 100%;

			image {
				margin: -74upx 0 0 -25upx;
				width: 810upx;
				height: 240upx;
			}

			.mbList {
				margin-top: -115upx;
				display: flex;
				justify-content: space-evenly;

				.mbBox {
					width: 80upx;
					height: 100upx;
					text-align: center;

					image {
						margin-left: 10upx;
						width: 60upx;
						height: 60upx;
					}

					text {
						margin-top: -20upx;
						color: #333333;
						font-size: 26upx;
					}
				}

			}
		}

		.perchBg {
			width: 100%;
			height: 30upx;
			background-color: #f5f5f5;
		}

		.mbSol {
			flex: 1;
			margin-top: 100upx;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			color: #333333;
			font-size: 26upx;

			.solBox {
				display: flex;
				width: 100%;
				height: 100upx;
				line-height: 100upx;
				align-items: center;
				background-color: #FFFFFF;
				border-bottom: 2upx solid beige;
				image {
					width: 60upx;
					height: 56upx;
					margin-left: 40upx;
				}

				text {
					margin-left: 40upx;
				}
			}
		}
		
		.sign-login{
			margin-top: 20upx;
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			background-color: #FFFFFF;
			color: #333333;
			border-bottom: 2upx solid beige;
			border-top: 2upx solid beige;
		}
	}
</style>
