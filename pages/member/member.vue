<template>
	<view class="member">
		<view class="head">
			<view class="photo">
				<image src="../../static/image/m1.png"></image>
			</view>
			<view class="loginBtn">
				<button type="default" plain="true" size="mini">登录/注册</button>
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
			<view class="solBox" v-for="(item,index) in mbSol" :key="index">
					 <image :src="item.solImg"></image>
					 <text>{{item.solText}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mbList:[
					{
						mbImg:'../../static/image/m2.png',
						mbText:'待付款'
					},
					{
						mbImg:'../../static/image/m3.png',
						mbText:'待发货'
					},
					{
						mbImg:'../../static/image/m4.png',
						mbText:'已发货'
					},
					{
						mbImg:'../../static/image/m5.png',
						mbText:'已收货'
					}
					],
				mbSol:[
						{
							solImg:'../../static/image/m6.png',
							solText:'收货地址'
						},
						{
							solImg:'../../static/image/m7.png',
							solText:'全部订单'
						},
						{
							solImg:'../../static/image/m8.png',
							solText:'退款申请'
						},
						{
							solImg:'../../static/image/m9.png',
							solText:'关于我们'
						}
					]
			}		
		
		},
}
</script>

<style lang="scss">
 .member{
	 display: flex;
	 flex-direction: column;
	 .head{
		 display: flex;
		 width: 100%;
		 height: 260upx;
		 background-color: #FB8629;
		 .photo{
			 margin: 60upx 60upx 0 60upx;
			 image{
				 width: 140upx;
				 height: 140upx;
			 }
		 }
		 .loginBtn{
			 margin: 110upx 0 0 0;
			 button{
				 border-radius: 40upx;
				 border-color: #FFFFFF;
				 color: #FFFFFF;
			 } 
		 }
	 }
 .perch{
	 width: 100%;
	 image{
		 margin:-74upx 0 0 -25upx;
		 width: 810upx;
		 height: 240upx;
	 }
	 .mbList{
		 margin-top: -115upx;
		 display: flex;
		 justify-content: space-evenly;
		 .mbBox{
			 width: 80upx;
			 height: 100upx;
			 text-align: center;
			 image{
				 margin-left: 10upx;
			 			 width: 60upx;
			 			 height: 60upx;
			 }
			 text{
				 margin-top: -20upx ;
			 			 color: #333333;
			 			 font-size: 26upx;
			 }
		 }
		 
	 }
 }
.perchBg{
	width: 100%;
	height: 30upx;
	background-color: #f5f5f5;
}
 .mbSol{
	 flex:1;
	 margin-top: 100upx;
	 display: flex;
	 flex-direction: column;
	 width: 100%;
	 height: 100%;
	 color: #333333;
	 font-size: 26upx;
	 .solBox{
		 display: flex;
		 width: 100%;
		 height: 100upx;
		 line-height: 100upx;
		 align-items: center;
		 background-color: #FFFFFF;
		 image{
			 width: 60upx;
			 height: 56upx;
			 margin-left: 40upx;
		 }
		 text{
			 margin-left: 40upx;
		 }
	 }
 }
 }
</style>
