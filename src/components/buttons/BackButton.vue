<template>
    <pt-button
        value="Generate"
        type="image"
        icon="back"
        alt="Back arrow"
        context="app"
        event="goBack"
        :args="[boxId]">
    </pt-button>
</template>

<script>
import PtButton from 'components/PtButton.vue';

export default {
    components: {
        PtButton
    },
    props: {
        boxId: Number
    }
}
</script>

