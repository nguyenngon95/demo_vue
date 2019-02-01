<template>
    <div class="player container">
        <br>
        <form class="form-group" @submit.prevent="addPlayer">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <input class="form-control" name="name_player" ref="name_player" placeholder="Input new player"
                            required>
                        <br>    
                        <input class="form-control" name="country_player" ref="country_player" placeholder="Input country of player" @change="getPlayer"
                            required>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New player</button>
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

import List from '@/components/elements/ListPlayer'

export default {
    name: 'player',
    components: {
        List,
    },
    methods: {
        getPlayer(e) {
            let player = {
                name: this.$refs.name_player.value,
                country: this.$refs.country_player.value
            }
            console.log(player)
            this.$store.dispatch('getPlayer', player)
        },
        addPlayer(e) {
            e.preventDefault();
            this.$store.dispatch('addPlayer')
            this.$store.dispatch('clearPlayer')
            this.$refs.name_player.value = ''
            this.$refs.country_player.value = ''
        }
    },
    computed: {
        newPlayer() {
            return this.$store.getters.newPlayer
        }
    }
}
</script>
