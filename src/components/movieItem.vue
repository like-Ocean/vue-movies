<template>
    <div :style="{ padding: '24px'}">
        <a-card hoverable style="width: 100%">
            <template #cover>
                <img
                    alt="example"
                    :src="movie.posterUrlPreview"
                />
            </template>
            <a-card-meta :title="movie.nameRu" :description="movie.year"/>
        </a-card>
    </div>
</template>

<script>
export default {
    name: "movieItem",
    components:{},
    props: {
        movie: {
            type: Object
        }
    }
}
</script>
