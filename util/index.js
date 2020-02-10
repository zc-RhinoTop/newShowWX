import request from "./request.js"

export function getIndexList(){
	return request({
		url: '/index/loadIndexData'
	})
}