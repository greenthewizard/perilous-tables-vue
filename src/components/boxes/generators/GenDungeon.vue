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
import boxMixin from 'mixins/boxMixin';

//Components
import ButtonGrid from 'components/ButtonGrid.vue';
import PtButton from 'components/PtButton.vue';

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