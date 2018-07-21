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
                  "gen-dungeon",
                ],
                global: true
              },
              {
                value: "Town",
                event: "addNewBox",
                args:[ 
                  "gen-town",
                ],
                global: true
              },
              {
                value: "Creature",
                event: "addNewBox",
                args:[ 
                  "gen-creature",
                ],
                global: true
              },
              {
                value: "NPC",
                event: "addNewBox",
                args:[ 
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
                  "exp-town"
                ],
              },
              {
                value: "Dungeon",
                event: "addNewBox",
                args:[ 
                  "exp-dungeon"
                ],
              },
              {
                value: "Wilderness",
                event: "addNewBox",
                args:[ 
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
            event: "rollBox"
          }
        ],
        content: [
          {
            component: 'RadioButtonGrid',
            props: {
              buttons: [
                {
                  value: "Small"
                },
                {
                  value: "Medium"
                },
                {
                  value: "Large"
                },
                {
                  value: "Huge"
                }
              ]
            }
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