<template>
    <div :style="imbedStyle">
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
        props: {
            cols: {
                type: Number,
                default: 2
            },
            buttons: Array,
            boxId: String
        },
        components: {
            PtButton
        },
        data() {
            return {
                selected: null,
                imbedStyle: {
                    gridTemplateColumns: `repeat(${this.cols}, 1fr)`
                }
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
        grid-gap: 0.3rem
    
    .col-3
       

    .selected
        background-color: $lightblue
        color: $white
</style>