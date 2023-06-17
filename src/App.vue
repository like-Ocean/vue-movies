<template>
    <div class="app">
        <a-layout>
            <a-layout-sider
                breakpoint="lg"
                collapsed-width="0"
                style="min-height: 100vh"
            >
                <sider-menu/>
            </a-layout-sider>
            <a-layout>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>

    </div>
</template>

<script>
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons-vue";
import MovieList from "@/components/movieList.vue";
import SiderMenu from "@/components/siderMenu.vue";

export default {
    components: {SiderMenu, MovieList, UserOutlined, VideoCameraOutlined, UploadOutlined},
    data(){
        return{

        }
    }
}
</script>

<style>

</style>