export const menuData = {
    "ptb-main": {
      title: "Main",
      subTitle: "Create and explore..",
      content: [
        {
          component: 'ButtonGrid',
          props: {
            buttons: [
              {
                value: "Generate",
                event: "goTo",
                args:"ptb-generate"
              },
              {
                value: "Explore",
                event: "goTo",
                args:"ptb-explore"
              }
            ]
          }
        }
      ]
    },
    "ptb-generate": {
      title: "Generate",
      subTitle: "Draw maps, leave blanks..",
      content: [
        {
          component: 'ButtonGrid',
          props: {
            buttons: [
              {
                value: "Dungeon",
                event: "addNewBox",
                args:"gen-dungeon"
              },
              {
                value: "Town",
                event: "addNewBox",
                args:"gen-town"
              },
              {
                value: "Creature",
                event: "addNewBox",
                args:"gen-creature"
              },
              {
                value: "NPC",
                event: "addNewBox",
                args:"gen-npc"
              },
            ]
          }
        }
      ]
    },
    "ptb-explore": {
      title: "Explore",
      subTitle: "Portray a fantastic world..",
      content: [
        {
          component: 'ButtonGrid',
          props: {
            buttons: [
              {
                value: "Town",
                event: "addNewBox",
                args:"exp-town"
              },
              {
                value: "Dungeon",
                event: "addNewBox",
                args:"exp-dungeon"
              },
              {
                value: "Wilderness",
                event: "addNewBox",
                args:"exp-wilderness"
              }
            ]
          }
        }
      ]
    },
    "gen-dungeon": {
        title: "New Dungeon",
        subTitle: "Welcome to the dungeon..",
        content: [
          {
            component: 'generator'
          }
        ]
    },
    "gen-creature": {
      title: "New Creature",
      subTitle: "",
      content: [
        {
          component: 'generator'
        }
      ]
    },
    "gen-town": {
      title: "New Town",
      subTitle: "",
      content: [
        {
          component: 'generator'
        }
      ]
    },
    "gen-npc": {
      title: "New NPC",
      subTitle: "",
      content: [
        {
          component: 'generator'
        }
      ]
    }
  }