import Vue from "vue";

export const EventBus = new Vue({
    methods: {
        on(componentId, event, callback) {
            this.$on(`${componentId}-${event}`, callback)
        },
        emit(componentId, event, args) {
            this.$emit(`${componentId}-${event}`, args);
        }
    }
});