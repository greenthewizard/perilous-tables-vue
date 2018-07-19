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
            <component 
                v-for="(content, i) in getDestValue('content')"
                :key="i"
                :is="content.component"
                v-bind="content.props"
                :boxId="id">
            </component>
        </div>
    </div>
</template>

<script>
//Components
import PtButton from './PtButton.vue';
import ButtonGrid from './ButtonGrid.vue';

//Libraries/Utils
import { menuData } from '../menuData';
import { EventBus } from '../eventBus';
import { uniqueId } from 'lodash';

export default {
    components: {
        PtButton,
        ButtonGrid
    },
    props: [
        "initial"
    ],
    data: function () {
        const id = uniqueId('pt-box-');

        return {
            current: this.initial,
            history: [],
            id
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
    },
    created: function() {
        // EventBus.$on(this.id + '-goTo', dest => this.goTo(dest));
        EventBus.registerListener(this.id, 'goTo', this.goTo);
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
