<template>
    <pt-box
        title="Main"
        subTitle="Create and explore..">
        <template slot="titleButtons">
            <back-button 
                :boxId="boxId"
                v-if="history.length > 0">
            </back-button>
        </template>
        <template slot="content">
            <button-grid>
                <pt-button
                    value="Generate"
                    context="app"
                    event="replaceBox"
                    :args="[boxId, 'NavGenerate']">
                </pt-button>
                <pt-button
                    value="Explore"
                    context="app"
                    event="replaceBox"
                    :args="[boxId, 'NavExplore']"> 
                </pt-button>
            </button-grid>
        </template>
    </pt-box>
</template>

<script>
//Mixin
import boxMixin from 'mixins/boxMixin';

//Components
import ButtonGrid from 'components/ButtonGrid.vue';
import BackButton from 'components/buttons/BackButton.vue';
import PtButton from 'components/PtButton.vue';

export default {
    mixins: [boxMixin],
    components: {
        ButtonGrid,
        BackButton,
        PtButton
    }
}
</script>

<style language="sass" scoped>

</style>