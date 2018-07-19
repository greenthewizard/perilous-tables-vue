<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
div
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 0.3rem
</style>