<script>
	import {login} from './util/user.js'
	export default {
		onLaunch: function() {
			this.getUser()
			this.refresh()
		},
		methods:{
			getUser(){
				if(uni.getStorageSync('login')){
					login(uni.getStorageSync('unionid')).then(res=>{
						console.log(res)
						if(res.data.code == 100){
							this.$store.commit('setUserInfo',res.data.info.user)
							uni.setStorageSync('sessionId',res.data.info.sessionId)
						}
					})
				}
			},
			refresh(){
				let that = this
				setInterval(that.getUser,20*60*1000)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';
	@import './common/icon.css';
	/* page{
		height: 100%;
	} */
</style>
