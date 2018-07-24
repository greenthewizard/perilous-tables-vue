<template>
    <pt-box
        title="Generate"
        subTitle="Draw maps, leave blanks..">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <button-grid>
                <pt-button
                    value="Dungeon"
                    context="app" 
                    event="addNewBox"
                    :args="['generate', 'GenDungeon']">
                </pt-button>
                <pt-button
                    value="Town"
                    context="app" 
                    event="addNewBox"
                    :args="['generate', 'GenTown']">
                </pt-button>
                <pt-button
                    value="Creature"
                    context="app" 
                    event="addNewBox"
                    :args="['generate', 'GenNPC']">
                </pt-button>
                <pt-button
                    value="NPC"
                    context="app" 
                    event="addNewBox"
                    :args="['generate', 'GenNPC']">
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