<template>
    <div :style="imbedStyle">
        <pt-button
            v-for="(btn, i) in buttons"
            :key="i"
            :boxId="boxId"
            v-bind="btn"
            @click.native="onClick(i)">
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
                // This creates a reference, and not a copy,
                // but it appears to work without giving a warning..
                // May need to look into creating a copy of the object 
                // instead of a reference, if weird errors come up.
                dataButtons: this.buttons
            }
        },
        methods: {
            onClick(i) {
                switch (this.type) {
                    case "radio":
                        this.dataButtons = this.dataButtons.map((btn, j) => {
                            btn.selected = j === i ? true : false;
                            return btn;
                        });
                        break;
                    case "checkbox":
                        this.dataButtons[i].selected = !this.dataButtons[i].selected;
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