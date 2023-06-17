<template>
    <a-menu theme="dark" mode="inline">
        <a-auto-complete
            v-model:value="searchLine"
            placeholder="Поиск..."
            :options="searchList"
            style="margin: 24px 0px 0px 0px; width: 200px"
            @search="onSearch"
            @select="onSelect"
        />
        <a-menu-item key="1" @click="$router.push('/')">
            <home-outlined />
            <span class="nav-text">Главная</span>
        </a-menu-item>
        <a-menu-item key="2"  @click="$router.push('/premiere')">
            <fire-outlined/>
            <span class="nav-text">Премьеры</span>
        </a-menu-item>
        <a-menu-item key="3"  @click="$router.push('/releases')">
            <video-camera-outlined/>
            <span class="nav-text">Цифровые релизы</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
import {
    HomeOutlined, 
    VideoCameraOutlined, 
    FireOutlined
} from "@ant-design/icons-vue";
import searchService from "@/api/searchService";

export default {
    name: "siderMenu",
    components: {HomeOutlined, VideoCameraOutlined, FireOutlined},
    data(){
        return{
            searchLine: '',
            searchList: []
        }
    },
    methods:{
        async onSearch(){
            try {
                const res = await searchService.search(this.searchLine)
                this.searchList = res.films.map(film => ({
                    value: film.filmId ? film.filmId : film.kinopoiskId,
                    label: film.nameRu ? film.nameRu: film.nameEn
                }))
            }catch (e) {
                console.log(e)
            }
        },
        onSelect(value){
        const selectedFilm = this.searchList.find(film => film.value === value)
        if (selectedFilm) {
            this.searchLine = selectedFilm.label
            this.$router.push(`/movie/${selectedFilm.value}`)
        }
    }
    }

}
</script>