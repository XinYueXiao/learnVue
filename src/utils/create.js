// 1.创建传入组件实例
// 2.挂载组件从而生成dom结构
// 3.生成dom结构追加到body
// 4.淘汰机制:不需要时组件实例应当被销毁
import Vue from 'vue'
export default function create(Component, props) {
    //1.创建出入组件实例
    //Vue.extend({})
    const vm = new Vue({
        render(h) {//h即是createElement(tag,data,children)
            //返回熟知的虚拟dom
            return h(Component, { props })
        }
    }).$mount()//只挂载,不设置宿主,执行初始化过程,没有dom操作
    document.body.appendChild(vm.$el)
    //获取组件实例
    const comp = vm.$children[0];
    //附加一个删除方法
    comp.remove = () => {
        //移除dom
        document.body.removeChild(vm.$el)
        //销毁组件
        vm.$destroy()
    }
    return comp
}