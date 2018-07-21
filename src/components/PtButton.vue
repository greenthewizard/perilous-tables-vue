<template>
    <input 
        :class="type"
        :type="type"
        :alt="alt"
        :src="src"
        :value="value"
        @click="btnEmit">
</template>

<script>
import { EventBus } from '../eventBus';

export default {
    props: {
        alt: String,
        src: String,
        event: String,
        args: Array,
        boxId: String,
        value: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "button"
        },
        global: {
            type: Boolean,
            default: false
        },
        local: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        btnEmit() {
            if (this.local) {
                EventBus.emit(this.boxId, this.event, this.args);
            }
            if (this.global) {
                EventBus.emit('app', this.event, this.args);
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'
.icon
    width: 4rem
    height: 4rem
    outline: none

.button
    border: 2px solid $lightblue
    border-radius: 8px
    background: transparent
    padding: 1rem
    font-size: 1.3rem
    outline: none

.button:hover 
    border-color: $darkblue

.button:active
    background-color: $lightblue
    border-color: $darkblue
    color: $white

.button--selected
    background-color: $lightblue
    color: $white
</style>