<template>
    <pt-box
        title="Generate Dungeon"
        subTitle="Welcome to the Dungeon!">
        <template slot="titleButtons">
        </template>
        <template slot="content">
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