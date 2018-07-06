export const menuData = {
    "ptb-main": {
      title: "Main",
      subTitle: "Create and explore..",
      buttonList: [
        {
          value: "Generate",
          destination: "ptb-generate"
        },
        {
          value: "Explore",
          destination: "ptb-explore"
        }
      ]
    },
    "ptb-generate": {
      title: "Generate",
      subTitle: "Draw maps, leave blanks..",
      buttonList: [
        {
          value: "Dungeon",
          destination: "gen-dungeon"
        },
        {
          value: "Town",
          destination: "gen-town"
        },
        {
          value: "Creature",
          destination: "gen-creature"
        },
        {
          value: "NPC",
          destination: "gen-npc"
        }
      ]
    },
    "ptb-explore": {
      title: "Explore",
      subTitle: "Portray a fantastic world..",
      buttonList: [
        {
          value: "Town",
          destination: "gen-town"
        },
        {
          value: "Dungeon",
          destination: "gen-dungeon"
        },
        {
          value: "Wilderness",
          destination: "gen-wilderness"
        }
      ]
    },
    "gen-dungeon": {
        title: "New Dungeon",
        subTitle: "Welcome to the dungeon..",
        opensNewBox: true
    },
    "gen-town": {
        title: "New Town",
        subTitle: "Somewhere safe, or is it?",
        opensNewBox: true
    },
    "gen-creature": {
        title: "New Creature",
        subTitle: "Fantastic beasts.",
        opensNewBox: true
    },
    "gen-npc": {
        title: "New NPC",
        subTitle: "A friendly face?",
        opensNewBox: true
    }
  }