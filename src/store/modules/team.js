const state = {
    newTeam: {
        name: '',
        country: ''
    },
    teams: []
}

const getters = {
    newTeam: state => state.newTeam,
    teams: state => state.teams.filter((team) => { return team })
}

const mutations = {
    addTeam (state) {
        state.teams.push({
            body: state.newTeam
        })
    },
    getTeam (state, team) {
        state.newTeam = team
    },
    removeTeam (state, team) {
        var teams = state.teams
        teams.splice(teams.indexOf(team), 1)
    },
    clearTeam (state) {
        state.newTeam = {}
    }
}

const actions = {
    getTeam ({commit}, team) {
        commit('getTeam', team)
    },
    addTeam ({commit}) {
        commit('addTeam')
    },
    clearTeam ({commit}) {
        commit('clearTeam')
    },
    removeTeam ({commit}, team) {
        commit('removeTeam', team)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
