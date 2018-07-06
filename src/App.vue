<template>
  <div id="app">
    <h1>Perilous Tables</h1>
    <div class="grid-container">
      <pt-box 
        v-for="(key, i) in ptBoxes" 
        :key="key + '-' +  i"
        :box-id="i" 
        :menuData="menuData[key.current]"
        :history="key.history.length > 0">
      </pt-box>
    </div>
  </div>
</template>

<script>
import PtBox from './components/PtBox.vue'
import { menuData } from './menuData'
import { EventBus } from './eventBus'

export default {
  name: 'app',
  components: {
    PtBox
  },
  data: function () {
    return {
      ptBoxes: [
        {
          current: "ptb-main",
          history: []
        }
      ],
      menuData
    }
  },
  methods: {
    navigate: function(dest, i) {
      const boxObj = this.ptBoxes[i];
      if (menuData[dest].opensNewBox) {
        this.addNewBox(dest);
      } else {
        this.updateBoxDestination(dest, i);
      }
    },
    goBack: function(i) {
      const boxObj = this.ptBoxes[i];
      if (boxObj.history.length > 0) {
        boxObj.current = boxObj.history.pop();
      }
    },
    updateBoxDestination(dest, i) {
      const boxObj = this.ptBoxes[i];
      boxObj.history.push(boxObj.current);
      boxObj.current = dest;
    },
    addNewBox: function(dest) {
      this.ptBoxes.push({
        current: dest,
        history: []
      });
    }
  },
  created: function() {
    EventBus.$on('navigate', this.navigate);
    EventBus.$on('goBack', this.goBack);
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
