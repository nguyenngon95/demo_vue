<template>
    <div class="manager container">
        <br>
        <form class="form-group" @submit.prevent="addManager">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <input class="form-control" name="name_manager" ref="name_manager" placeholder="Input new manager"
                            required>
                        <br>    
                        <input class="form-control" name="country_manager" ref="country_manager" placeholder="Input country of manager" @change="getManager"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New Manager</button>
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

import List from '@/components/elements/ListManager'

export default {
    name: 'manager',
    components: {
        List,
    },
    methods: {
        getManager(e) {
            let manager = {
                name: this.$refs.name_manager.value,
                country: this.$refs.country_manager.value
            }
            console.log(manager)
            this.$store.dispatch('getManager', manager)
        },
        addManager(e) {
            e.preventDefault();
            this.$store.dispatch('addManager')
            this.$store.dispatch('clearManager')
            this.$refs.name_manager.value = ''
            this.$refs.country_manager.value = ''
        }
    },
    computed: {
        newManager() {
            return this.$store.getters.newmanager
        }
    }
}
</script>
