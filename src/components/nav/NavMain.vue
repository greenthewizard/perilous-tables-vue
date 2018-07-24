<template>
    <pt-box
        title="Main"
        subTitle="Create and explore..">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <button-grid>
                <pt-button
                    value="Generate"
                    context="app"
                    event="replaceBox"
                    :args="[groupName, boxId, 'NavGenerate']">
                </pt-button>
                <pt-button
                    value="Explore"
                    context="app"
                    event="replaceBox"
                    :args="[groupName, boxId, 'NavExplore']"> 
                </pt-button>
            </button-grid>
        </template>
    </pt-box>
</template>

<script>
//Mixin
import boxMixin from '../mixins/boxMixin';

//Components
import ButtonGrid from '../ButtonGrid.vue';
import PtButton from '../PtButton.vue';

export default {
    mixins: [boxMixin],
    components: {
        ButtonGrid,
        PtButton
    }
}
</script>

<style language="sass" scoped>

</style>