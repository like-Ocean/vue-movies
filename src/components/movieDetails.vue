<template>
    <a-descriptions bordered>
        <a-descriptions-item label="Страна">
            <p v-for="country in countries" :key="country.country">
                {{country && country.country != null ? country.country : 'Нет данных'}}
            </p>
        </a-descriptions-item>
        <a-descriptions-item label="Жанры">
            <p v-for="genre in genres" :key="genre.genre">
                {{ genre && genre.genre != null ? genre.genre : 'Нет данных' }}
            </p>
        </a-descriptions-item>
        <a-descriptions-item label="Год производства">
            {{ year != null ? year : 'Нет данных'}}
        </a-descriptions-item>
        <a-descriptions-item label="Бюджет">
            {{ globalBudget ? globalBudget.amount + "$": 'Нет данных' }}
        </a-descriptions-item>
        <a-descriptions-item label="Сборы в США">
            {{ usaAmount ? usaAmount.amount + "$" : 'Нет данных' }}
        </a-descriptions-item>
        <a-descriptions-item label="Сборы в мире">
            {{ worldAmount ? worldAmount.amount + "$" : 'Нет данных' }}
        </a-descriptions-item>
        <a-descriptions-item label="Оценка критиков">
            {{ ratingFilmCritics != null ? ratingFilmCritics : 'нет данных' }}
        </a-descriptions-item>
        <a-descriptions-item label="Оценка на imdb">
            {{ ratingImdb != null ? ratingImdb :'нет данных' }}
        </a-descriptions-item>
        <a-descriptions-item label="Оценка на Кинопоиск">
            {{ ratingKinopoisk != null ? ratingKinopoisk : 'нет данных'}}
        </a-descriptions-item>
    </a-descriptions>
</template>

<script>
export default {
    name: "movieDetails",
    props: {
        countries: Array,
        genres: Array,
        year: Number,
        globalBudget: Object,
        usaAmount: Object,
        worldAmount: Object,
        ratingFilmCritics: Number,
        ratingImdb: Number,
        ratingKinopoisk: Number
    }
}
</script>