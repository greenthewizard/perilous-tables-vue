import PtBox from '../PtBox';

export default {
    props: {
        name: String,
        boxId: String,
        groupName: String,
        history: Array,
        options: Object
    },
    components: {
        PtBox
    }
}