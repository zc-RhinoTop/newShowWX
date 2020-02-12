import request from "./request.js"

export function getNewsList(){
	return request({
		url: '/index/loadFirstCategory'
	})
}

export function getSecondList(parentId){
	return request({
		url: '/index/loadSecondCategory',
		data:{
			parentId
		}
	})
}