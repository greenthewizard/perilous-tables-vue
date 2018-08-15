<template>
    <pt-box
        :title="dungeonName"
        :subTitle="options.size">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <h4>Themes</h4>
            <ul>
                
            </ul>
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
            dungeonName: "New Dungeon",
        }
    },
    computed: {
        sizeNumber() {
            const sizes = {
                'Small': 2,
                'Medium': 3,
                'Large': 4,
                'Huge': 5
            }

            return sizes[this.options.size];
        }
    }
}
</script>

<style language="sass" scoped>

</style>