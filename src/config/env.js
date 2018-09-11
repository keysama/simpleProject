let baseUrl = ''; //api请求发送的域名
let AxiosWithCredentials = false;

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:8083/';
    AxiosWithCredentials = true;

}else if(process.env.NODE_ENV == 'production'){
    baseUrl = 'http://111.230.249.243:8083/';
    AxiosWithCredentials = false;
}
export {
    baseUrl,
    AxiosWithCredentials
}