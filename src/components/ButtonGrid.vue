<template>
    <div :style="imbedStyle">
        <pt-button
            v-for="(btn, i) in buttons"
            :key="i"
            :boxId="boxId"
            :selected="selected[i]"
            v-bind="btn"
            @click.native="onClick(i)">
        </pt-button>
    </div>
</template>

<script>
    import PtButton from './PtButton.vue';
import { EventBus } from '../eventBus';

    export default {
        props: {
            cols: {
                type: Number,
                default: 2
            },
            type: {
                type: String,
                default: "Normal" 
            },
            buttons: Array,
            boxId: String
        },
        components: {
            PtButton
        },
        data() {
            return {
                imbedStyle: {
                    gridTemplateColumns: `repeat(${this.cols}, 1fr)`
                },
                selected: this.buttons.map((btn, j) => {
                    return btn.selected;
                })
            }
        },
        methods: {
            onClick(i) {
                switch (this.type) {
                    case "radio":
                        this.selected = this.selected.map((btn, j) => {
                            return this.selected = j === i ? true : false;
                        });
                        break;
                    case "checkbox":
                        this.selected.splice(i, 1, !this.selected[i]);
                    default:
                        break;
                }
                
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import '../assets/styles/colors'

    div
        display: grid
        grid-gap: 0.3rem 

    .selected
        background-color: $lightblue
        color: $white
</style>