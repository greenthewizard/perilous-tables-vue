<template>
    <div class="pt-box">
        <header class="pt-box__header">
            <div class="pt-box__title-card">
                <div class="l-flexbox">
                    <div class="l-flexitem">
                        <h2 class="pt-box__title">{{ getDestValue('title') }}</h2>
                        <h3 class="pt-box__sub-title">{{ getDestValue('subTitle') }}</h3>
                    </div>
                    <!-- <title-button
                        v-for="(btn, i) in titleButtons"
                        :key="i"
                        :props="btn">
                    </title-button> -->
                </div>
            </div>
        </header>
        <div class="pt-box__content">
            <input 
                type="button"
                value="Go To"
                @click="goTo('ptb-main')">
            <input 
                type="button"
                value="Go Back"
                @click="goBack()">
        </div>
    </div>
</template>

<script>
import ButtonList from './ButtonList.vue';
import TitleButton from './TitleButton.vue';
import { menuData } from '../menuData';
// import { EventBus } from '../eventBus';

export default {
    components: {
        ButtonList,
        TitleButton
    },
    props: [
        "initial"
    ],
    data: function () {
        return {
            current: this.initial,
            history: []
        }
    },
    methods: {
        goBack() {
            if (this.history.length > 0) {
                this.current = this.history.pop();
            }
        },
        goTo(dest) {
            this.history.push(this.current);
            this.current = dest;
        },
        getDestValue(key) {
            return menuData[this.current][key];
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'

.pt-box 
    position: relative
    border: 1px solid black
    border-radius: 8px
    padding: 1rem

    h2
        font-size: 2.2rem

    &:hover
        .pt-box__content
            p
                color: $lightblue
    
.pt-box__header
    padding: 0 0 .5rem 0
.pt-box__title
    margin: 0
.pt-box__title--highlight
    color: $lightblue
.pt-box__sub-title
    font-weight: normal
    font-size: 1.3rem
    color: $lightgrey
    margin: 0
</style>
