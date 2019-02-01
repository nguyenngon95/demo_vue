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
                                    <button type="button" @click="removeTeam(team)" class="btn btn-danger btn-sm">
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
    import { mapGetters, mapActions } from 'vuex'

    export default{
        methods: mapActions([
            'removeTeam'
        ]),
        computed: mapGetters([
            'teams',
            'newTeam'
        ])
    }
</script>
<style>
    table th {
        text-align: center;
    }
</style>
