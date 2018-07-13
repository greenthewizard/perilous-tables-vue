<template>
    <div class="pt-box">
        <header class="pt-box__header">
            <div class="pt-box__title-card">
                <div class="l-flexbox">
                    <div class="l-flexitem">
                        <h2 class="pt-box__title">{{ title }}</h2>
                        <h3 class="pt-box__sub-title">{{ subTitle }}</h3>
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

        </div>
    </div>
</template>

<script>
import ButtonList from './ButtonList.vue';
import TitleButton from './TitleButton.vue';
import { menuData } from '../menuData';
import { EventBus } from '../eventBus';

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
            title: menuData[this.initial]['title'],
            subTitle: menuData[this.initial]['subTitle'],
            buttonList: menuData[this.initial]['buttonList'],
            history: []
        }
    },
    methods: {
        goBack() {
            if (this.history.length > 0) {
                this.goTo(this.history.pop());
            }
        },
        goTo(dest) {
            this.current = dest;
            this.title = menuData[this.current]['title'];
            this.subTitle = menuData[this.current]['subTitle'];
            this.buttonList = menuData[this.current]['buttonList'];
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
