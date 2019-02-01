<template>
    <div id="list-player">
        <div class="panel panel-default">
            <div class="panel-heading my-task">
                <h3 class="panel-title">List Player<span class="player-length" v-if="players.length > 0">({{players.length}})</span></h3>
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
                    <tbody v-for="(player, index) in players" v-bind:key="index">
                        <tr>
                            <td>{{ index+1 }}</td>
                            <td>{{ player.body.name }}</td>
                            <td>{{ player.body.country }}</td>
                            <td>
                                <div>
                                    <button type="button" @click="removePlayer(player)" class="btn btn-danger btn-sm">
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
            'removePlayer'
        ]), 
        computed: mapGetters([
            'players',
            'newPlayer'
        ])
    }
</script>
<style>
    table th {
        text-align: center;
    }
</style>
