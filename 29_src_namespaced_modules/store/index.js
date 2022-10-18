// 创建 vuex store
import Vue from 'vue';
import Vuex from 'vuex'

import CountStore from './CountStore'
import PersonStore from './PersonStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CountStore,
        PersonStore
    }
})