<template>   
    <div 
        class="l-flexitem l-flexitem"
        :class="{ 'l-flexitem--end-cap': isFirst }"
        v-if="visible">
        <input 
            class="icon"
            type="image"
            :alt="alt"
            :src="src"
            @click="doAction">
    </div> 
</template>

<script>
export default {
    props: [
        "props",
    ],
    data: function () {
        return {
            alt: this.props.alt,
            src: this.props.src,
            action: this.props.action,
            args: this.props.args,
            visible: this.props.visible
        }
    },
    methods: {
        doAction() {
            this.action(this.args);
        }
    },
    computed: {
        isFirst() {
            return this.$vnode.key === 0;
        }
    }
}
</script>

<style lang="sass" scoped>
.icon
    width: 4rem
    height: 4rem
    outline: none
</style>
