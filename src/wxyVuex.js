let Vue;
class Store {
    constructor(options) {
        this.state = new Vue({ data: options.state })
        this.mutations = options.mutations
        this.actions = options.actions

        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
        //添加getter方法
        options.getters && this.handleGetters(options.getters)

    }
    handleGetters(getters) {
        this.getters = {}
        let keys = Object.keys(getters)
        keys.forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state)
                }
            })
        })
    }
    commit(type, arg) {
        this.mutations[type](this.state, arg)
    }

    dispatch(type, arg) {
        return this.actions[type](this, arg)
    }
}
function install(_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}
export default { Store, install }