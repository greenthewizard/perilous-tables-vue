<template>
    <input 
        :class="type"
        :type="type"
        :alt="alt"
        :src="icons[icon]"
        :value="value"
        @click="btnEmit">
</template>

<script>
import { EventBus } from '../eventBus';
import diceIcon from '../assets/svg/dice.svg';
import backIcon from '../assets/svg/back.svg';

export default {
    props: {
        value: String,
        alt: String,
        icon: String,
        boxId: String,
        event: String,
        args: {
            type: Array,
            default: () => []
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
    data() {
        return {
            icons: {
                dice: diceIcon,
                back: backIcon
            }
        }
    },
    methods: {
        btnEmit() {
            if (!this.event) {
                return false
            }
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
.image
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