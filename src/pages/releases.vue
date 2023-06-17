<template>
    <div :style="{ padding: '24px', color: '#C0C0C0'}">
        <a-select
            style="width: 120px"
            @focus="focus"
            @change="fetchReleases"
            v-model:value="month"
        >
            <a-select-option value="DECEMBER">декабрь</a-select-option>
            <a-select-option value="JANUARY">январь</a-select-option>
            <a-select-option value="FEBRUARY">февраль</a-select-option>

            <a-select-option value="MARCH">март</a-select-option>
            <a-select-option value="APRIL">апрель</a-select-option>
            <a-select-option value="MAY">май</a-select-option>
            
            <a-select-option value="JUNE">июнь</a-select-option>
            <a-select-option value="JULY">июль</a-select-option>
            <a-select-option value="AUGUST">август</a-select-option>
            
            <a-select-option value="SEPTEMBER">сентябрь</a-select-option>
            <a-select-option value="OCTOBER">октябрь</a-select-option>
            <a-select-option value="NOVEMBER">ноябрь</a-select-option>
        </a-select>
      
        <a-date-picker 
            v-model:value="year" 
            picker="year" 
            @change="fetchReleases"
        />
        
        <a-row>
            <movie-list :movies="releaseList" />
        </a-row>
    </div>
</template>
<script>
import dayjs from "dayjs";
import releasesService from '@/api/releases';
import MovieList from "@/components/movieList.vue";

export default{
    name: "releases",
    components:{MovieList},
    data() {
        return {
            releaseList: [],
            month: 'JANUARY',
            year: dayjs().set('year', 2023)
        };
    },
    methods: {
        async fetchReleases() {
            try {
                const release = await releasesService.getReleases(this.year.$y, this.month);
                this.releaseList = release.items
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted() {
        this.fetchReleases()
    }
}
</script>