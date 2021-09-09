import app from './plugin'
import router from './router'
import store from './store'
import Axios from 'axios'

const instance=Axios.create({
    baseURL:'http://localhost:1338/users/',
    timeout:5000
}) 
instance.interceptors.request.use(config=>{
    return config
});
instance.interceptors.response.use(res=>{
    return res.data
});
app.config.globalProperties.$axios=instance


app.use(router).use(store).mount('#app')