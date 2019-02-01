<template>
    <div class="team container">
        <br>
        <form class="form-group" @submit.prevent="addTeam">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <input class="form-control" name="name_team" ref="name_team" placeholder="Input new team"
                            required>
                        <br>    
                        <input class="form-control" name="country_team" ref="country_team" placeholder="Input country of team" @change="getTeam"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New Team</button>
                </div>
            </div>
            <div class="row">
                <br>
                <list></list>
            </div>
        </form>
    </div>    
</template>
<script>
import Vuex from 'vuex'

import List from '@/components/elements/ListTeam'

export default {
    name: 'Team',
    components: {
        List,
    },
    methods: {
        getTeam(e) {
            let team = {
                name: this.$refs.name_team.value,
                country: this.$refs.country_team.value
            }
            console.log(team)
            this.$store.dispatch('getTeam', team)
        },
        addTeam(e) {
            e.preventDefault();
            this.$store.dispatch('addTeam')
            this.$store.dispatch('clearTeam')
            this.$refs.name_team.value = ''
            this.$refs.country_team.value = ''
        }
    },
    computed: {
        newRecord() {
            return this.$store.getters.newTeam
        }
    }
}
</script>
