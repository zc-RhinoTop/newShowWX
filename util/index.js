import request from "./request.js"

export function getIndexList(){
	return request({
		url: '/index/loadIndexData'
	})
}
export function getStores(latitude,longitude){
	return request({
		url:'/getPoint/listPoint',
		method:'get',
		header:{
			'content-type':'application/x-www-form-urlencoded'
		},
		data:{
			latitude,
			longitude
		}
	})
}
export function getSpecialData(){
	return request({
		url:'/index/bargainPriceCommodityList',
		data:{
			pageNum:1,
			pageRow:100,
			queryName:''
		}
	})
}