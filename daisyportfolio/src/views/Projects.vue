<template>
  <div id="projects">
    <navigation-bar id="nav"></navigation-bar>
    <nav-desktop id="nav-desktop"></nav-desktop>
    <div id="title">
      <h1>PROJECTS</h1>
      <p>
        With over 6 years of multi-disciplinary design background, I have
        mastered series of professional skills including innovative and
        analytical problem-solving ability, effective communication and
        collaboration skill, strong software and web technology skills, all of
        which are indispensable to ensure success of projects.
      </p>
      <p>
        My portfolio collects 3 main course projects completed during Full-Stack
        Development Diploma program. In addition, some selected works related to
        my graphic and architectural design experience are also included to
        better demonstrate my strong visual design capability.
      </p>
      <div id="category">
        <h3 id="web" @click="getWeb">WEB WORKS</h3>
        <h3 id="other" @click="getOther">OTHER DESIGNS</h3>
      </div>
    </div>
    <div class="work-show" v-if="display">
      <work-card-list class="mobile-tablet"></work-card-list>
      <!-- <div class="desktop">
        <vue-work-list class="work-list-1"></vue-work-list>
        <html-work-list class="work-list-2"></html-work-list>
      </div> -->
    </div>
    <div class="work-show" v-if="display == false">
      <other-work-card-list class="mobile-tablet"></other-work-card-list>
      <!-- <div class="desktop">
        <other-two-list class="work-list-1"></other-two-list>
        <other-third class="work-list-2"></other-third>
      </div> -->
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import OtherWorkCardList from "../components/OtherWorkCardList.vue";
import WorkCardList from "../components/WorkCardList.vue";
import FooterBar from "../components/Footer.vue";
import NavDesktop from "../components/NavDesktop.vue";
// import VueWorkList from "../components/VueWorkList.vue";
// import HtmlWorkList from "../components/HtmlWorkList.vue";
// import OtherTwoList from "../components/OtherTwo.vue";
// import OtherThird from "../components/OtherThird.vue";
export default {
  components: {
    WorkCardList,
    NavigationBar,
    OtherWorkCardList,
    FooterBar,
    NavDesktop,
    // HtmlWorkList,
    // VueWorkList,
    // OtherTwoList,
    // OtherThird,
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    getWeb: function () {
      this.display = true;
      document.getElementById("web").style.color = "#bb9457ff";
      document.getElementById("other").style.color = "black";
    },
    getOther: function () {
      this.display = false;
      document.getElementById("other").style.color = "#bb9457ff";
      document.getElementById("web").style.color = "black";
    },
  },
  mounted() {
    this.getWeb();
  },
};
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: start;
}

#nav-desktop {
  display: none;
}

#title {
  width: 100%;
  min-height: 55vh;
  display: grid;
  justify-items: center;
  align-items: start;
  align-content: start;

  h1 {
    width: 40%;
    padding: 0;
    margin: 0.5em 0 0.5em 0;
    font-weight: bold;
    font-size: 1.5rem;
    color: #6f1d1bff;
    border-bottom: 2px solid #6f1d1bff;
  }

  p {
    width: 90%;
    font-size: 0.8rem;
    padding: 1em;
    line-height: 1.3em;
    text-align: justify;
    background-color: lightgrey;
  }

  #category {
    width: 90%;
    min-height: 5vh;
    display: grid;
    grid-template-columns: 0.8fr 1.1fr;
    justify-items: center;
    align-items: start;

    h3 {
      width: 100%;
      padding: 0;
      margin: 1.5em 0 0.5em 0;
      font-weight: bold;
      font-size: 0.8rem;
      color: #6f1d1bff;

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #6f1d1bff;
      }

      &:active {
        border-bottom: 2px solid #bb9457ff;
      }
    }
  }
}

.work-show {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: start;
}

// .desktop {
//   display: none;
// }

@media only screen and (min-width: 600px) {
  #title {
    min-height: 50vh;
    h1 {
      width: 25%;
      margin: 1em 0 1em 0;
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
      padding: 1em;
      line-height: 1.5em;
    }

    #category {
      h3 {
        font-size: 1.5rem;
        margin: 1.5em 0 1em 0;
      }
    }
  }

  .work-show {
    min-height: 100vh;
  }

  // .desktop {
  //   display: none;
  // }
}

@media only screen and (min-width: 1024px) {
  #nav {
    display: none;
  }

  #nav-desktop {
    width: 100%;
    height: 12vh;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  #title {
    width: 90%;
    min-height: 50vh;
    align-items: start;
    align-content: start;

    h1 {
      width: 20%;
      margin: 1em 0 1em 0;
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 1em;
      line-height: 2em;
      width: 100%;
    }

    #category {
      margin-top: 2em;

      h3 {
        width: 70%;
        font-size: 1.5rem;
        margin: 0 0 0 0;
      }
    }
  }

  .work-show {
    width: 90%;
    min-height: 100vh;
    justify-items: center;
    align-items: start;
    margin-top: 2em;

    .mobile-tablet {
      width: 100%;
      min-height: 100vh;
      display: grid;
      justify-items: center;
      align-items: start;
      grid-template-columns: 1fr 1fr;
    }

    // .desktop {
    //   width: 100%;
    //   min-height: 60vh;
    //   display: grid;
    //   justify-items: center;
    //   align-items: center;

    //   .work-list-1 {
    //     width: 100%;
    //     min-height: 60vh;
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    //   }

    //   .work-list-2 {
    //     width: 50%;
    //     min-height: 60vh;
    //     display: grid;
    //   }
    // }
  }
}

@media only screen and (min-width: 2400px) {

  #title {
    width: 90%;
    min-height: 40vh;

    h1 {
      width: 15%;
    }

    p {
      font-size: 1.5rem;
    }

    #category {
      height: 3vh;
      margin: 2.5em 0 2em 0;

      h3 {
        font-size: 2rem;
      }
    }
  }

  .work-show {
    min-height: 80vh;
  }
}
</style>