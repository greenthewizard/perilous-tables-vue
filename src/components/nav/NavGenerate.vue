<template>
    <pt-box
        v-bind="boxProps">
        <template slot="titleButtons">
        </template>
        <template slot="content">
            <button-grid>
                <pt-button
                    value="Dungeon">
                </pt-button>
                <pt-button
                    value="Town">
                </pt-button>
                <pt-button
                    value="Creature">
                </pt-button>
                <pt-button
                    value="NPC">
                </pt-button>
            </button-grid>
        </template>
    </pt-box>
</template>

<script>
import PtBox from '../PtBox.vue';
import ButtonGrid from '../ButtonGrid.vue';
import PtButton from '../PtButton.vue';

import { EventBus } from '../../eventBus';

export default {
    props: {
        boxId: String,
        groupName: String
    },
    components: {
        PtBox,
        ButtonGrid,
        PtButton
    },
    data() {
        return {
            boxProps: {
                title: 'Generate',
                subTitle: 'Draw maps, leave blanks..'
            }
        }
    },
    methods: {
        replaceBox(name) {
            EventBus.emit(
                'app', 'replaceBox', 
                [this.groupName, this.boxId, name]
            );
        }
    },
}
</script>

<style language="sass" scoped>

</style>