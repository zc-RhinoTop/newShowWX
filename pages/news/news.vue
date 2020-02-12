<template>
	<view class="news">
	<swiper-tab-Y :firstCategory="firstCategory" :isActive="isActive" @tabtap="tabtap"></swiper-tab-Y>
		<view class="right">
			1
		</view>
	</view>
</template>

<script>
	import { getNewsList,getSecondList } from "../../util/news.js"
	import swiperTabY from "../../components/swiper-tab-Y.vue"
	export default {
		components:{
			swiperTabY
		},
		data() {
			return {
				firstCategory:[],
				isActive:0,
				parentId:''
			}
		},
		onLoad(options) {
			getNewsList().then(res=>{
				if(res.data.code == 100){
					console.log(res)
					this.firstCategory = res.data.info
					this.parentId=this.firstCategory[0].categoryId
				}
			});
			getSecondList(this.parentId).then(res=>{
				if(res.data.code == 100){
					console.log(res)
				}
			})
		},
		methods: {
			tabtap(index) {
				this.isActive=index;
				}
		}
	}
</script>

<style lang="scss">
 .news{
	 display: flex;
	
 }

</style>
