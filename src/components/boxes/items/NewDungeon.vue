<template>
    <pt-box
        :title="dungeonName"
        :subTitle="options.size">
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
// import YourComponent from '../YourComponent.vue;

export default {
    mixins: [boxMixin],
    components: {
        
    },
    data() {
        return {
            dungeonName: "New Dungeon"
        }
    }
}
</script>

<style language="sass" scoped>

</style>