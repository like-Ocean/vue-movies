<template>
    <a-image
        v-if="!imgLoading"
        :preview="{ visible: false }"
        width="400px"
        :src="imgList.length > 0 ? imgList[0].imageUrl : '/img_placeholder.jpg'"
        @click="visible = true"
    />

    <div style="display: none">
        <a-image-preview-group :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
            <a-image v-for="shot in imgList" :key="shot" :src="shot.imageUrl" />
        </a-image-preview-group>
    </div>
    
</template>

<script>
export default{
    name: "imgPanel",
    props: {
        imgLoading: Boolean,
        visible: Boolean,
        imgList: Array
    }
}
</script>