<template>
    <div>
        <pt-button
            v-for="(btn, i) in buttons"
            :key="i"
            :boxId="boxId"
            v-bind="btn">
        </pt-button>
    </div>
</template>

<script>
    import PtButton from './PtButton.vue';

    export default {
        props: ["buttons", "boxId"],
        components: {
            PtButton
        }
    }
</script>

<style lang="sass" scoped>
    div
        display: grid
        grid-template-columns: repeat(2, 1fr)
        grid-gap: 0.3rem
</style>