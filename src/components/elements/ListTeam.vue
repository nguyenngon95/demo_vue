<template>
    <div id="list-team">
        <div class="panel panel-default">
            <div class="panel-heading my-task">
                <h3 class="panel-title">List Team<span class="team-length" v-if="teams.length > 0">({{teams.length}})</span></h3>
            </div>
            <div class="panel-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Nation
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-for="(team, index) in teams" v-bind:key="index">
                        <tr>
                            <td>{{ index+1 }}</td>
                            <td>{{ team.body.name }}</td>
                            <td>{{ team.body.country }}</td>
                            <td>
                                <div>
                                    <button type="button" @click="remove(team)" class="btn btn-danger btn-sm">
                                    <span class="glyphicon glyphicon-remove-circle"></span> Remove
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        methods: {
            remove(team) {
                this.$store.dispatch('removeTeam', team)
            }
        },
        computed: {
            teams() {
                return this.$store.getters.teams
            },
            newTeam() {
                return this.$store.getters.newTeam
            }
        }
    }
</script>
<style>
    table th {
        text-align: center;
    }
</style>
