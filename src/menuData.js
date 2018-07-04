export const menuData = {
    "ptb-main": {
      title: "Main",
      subTitle: "Create and explore..",
      buttons: [
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
      buttons: [
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
      buttons: [
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
    },
    "gen-town": {
        title: "New Town",
        subTitle: "Somewhere safe, or is it?",
    },
    "gen-creature": {
        title: "New Creature",
        subTitle: "Fantastic beasts.",
    },
    "gen-npc": {
        title: "New NPC",
        subTitle: "A friendly face?",
    }
  }