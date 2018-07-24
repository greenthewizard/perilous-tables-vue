<template>
    <div class="box">
        <header class="header">
            <div class="title-card">
                <div class="l-flexbox">
                    <div class="l-flexitem">
                        <h2 class="title">{{ title }}</h2>
                        <h3 class="sub-title">{{ subTitle }}</h3>
                    </div>
                    <div 
                        class="l-flexitem l-flexitem--end-cap">
                        <slot name="titleButtons"></slot>
                    </div>
                </div>
            </div>
        </header>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
//Components
import PtButton from './PtButton.vue';
import ButtonGrid from './ButtonGrid.vue';
import PTable from './PTable.vue';

//Libraries/Utils
import { menuData } from '../menuData';
import { EventBus } from '../eventBus';
import { uniqueId } from 'lodash';

export default {
    components: {
        PtButton,
        ButtonGrid,
        PTable
    },
    props: {
        title: String,
        subTitle: String
    },
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
        EventBus.on(this.id, 'goTo', this.goTo);
        EventBus.on(this.id, 'goBack', this.goBack);
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'

.box 
    position: relative
    border: 1px solid black
    border-radius: 8px
    padding: 1rem

    h2
        font-size: 2.2rem

    &:hover
        .content
            p
                color: $lightblue
    
.header
    padding: 0 0 .5rem 0
.title
    margin: 0
.title--highlight
    color: $lightblue
.sub-title
    font-weight: normal
    font-size: 1.3rem
    color: $lightgrey
    margin: 0
</style>
