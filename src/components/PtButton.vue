<template>
    <input 
        class="btn"
        type="button"
        :value="value"
        @click="btnEmit">
</template>

<script>
import { EventBus } from '../eventBus';

export default {
    props: [
        "value",
        "event",
        "args"
    ],
    methods: {
        btnEmit: function() {
            EventBus.$emit(this.event, this.args);
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'

.btn
    border: 2px solid $lightblue
    border-radius: 8px
    background: transparent
    padding: 1rem
    font-size: 1.3rem
    outline: none

.btn:hover 
    border-color: $darkblue

.btn:active
    background-color: $lightblue
    border-color: $lightblue

.btn--selected
    background-color: $lightblue
    color: $white
</style>
