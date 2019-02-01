import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Team from '@/components/pages/Team'
import Manager from '@/components/pages/Manager'
import Player from '@/components/pages/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    }
  ]
})
