<template>
    <pt-box
        title="Generate Dungeon"
        subTitle="Welcome to the Dungeon!">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <label class="control control--checkbox"> Small
                <input type="radio" value="Small" name="size" v-model="size"/>
            </label>
            <label class="control control--checkbox"> Medium
                <input type="radio" value="Medium" name="size" v-model="size"/>
            </label>
            <label class="control control--checkbox"> Large
                <input type="radio" value="Large" name="size" v-model="size"/>
            </label>
            <label class="control control--checkbox"> Huge
                <input type="radio" value="Huge" name="size" v-model="size"/>
            </label>
            <pt-button
                value="Generate"
                event="addNewBox"
                :args="['dungeons', 'NewDungeon', { size }]">
            </pt-button>
        </template>
    </pt-box>
</template>

<script>
//Mixin
import boxMixin from 'mixins/boxMixin';

//Components
import ButtonGrid from 'components/ButtonGrid.vue';
import PtButton from 'components/PtButton.vue';

export default {
    mixins: [boxMixin],
    components: {
        ButtonGrid,
        PtButton
    },
    data() {
        return {
            size: 'Medium'
        }
    }
}
</script>

<style language="sass" scoped>

</style>