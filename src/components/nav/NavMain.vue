<template>
    <pt-box
        v-bind="boxProps">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <p>Hey, I'm the main nav menu!</p>
        </template>
    </pt-box>
</template>

<script>
import PtBox from '../PtBox.vue';

export default {
    components: {
        PtBox
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