<template>
  <div class="skillsets">
    <div class="diagram">
      <img src="../assets/skill_diagram.png" alt="the image show 3 skills" />
    </div>
    <div class="skill-container">
      <div class="skill-unit-1">
        <img src="../assets/web_diagram.png" alt="web diagram" />
        <div class="skill-component">
          <web-skill
            v-for="webskill in webskills"
            :key="webskill.id"
            :webskill="webskill"
          ></web-skill>
        </div>
      </div>
      <div class="skill-unit-2">
        <img src="../assets/graphic_diagram.png" alt="graphic diagram" />
        <div class="skill-component">
          <graphic-skill
            v-for="graphicskill in graphicskills"
            :key="graphicskill.id"
            :graphicskill="graphicskill"
          ></graphic-skill>
        </div>
      </div>
      <div class="skill-unit-3">
        <img src="../assets/arch_diagram.png" alt="architecture diagram" />
        <div class="skill-component">
          <arch-skill
            v-for="archskill in archskills"
            :key="archskill.id"
            :archskill="archskill"
          ></arch-skill>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebSkill from "./WebSkill.vue";
import GraphicSkill from "./GraphicSkill.vue";
import ArchSkill from "./ArchSkill.vue";
export default {
  name: "skill-sets",
  components: {
    WebSkill,
    GraphicSkill,
    ArchSkill,
  },
  data() {
    return {
      webskills: [
        {
          id: 0,
          name: "HTML",
          icon: require("@/assets/html_icon.png"),
        },
        {
          id: 1,
          name: "CSS",
          icon: require("@/assets/css_icon.png"),
        },
        {
          id: 2,
          name: "JavaScript",
          icon: require("@/assets/javascript_icon.png"),
        },
        {
          id: 3,
          name: "SASS(SCSS)",
          icon: require("@/assets/sass_icon.png"),
        },
        {
          id: 4,
          name: "Git",
          icon: require("@/assets/git_icon.png"),
        },
        {
          id: 5,
          name: "GitHub",
          icon: require("@/assets/github_icon.png"),
        },
        {
          id: 6,
          name: "Bash",
          icon: require("@/assets/bash_icon.png"),
        },
        {
          id: 7,
          name: "Vue.js",
          icon: require("@/assets/vue_icon.png"),
        },
        {
          id: 8,
          name: "Vue Router",
          icon: require("@/assets/vue_router_icon.png"),
        },
        {
          id: 9,
          name: "Vuex",
          icon: require("@/assets/vuex_icon.png"),
        },
        {
          id: 10,
          name: "REST API",
          icon: require("@/assets/api_icon.png"),
        },
        {
          id: 11,
          name: "Python",
          icon: require("@/assets/python_icon.png"),
        },
        {
          id: 12,
          name: "Flask",
          icon: require("@/assets/flask_icon.png"),
        },
        {
          id: 13,
          name: "SQL",
          icon: require("@/assets/sql_icon.png"),
        },
        {
          id: 14,
          name: "MariaDB",
          icon: require("@/assets/db_icon.png"),
        },
      ],
      graphicskills: [
        {
          id: 0,
          name: "Photoshop",
          icon: require("@/assets/photoshop_icon.png"),
        },
        {
          id: 1,
          name: "Illustrator",
          icon: require("@/assets/illustrator_icon.png"),
        },
        {
          id: 2,
          name: "InDesign",
          icon: require("@/assets/indesign_icon.png"),
        },
      ],
      archskills: [
        {
          id: 0,
          name: "AutoCAD",
          icon: require("@/assets/cad_icon.png"),
        },
        {
          id: 1,
          name: "SketchUp",
          icon: require("@/assets/sketchup_icon.png"),
        },
        {
          id: 2,
          name: "Revit",
          icon: require("@/assets/revit_icon.png"),
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.skillsets {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: start;
}

.diagram {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;

  img {
    width: 350px;
  }
}

.skill-container {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;

  .skill-unit-1 {
    width: 100%;
    min-height: 40vh;
    display: grid;
    justify-items: center;
    align-items: start;

    img {
      width: 100px;
    }

    .skill-component {
      width: 100%;
      min-height: 40vh;
      display: grid;
      justify-items: center;
      align-items: start;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1em;
    }
  }

  .skill-unit-2 {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    row-gap: 1em;

    img {
      width: 100px;
      margin-top: 1em;
    }

    .skill-component {
      width: 100%;
      display: grid;
      justify-items: center;
      align-items: start;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1em;
    }
  }

  .skill-unit-3 {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
    row-gap: 1em;

    img {
      width: 100px;
      margin-top: 1em;
    }

    .skill-component {
      width: 100%;
      display: grid;
      justify-items: center;
      align-items: start;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1em;
      padding-bottom: 2em;
    }
  }
}

@media only screen and (min-width: 600px) {
  .diagram {
    img {
      width: 600px;
    }
  }

  .skill-container {
    .skill-unit-1 {
      img {
        width: 200px;
      }

      .skill-component {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .skill-unit-2 {
      img {
        width: 200px;
      }
    }

    .skill-unit-3 {
      img {
        width: 200px;
        margin-top: 1em;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .diagram {
    img {
      width: 800px;
    }
  }

  .skill-container {
    .skill-unit-1 {
      .skill-component {
        grid-template-columns: repeat(5, 1fr);
        margin-bottom: 1em;
      }
    }

    .skill-unit-2 {
      .skill-component {
        margin-bottom: 1em;
      }
    }
  }
}
</style>