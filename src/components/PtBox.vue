<template>
    <div class="pt-box">
        <header class="pt-box__header">
            <div class="pt-box__title-card">
                <div class="l-flexbox">
                    <div class="l-flexitem">
                        <h2 class="pt-box__title">{{ menuData.title }}</h2>
                        <h3 class="pt-box__sub-title">{{ menuData.subTitle }}</h3>
                    </div>
                    <div class="l-flexitem l-flexitem--end-cap">
                        <div class="pt-box__title-btn">
                            <input 
                                class="icon"
                                type="image"
                                alt="dice"
                                :src="require('../assets/svg/dice.svg')">
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="pt-box__content">
            <button-list 
                :buttons="menuData.buttons"
                :box-id="boxId">
            </button-list>
        </div>
    </div>
</template>

<script>
import ButtonList from './ButtonList.vue';

export default {
    components: {
        ButtonList
    },
    props: [
        "menuData",
        "boxId"
    ],
    data: function () {
        return {
            
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
.icon
    width: 4rem
    height: 4rem
    outline: none
</style>
