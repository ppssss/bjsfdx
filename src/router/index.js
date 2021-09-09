import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import DetailN from '../views/DetailN.vue'
import DetailVideo from '../views/DetailVideo.vue'
import Search from '../views/Search.vue'



const routes = [
  {path:'/',name:'home',component:Home},
  {path:'/List/:type',name:'List',component:List},
  {path:'/Detail/:type/:id',name:'Detail',component:Detail},
  {path:'/DetailN/:id',name:'DetailN',component:DetailN},
  {path:'/DetailVideo/:type',name:'DetailVideo',component:DetailVideo},
  {path:'/Search',name:'Search',component:Search},

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
