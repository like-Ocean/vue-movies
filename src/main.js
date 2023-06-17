import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.dark.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";


const app = createApp(App)

app
    .use(Antd)
    .use(router)
    .mount('#app')




