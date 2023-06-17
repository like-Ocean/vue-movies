<template>
    <a-col v-for="movie in movies" :lg="6" :md="8" :sm="12" :xs="24">
        <movie-item
            :movie="movie"
            @click="$router.push(`/movie/${movie.filmId ? movie.filmId : movie.kinopoiskId}`)"
        />
    </a-col>
</template>

<script>
import movieItem from "@/components/movieItem.vue";

export default {
    name: "movieList",
    components: {movieItem},
    props: {
        movies: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>