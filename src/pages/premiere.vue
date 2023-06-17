<template>
   <div :style="{ padding: '24px', color: '#C0C0C0'}">
        <a-select
            style="width: 120px"
            @focus="focus"
            @change="fetchPremiere"
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

        <a-space direction="vertical" :size="12">
            <a-date-picker 
                v-model:value="year" 
                picker="year" 
                @change="fetchPremiere"
            />
        </a-space>
        
        <a-row>
            <movie-list :movies="premiereList" />
        </a-row>
   </div>
</template>

<script>
import premiereService from '@/api/premiere';
import MovieList from "@/components/movieList.vue";
import dayjs from "dayjs";
export default{
    name: "premiere",
    components: {MovieList},
    data() {
        return{
            premiereList: [],
            month: 'JANUARY',
            year: dayjs().set('year', 2023)
        }
    },
    methods:{
        async fetchPremiere() {
            try {
                const premiere = await premiereService.getPremieres(this.year.$y, this.month);
                this.premiereList = premiere.items
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted(){
        this.fetchPremiere()
    }
}
</script>