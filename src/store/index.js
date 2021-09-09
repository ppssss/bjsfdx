import { createStore } from 'vuex'
const pageW=()=>{
  const screenW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth
   return screenW
}

export default createStore({
  state: {
    pageW:pageW(),
    Url:'http://localhost:1338/'
  },
})
