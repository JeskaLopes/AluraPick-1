<template>
    <img class="responsive-display-image" :src="url" :alt="titulo">
</template>

<script>
export default {

    props: ['url', 'titulo']
    
}
</script>

<style scoped>
    .responsive-display-image{
        width: 100%
    }

</style>