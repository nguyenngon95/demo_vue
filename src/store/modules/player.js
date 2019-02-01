const state = {
    newPlayer: {
        name: '',
        country: ''
    },
    players: []
}

const getters = {
    newPlayer: state => state.newPlayer,
    players: state => state.players.filter((player) => { return player })
}

const mutations = {
    addPlayer (state) {
        state.players.push({
            body: state.newPlayer
        })
    },
    getPlayer (state, player) {
        state.newPlayer = player
    },
    removePlayer (state, player) {
        var players = state.players
        players.splice(players.indexOf(player), 1)
    },
    clearPlayer (state) {
        state.newPlayer = {}
    }
}

const actions = {
    getPlayer ({commit}, player) {
        commit('getPlayer', player)
    },
    addPlayer ({commit}) {
        commit('addPlayer')
    },
    clearPlayer ({commit}) {
        commit('clearPlayer')
    },
    removePlayer ({commit}, player) {
        commit('removePlayer', player)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
