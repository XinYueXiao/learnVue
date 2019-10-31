//声明插件：vue插件需求实现一个install的静态方法
let Vue;//保存Vue构造函数引用（引用不引入vue减少打包大小）
class WxyVueRouter {
    constructor(options) {
        this.$options = options;
        this.routeMap = {};
        //当前的url需要时响应式的，当前值变化，其他地方也变化
        this.app = new Vue({
            data: { current: '/' }
        })
    }
    init() {
        //监听事件
        this.bindEvents()
        //解析routes
        this.createRouterMap()
        //声明事件
        this.initComponent()
    }
    bindEvents() {
        window.addEventListener('hashchange',
            this.onHashChange.bind(this))
    }
    onHashChange() {
        //window.location.pathname
        this.app.current = window.location.hash.slice(1) || '/'
    }
    createRouterMap() {
        //遍历用户配置路由数组，修改为键值对方面以后根据地址调用配置
        this.$options.routes.forEach(route => {
            this.routeMap[route.path] = route
        })
    }
    initComponent() {
        //router-link转成A标签
        Vue.component('router-link',
            {
                props: {
                    to: String
                }, render() {
                    return <a href={`#${this.to}`}>
                        {this.$slots.default}</a>
                }
            })
        Vue.component('router-view', {
            // Vue.js 组件提供了一个 functional 开关，设置为 true 后，就可以让组件变为无状态、无实例的函数化组件。因为只是函数，所以渲染的开销相对来说，较小。
            functional: true,
            //函数化的组件中的 Render 函数，提供了第二个参数 context 作为上下文，data、props、slots、children 以及 parent 都可以通过 context 
            render(h, { parent }) {
                const router = parent.$router
                const Component = router.routeMap[router.app.current].component
                return h(Component)
            }
        })
    }
}
//参数是Vue构造函数
WxyVueRouter.install = function (_Vue) {
    Vue = _Vue
    //实现一个混入
    Vue.mixin({
        //实例存在后在执行
        beforeCreate() {
            //获取WxyVueRouter实例并挂在到Vue.prototype
            if (this.$options.router) {
                //根组件beforeCreate时只执行一次
                Vue.prototype.$router = this.$options.router
                // 路由器初始化
                this.$options.router.init();
            }
        }
    })
}
export default WxyVueRouter