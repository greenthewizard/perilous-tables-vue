import Vue from "vue";

export const EventBus = new Vue({
    methods: {
        registerListener(componentId, event, callback) {
            this.$on(`${componentId}-${event}`, callback)
        }
    },
});