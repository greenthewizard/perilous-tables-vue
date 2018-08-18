<template>
    <pt-box
        title="New Dungeon"
        :subTitle="options.size">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <h4>Themes</h4>
            <ul>
                <li 
                    v-for="n in sizeNumber"
                    :key="boxId + '-' + n">
                        <p-table tableRef="tbl:dungeon/theme[base]">
                            <span slot-scope="t">{{ t.result }}</span>
                        </p-table>
                </li>
            </ul>
        </template>
    </pt-box>
</template>

<script>
//Mixin
import boxMixin from 'mixins/boxMixin';

//Components
import PTable from 'components/PTable.vue';

export default {
    mixins: [boxMixin],
    components: {
        PTable
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