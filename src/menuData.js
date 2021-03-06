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
                args:[ 
                  "ptb-generate"
                ],
              },
              {
                value: "Explore",
                event: "goTo",
                args:[ 
                  "ptb-explore"
                ],
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
                args:[
                  "generators", 
                  "gen-dungeon",
                ],
                global: true
              },
              {
                value: "Town",
                event: "addNewBox",
                args:[
                  "generators", 
                  "gen-town",
                ],
                global: true
              },
              {
                value: "Creature",
                event: "addNewBox",
                args:[
                  "generators", 
                  "gen-creature",
                ],
                global: true
              },
              {
                value: "NPC",
                event: "addNewBox",
                args:[
                  "generators", 
                  "gen-npc",
                ],
                global: true
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
                args:[ 
                  "explore",
                  "exp-town"
                ],
              },
              {
                value: "Dungeon",
                event: "addNewBox",
                args:[ 
                  "explore",
                  "exp-dungeon"
                ],
              },
              {
                value: "Wilderness",
                event: "addNewBox",
                args:[ 
                  "explore",
                  "exp-wilderness"
                ],
              }
            ]
          }
        }
      ]
    },
    "gen-dungeon": {
        title: "New Dungeon",
        subTitle: "Welcome to the dungeon..",
        titleButtons: [
          {
            alt: "A dice",
            icon: "dice",
            event: "roll"
          }
        ],
        content: [
          {
            component: 'ButtonGrid',
            props: {
              type: 'radio',
              groupName: 'Size',
              buttons: [
                {
                  value: "Small",
                  selected: false
                },
                {
                  value: "Medium",
                  selected: true
                },
                {
                  value: "Large",
                  selected: false
                },
                {
                  value: "Huge",
                  selected: false
                }
              ]
            }
          }
        ]
    },
    "gen-creature": {
      title: "New Creature",
      subTitle: "",
      titleButtons: [
        {
          alt: "A dice",
          icon: "dice",
          event: "roll"
        }
      ],
      content: [
        {
          component: 'PTable'
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
      titleButtons: [
        {
          alt: "A dice",
          icon: "dice",
          event: "roll"
        }
      ],
      content: [
        {
          component: 'ButtonGrid',
          groupName: 'context',
          props: {
            type: "checkbox",
            cols: 3,
            buttons: [
              {
                value: "Wilderness",
                selected: false
              },
              {
                value: "Rural",
                selected: false
              },
              {
                value: "Urban",
                selected: false
              }
            ]
          }
        },
        {
          component: 'ButtonGrid',
          props: {
            type: "checkbox",
            cols: 1,
            buttons: [
              {
                value: "Create as Follower?",
                dataName: "follower",
                selected: false
              },
            ]
          }
        }
      ]
    }
  }