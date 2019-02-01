import Vue from 'vue'
import Vuex from 'vuex'

import team from './modules/team'
import manager from './modules/manager'
import player from './modules/player'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        team,
        manager,
        player
    }
})
