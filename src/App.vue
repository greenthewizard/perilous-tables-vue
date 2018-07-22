<template>
  <div id="app">
    <h1>Perilous Tables</h1>
    <div class="grid-container">
      <pt-box 
        v-for="{ destination, id } in getCombinedBoxList()" 
        :key="id"
        :initial="destination">
      </pt-box>
    </div>
  </div>
</template>

<script>
//Components
import PtBox from './components/PtBox.vue';

//Libraries/Utils
import { EventBus } from './eventBus';
import { uniqueId } from 'lodash';

export default {
  name: 'app',
  components: {
    PtBox
  },
  data: function () {
    return {
      ptBoxes: {
        "main": [
          this.createNewBox('ptb-main')
        ],
        "generators": [

        ]
      }
    }
  },
  methods: {
    addNewBox: function(args) {
      const [section, dest] = args;
      console.log(section, dest);
      if (!this.ptBoxes[section]) {
        this.$set(this.ptBoxes, section, []);
      }
      this.ptBoxes[section].push(
        this.createNewBox(dest)
      );
    },
    createNewBox: function(dest) {
      return {
        destination: dest,
        id: uniqueId('ptBox_')
      }
    },
    getCombinedBoxList: function () {
      const boxList = Object.values(this.ptBoxes).reduce((acc, val) => {
        acc.push(...val.slice().reverse());
        return acc;
      }, []);
      return boxList;
    }
  },
  created: function() {
    //Register Event Listeners
    EventBus.on('app', 'addNewBox', this.addNewBox)
  }
}
</script>

<style lang="sass">
@import './assets/styles/normalize'
@import './assets/styles/base'
@import url('https://fonts.googleapis.com/css?family=Roboto')
@import './assets/styles/colors'

body
    font-family: 'Roboto', sans-serif
    color: $grey

h1
    margin: .5rem
    color: $lightgrey

.grid-container 
  width: 80vw
  max-width: 90rem
  min-width: 30rem
  margin: 3rem auto
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))
  grid-gap: .7rem

.l-flexbox
  display: flex
.l-flexitem--end-cap
  margin-left: auto
.l-flexitem--padded
  padding: 0 1.2rem 0 0

.grid-section-divider
  grid-column: 1 / -1
  border-bottom: 1px solid $lightgrey
.grid-section-divider__header
  font-size: 2.3rem
  color: $lightgrey
  padding-bottom: 0
.grid-section-divider--collapsed
  color: #bad455
</style>
