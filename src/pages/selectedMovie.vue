<template>
    <div :style="{ padding: '24px', color: '#C0C0C0'}">
        <a-row :gutter="16">
            <a-col :span="12" :xs="24" :sm="12" :md="8" :lg="6">
                <a-image
                    :src="info.posterUrl"
                />
            </a-col>
            <a-col :span="12" :xs="24" :sm="12" :md="16" :lg="18">
                <p>{{ info.description }}</p>
            </a-col>
        </a-row>
        <a-row :style="{margin: '20px 0px'}">
            <a-col :span="24">
                <movie-details
                    :countries="info.countries"
                    :genres="info.genres"
                    :year="info.year"
                    :globalBudget="globalBudget"
                    :usaAmount="usaAmount"
                    :worldAmount="worldAmount"
                    :ratingFilmCritics="info.ratingFilmCritics"
                    :ratingImdb="info.ratingImdb"
                    :ratingKinopoisk="info.ratingKinopoisk"
                />
            </a-col>
        </a-row>
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="Изображения">
                <a-row justify="center" :style="{margin: '8px 0'}">
                    <a-radio-group v-model:value="imgType" button-style="solid" @change="getPhotos">
                        <a-radio-button value="STILL">Кадры</a-radio-button>
                        <a-radio-button value="WALLPAPER">Обои</a-radio-button>
                        <a-radio-button value="FAN_ART">фан-арты</a-radio-button>
                        <a-radio-button value="CONCEPT">Концепт-арты</a-radio-button>
                    </a-radio-group>
                </a-row>
                <a-row justify="center">
                    <img-panel 
                        :imgLoading="imgLoading" 
                        :visible="visible" 
                        :imgList="imgList" 
                    />
                </a-row>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Похожие">
                <a-row>
                    <movie-list :movies="similarList" />
                </a-row>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Отзывы">
                <a-row justify="center" :style="{margin: '8px 0'}">
                    <a-radio-group v-model:value="reviewType" button-style="solid" @change="changeReviewType">
                        <a-radio-button value="POSITIVE">Позитивные</a-radio-button>
                        <a-radio-button value="NEGATIVE">Негативные</a-radio-button>
                    </a-radio-group>
                </a-row>
                <review-list :reviews="currentReviews"/>
                <div style="display: flex; justify-content: center; margin-bottom: 20px">
                    <a-pagination v-model:current="reviewPage" simple :total="reviewList.total" @change="fetchReview"/>
                </div>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<script>
import { ref } from 'vue';
import Service from "@/api/movieService";
import MovieDetails from "@/components/movieDetails.vue";
import MovieList from "@/components/movieList.vue";
import movieItem from "@/components/movieItem.vue";
import imgPanel from '@/components/imgPanel.vue';
import reviewList from '@/components/reviewList.vue';
export default {
    name: "selectedMovie",
    components: {movieItem, MovieList, MovieDetails, imgPanel, reviewList},
    data() {
        const activeKey = ref(['1']);
        return {
            id: this.$route.params.id,
            info: [],
            budgetInfo: [],
            globalBudget: null,
            usaAmount: null,
            worldAmount: null,
            imgList: [],
            imgType: 'STILL',
            imgLoading: true,
            activeKey,
            visible: false,
            similarList: [],
            reviewList: [],
            reviewType: 'POSITIVE',
            reviewPage: 1
        }
    },
    methods: {
        async getMovie() {
            try {
                this.info = await Service.getCurrentInfo(this.id);
            } catch (e) {
                console.log(e);
            }
        },
        async getBoxOffice(){
            try {
                const res = await Service.getBudget(this.id)
                this.budgetInfo = res.items

                this.globalBudget = this.budgetInfo.find(item => item.type === 'BUDGET');
                this.usaAmount = this.budgetInfo.find(item => item.type === 'USA');
                this.worldAmount = this.budgetInfo.find(item => item.type === 'WORLD');
            }catch (e) {
                console.log(e)
            }
        },
        async getPhotos(){
            this.imgLoading = true
            try {
                const res = await Service.getImages(this.id, this.imgType)
                this.imgList = res.items
            }catch (e) {
                console.log(e)
            }
            this.imgLoading = false
        },
        async getSimilar(){
            try {
                const res = await Service.getSimilar(this.id)
                this.similarList = res.items
            }catch (e) {
                console.log(e)
            }
        },
        async fetchReview(){
            try{
                this.reviewList = await Service.getReviews(this.id, this.reviewPage)
            }catch(e){
                console.log(e)
            }
        }
    },
    computed: {
        positiveReviews() {
            return this.reviewList.items.filter(review => review.type === "POSITIVE");
        },
        negativeReviews() {
            return this.reviewList.items.filter(review => review.type === 'NEGATIVE');
        },
        currentReviews() {
            if (this.reviewType === 'POSITIVE') {
                return this.positiveReviews;
            } else {
                return this.negativeReviews;
            }
        }
    },
    watch:{
        '$route.params.id'(newId) {
            this.id = newId
            this.getMovie()
            this.getBoxOffice()
            this.getPhotos()
            this.getSimilar()
            this.fetchReview()
            window.scrollTo(0, 0)
        },
        activeKey(val) {
            console.log(val)
        }
    },
    mounted() {
        this.getMovie()
        this.getBoxOffice()
        this.getPhotos()
        this.getSimilar()
        this.fetchReview()
    }
}
</script>