<template>
    <input 
        :class="{ 
            icon: type === 'image', 
            btn: type === 'button',
            selected
        }"
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
        context: {
            type: String,
            default: "app"
        },
        selected: {
            type: Boolean,
            default: false
        },
        args: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: "button"
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
            EventBus.emit(this.context, this.event, this.args);
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
    border-color: $darkblue
    color: $white

.btn--selected
    background-color: $lightblue
    color: $white
</style>