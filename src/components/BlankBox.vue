<template>
    <pt-box
        title="Title"
        subTitle="Subtitle">
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
// import YourComponent from '../YourComponent.vue;

export default {
    mixins: [boxMixin],
    components: {
        // YourComponent
    }
}
</script>

<style language="sass" scoped>

</style>