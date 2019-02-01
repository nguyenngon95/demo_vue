const state = {
    newManager: {
        name: '',
        country: ''
    },
    managers: []
}

const getters = {
    newManager: state => state.newManager,
    managers: state => state.managers.filter((manager) => { return manager })
}

const mutations = {
    addManager (state) {
        state.managers.push({
            body: state.newManager
        })
    },
    getManager (state, manager) {
        state.newManager = manager
    },
    removeManager (state, manager) {
        var managers = state.managers
        managers.splice(managers.indexOf(manager), 1)
    },
    clearManager (state) {
        state.newManager = {}
    }
}

const actions = {
    getManager ({commit}, record) {
        commit('getManager', record)
    },
    addManager ({commit}) {
        commit('addManager')
    },
    clearManager ({commit}) {
        commit('clearManager')
    },
    removeManager ({commit}, record) {
        commit('removeManager', record)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
