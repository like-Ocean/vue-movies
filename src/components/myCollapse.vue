<template>
  <a-collapse 
    :activeKey="activeKey" 
    @update:activeKey="$emit('update:activeKey', $event)" 
    accordion
  >
    <a-collapse-panel key="1" header="Изображения">
      <a-row justify="center" :style="{margin: '8px 0'}">
        <a-radio-group 
          :value="imgType" 
          @update:value="$emit('update:imgType', $event)" 
          button-style="solid"
          @change="getPhotos"
        >
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
        <a-radio-group 
          :value="reviewType" 
          @update:value="$emit('update:reviewType', $event)" 
          button-style="solid" 
          @change="changeReviewType"
        >
          <a-radio-button value="POSITIVE">Позитивные</a-radio-button>
          <a-radio-button value="NEGATIVE">Негативные</a-radio-button>
        </a-radio-group>
      </a-row>
      <review-list :reviews="currentReviews"/>
      <div style="display: flex; justify-content: center; margin-bottom: 20px">
        <a-pagination 
          :current="reviewPage" 
          @update:current="$emit('update:reviewPage', $event)" 
          simple 
          :total="reviewList.total" 
          @change="fetchReview"
        />
      </div>
    </a-collapse-panel>
    <!-- <a-collapse-panel key="4" header="Каст">
      <a-row>
        <person-card :staff="staffList"/>
      </a-row>
    </a-collapse-panel> -->
  </a-collapse>
</template>

<script>
import imgPanel from '@/components/imgPanel.vue';
import reviewList from '@/components/reviewList.vue';
import personCard from '@/components/personCard.vue';
import MovieList from "@/components/movieList.vue";

export default {
  name: "myCollapse",
  components: {MovieList, imgPanel, reviewList, personCard},
  props: {
    activeKey: {
      type: Array,
      default: () => (['1'])
    },
    imgType: String,
    imgLoading: Boolean,
    visible: Boolean,
    imgList: Array,
    similarList: Array,
    staffList: Array,
    reviewList: Object,
    reviewType: String,
    reviewPage: Number
  },
  methods: {
    changeReviewType() {
      this.$emit('changeReviewType');
    },
    getPhotos() {
      this.$emit('getPhotos');
    },
    fetchReview() {
      this.$emit('fetchReview');
    }
  }
}
</script>

