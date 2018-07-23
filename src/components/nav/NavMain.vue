<template>
    <pt-box
        v-bind="boxProps">
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
import PtBox from '../PtBox.vue';
import ButtonGrid from '../ButtonGrid.vue';
import PtButton from '../PtButton.vue';

export default {
    props: {
        boxId: String,
        groupName: String
    },
    components: {
        PtBox,
        ButtonGrid,
        PtButton
    },
    data() {
        return {
            boxProps: {
                title: 'Main',
                subTitle: 'Create and explore..'
            }
        }
    }
}
</script>

<style language="sass" scoped>

</style>