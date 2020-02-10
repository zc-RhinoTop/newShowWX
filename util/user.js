import request from "./request.js"

export function getWxDecode(encryptedData,iv,code){
	return request({
		url: '/wxLogin/decodeUserInfo',
		method:'get',
		data:{
			encryptedData,
			iv,
			code
		}
	})
}
export function getWxLogin(unionId,loginType){
	return request({
		url: '/wxLogin/login',
		data:{
			unionId,
			loginType
		}
	})
}