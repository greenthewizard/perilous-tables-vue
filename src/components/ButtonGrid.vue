<template>
    <div :style="imbedStyle">
        <h2 v-if="groupName">{{ groupName }}</h2>
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
            groupName: String,
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
                selected: this.buttons.map(btn => {
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
                        break;
                    default:
                        break;
                }
            },
            getSelectedButtons() {
                const buttonNames = this.buttons.map(btn => btn.value);
                const buttonData = this.selected.reduce((acc, selected, i) => {
                    if (selected) {
                        acc[buttonNames[i]] = selected;
                    }
                    return acc;
                }, {});
                console.log(buttonData);
                return buttonData;
            }
        },
        created() {
            EventBus.on(this.boxId, 'roll', this.getSelectedButtons);
        }
    }
</script>

<style lang="sass" scoped>
    @import '../assets/styles/colors'
    $gap: 0.3rem

    div
        display: grid
        grid-gap: $gap
        margin-bottom: $gap

        h2
            grid-column: 1 / -1
            font-size: 1.5rem
            font-weight: normal
            border-bottom: 1px solid $lightgrey
            margin: 0 0 .5rem 0

        .selected
            background-color: $lightblue
            color: $white
</style>