import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Word from '@/components/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name : Main,
      component: Main
    },
    {
      path: '/word',
      name: Word,
      component: Word
    }

  ]
})
