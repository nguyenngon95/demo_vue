<template>
    <div id="list-manager">
        <div class="panel panel-default">
            <div class="panel-heading my-task">
                <h3 class="panel-title">List Manager<span class="manager-length" v-if="managers.length > 0">({{managers.length}})</span></h3>
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
                    <tbody v-for="(manager, index) in managers" v-bind:key="index">
                        <tr>
                            <td>{{ index+1 }}</td>
                            <td>{{ manager.body.name }}</td>
                            <td>{{ manager.body.country }}</td>
                            <td>
                                <div>
                                    <button type="button" @click="removeManager(manager)" class="btn btn-danger btn-sm">
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
            'removeManager'
        ]),
        computed: mapGetters([
            'managers',
            'newManager'
        ])
    }
</script>
<style>
    table th {
        text-align: center;
    }
</style>
