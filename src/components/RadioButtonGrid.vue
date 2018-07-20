<template>
    <div>
        <pt-button
            v-for="(btn, i) in buttons"
            :key="i"
            :boxId="boxId"
            v-bind="btn"
            :class="{'selected': isSelected(i)}"
            @click.native="selectButton(i)">
        </pt-button>
    </div>
</template>

<script>
    import PtButton from './PtButton.vue';

    export default {
        props: ["buttons", "boxId"],
        components: {
            PtButton
        },
        data() {
            return {
                selected: null
            }
        },
        methods: {
            isSelected(i) {
                return i === this.selected;
            },
            selectButton(i) {
                this.selected = i;
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import '../assets/styles/colors'

    div
        display: grid
        grid-template-columns: repeat(2, 1fr)
        grid-gap: 0.3rem

    .selected
        background-color: $lightblue
        color: $white
</style>