<template>
     <div v-for="review in reviews" style="padding: 24px" >
        <a-card 
            :title="review.author" 
            :bordered="false" 
            style="width: 100%" 
            :lg="6" 
            :md="8" 
            :sm="12" 
            :xs="24"
        >
            {{ review.description }}
        </a-card>
    </div>
</template>
<script>
    export default {
        name: 'reviewList',
        props: {
            reviews: {
                type: Array,
                required: true
            }
        }
    }
</script>