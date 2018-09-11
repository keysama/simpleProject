import axios from './index.js';

export const chackName = (data)=>{
	return axios.post('api/account/checkusername',data)
};

export const registe = (data)=>{
	return axios.post('api/account/registe',data)
};

export const phoneVerify = (data)=>{
	return axios.post('api/verify/send',data)
};

export const checkVerify = (data)=>{
	return axios.post('api/verify/check',data)
};

export const login = (data)=>{
	return axios.post('api/account/login',data)
};

export const logout = ()=>{
	return axios.post('api/account/logout')
};

export const checkLogin = (id)=>{
	return axios.post('api/account/checkLogin',{id:id})
};

export const editInfo = (data)=>{
	return axios.post('api/account/editInfo',data)
};

export const editPass = (data)=>{
	return axios.post('api/account/editPass',data)
};

export const getAmount = (id)=>{
	return axios.post('api/account/getAmount',{id:id})
};
