import App from '../App';
const index = r => require.ensure([],() => r(require('../views/index/index.vue')),'index')

export default [{
    path:'/',
    component:App,				//顶级路由，www.xxx.com/#/
    children:[
        {						//二级路由
            path:'',			//www.xxx.com/#/
            redirect:'/index'	//为空的时候调转到/index
        },
        {
            path:'/index',
            component:index,		//www.xxx.com/#/index
        },
        // {
        // 	path:'buy',
        // 	component:buy,		//www.xxx.com/#/home
        // 	meta:{checkLogin:true}
        // },
    ]
}]
