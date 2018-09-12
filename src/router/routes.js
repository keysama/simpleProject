const index = r => require.ensure([],() => r(require('../views/index/index.vue')),'index')

export default [
    {						//一级路由
        path:'',			//www.xxx.com/#/
        redirect:'/index'	//为空的时候调转到/index
    },
    {
        path:'/index',
        component:index,		//www.xxx.com/#/index
    },
]
