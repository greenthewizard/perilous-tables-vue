<template>
    <span>
        <slot :result="result"></slot>
    </span>
</template>

<script>
import perilous from '../js/perilous/perilous';
// import { EventBus } from '../eventBus';

export default {
    props: {
        boxId: String,
        tableRef: String
    },
    data() {
        return {
            intialTableRef: this.tableRef,
            table: null,
            result: null
        }
    },
    methods: {
        rollTable() {
            this.table
                .then(table => table.roll())
                .then(table => {
                    perilous.resolveString(table.result)
                        .then(str => this.result = str);
                });
        }
    },
    created() {
        this.table = perilous.table(this.intialTableRef);
        this.rollTable();
        console.log('Created');
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'


</style>
