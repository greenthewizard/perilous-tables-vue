<template>
    <ul class="btn-list">
        <li v-for="(btn, i) in buttons" 
            :key="i">
            <pt-button
                :btnValue="btn.value"
                :btnDestination="btn.destination"
                :box-id="boxId">
            </pt-button>
        </li>
    </ul>
</template>

<script>
import PtButton from './PtButton.vue';

export default {
    components: {
        PtButton
    },
    props: [
        "buttons",
        "boxId"
    ]
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'
.btn-list
    list-style: none
    padding: 0

    li
        padding: 0 0 .4rem 0
    input
        width: 100%

.btn-list--inline
    display: flex
    li
        flex-grow: 1
        flex-basis: 0
        padding: 0 .4rem
</style>
