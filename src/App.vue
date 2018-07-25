<template>
  <div id="app">
    <h1>Perilous Tables</h1>
    <div class="grid-container">
      <component 
        v-for="boxObj in getCombinedBoxList()" 
        :is="boxObj.name"
        :key="boxObj.id"
        v-bind="boxObj">
      </component>
    </div>
  </div>
</template>

<script>
//Components
import boxComponents from './components/boxBarrel.js';
import Vue from 'vue';

//Libraries/Utils
import { EventBus } from './eventBus';
import { uniqueId } from 'lodash';

export default {
  name: 'app',
  components: Object.assign({}, boxComponents),
  data: function () {
    return {
      boxes: {}
    }
  },
  methods: {
    createNewBox: function (groupName, componentName) {
      const boxId = uniqueId('box-');
      return {
        name: componentName,
        boxId,
        groupName,
        history: []
      };
    },
    addNewBox: function(args) {
      const [groupName, componentName] = args;
      if (!this.boxes[groupName]) {
        Vue.set(this.boxes, groupName, []);
      }
      this.boxes[groupName].push(this.createNewBox(groupName, componentName));
    },
    getBoxById(boxId){
      return this.getCombinedBoxList().find(el => el.boxId === boxId);
    },
    replaceBox(args) {
      const [boxId, componentName] = args;
      const targetBox = this.getBoxById(boxId);
      targetBox.history.push(targetBox.name);
      targetBox.name = componentName;
    },
    goBack(args) {
      const [boxId] = args;
      const targetBox = this.getBoxById(boxId);
      if (targetBox.history.length > 0) {
        targetBox.name = targetBox.history.pop();
      }
    },
    getCombinedBoxList: function () {
      const boxList = Object.values(this.boxes).reduce((acc, val) => {
        acc.push(...val.slice().reverse());
        return acc;
      }, []);
      return boxList;
    }
  },
  created: function() {
    //Register Event Listeners
    EventBus.on('app', 'addNewBox', this.addNewBox);
    EventBus.on('app', 'replaceBox', this.replaceBox);
    EventBus.on('app', 'goBack', this.goBack);

    this.addNewBox(['main', 'NavMain']);
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
