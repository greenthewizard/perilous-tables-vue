<template>
    <div :style="imbedStyle">
        <h2 v-if="groupName">{{ groupName }}</h2>
        <slot></slot>
    </div>
</template>

<script>
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
            default: "normal" 
        },
        boxId: String
    },
    data() {
        return {
            imbedStyle: {
                gridTemplateColumns: `repeat(${this.cols}, 1fr)`
            }
        }
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