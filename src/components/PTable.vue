<template>
    <div>
        <p v-if="result">{{ result }}</p>
    </div>
</template>

<script>
import perilous from '../js/perilous/perilous';
import { EventBus } from '../eventBus'

export default {
    props: {
        boxId: String
    },
    data() {
        return {
            intialTableRef: 'tbl:creature/monster[base]',
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
        EventBus.on(this.boxId, 'roll', this.rollTable);
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/colors'

p
    margin: 0
    padding: 0
    color: $lightgrey
</style>
