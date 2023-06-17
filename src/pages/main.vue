<template>
    <a-row>
        <movie-list :movies="movies"/>
    </a-row>
    <div style="display: flex; justify-content: center; margin-bottom: 20px">
        <a-pagination v-model:current="current" simple :total="total" @change="pageChange" />
    </div>
</template>
<script>
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import Service from "@/api/movieService";
import MovieList from "@/components/movieList.vue";

export default defineComponent({
    name: "main",
    components: {
        MovieList,
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
    },
    data() {
        return {
            movies: [],
            current: 1,
            total: 0
        }
    },
    methods:{
        async fetchMovies(page){
            try {
                const data = await Service.getAll(page)
                this.movies = data.films
                this.total = data.pagesCount * data.films.length
            }catch (e) {
                console.log(e)
            }
        },
        pageChange(page) {
            this.current = page
            this.fetchMovies(page)
        }
    },
    mounted() {
        this.fetchMovies(this.current)
    }
});
</script>