<template>
  <div id="projects">
    <navigation-bar id="nav"></navigation-bar>
    <nav-desktop id="nav-desktop"></nav-desktop>
    <div id="title">
      <h1>PROJECTS</h1>
      <p>
        My portfolio collects 3 main course projects completed during the Full
        Stack Web Development Diploma program. In addition, some selected works
        related to my graphic and architectural design experience are also
        included to better demonstrate my strong visual design capability.
      </p>
      <div id="category">
        <h3 id="web" @click="getWeb">WEB DEVELOPMENT</h3>
        <h3 id="other" @click="getOther">OTHER DESIGN WORKS</h3>
      </div>
    </div>
    <div class="work-show" v-if="display">
      <p>
        The selected works demonstrate that I have a great design sensibility
        for graphics, style and user interface heuristics with deep knowledge of
        various programming languages; and am able to be proficient with graphic
        design software and familiar with responsive web design, SEO and
        user-friendly web application.
      </p>
      <work-card-list class="mobile-tablet"></work-card-list>
      <div class="desktop">
        <vue-work-list class="work-list-1"></vue-work-list>
        <html-work-list class="work-list-2"></html-work-list>
      </div>
    </div>
    <div class="work-show" v-if="display == false">
      <p>
        As a 6-year Design Professional, I have mastered series of professional
        skills including rational and logical thinking and innovative and
        analytical problem-solving ability; strong two dimensional & three
        dimensional communication and computer-aided design skills, all of which
        are indispensable to succeed in graphic design. It is the in-depth
        research, effective communication with clients, creative design process
        and comprehensive thought from conceptualization towards execution that
        serve me well when doing multi-displinary design.
      </p>
      <other-work-card-list class="mobile-tablet"></other-work-card-list>
      <div class="desktop">
        <other-two-list class="work-list-1"></other-two-list>
        <other-third class="work-list-2"></other-third>
      </div>
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
import VueWorkList from "../components/VueWorkList.vue";
import HtmlWorkList from "../components/HtmlWorkList.vue";
import OtherTwoList from "../components/OtherTwo.vue"
import OtherThird from "../components/OtherThird.vue"
export default {
  components: {
    WorkCardList,
    NavigationBar,
    OtherWorkCardList,
    FooterBar,
    NavDesktop,
    HtmlWorkList,
    VueWorkList,
    OtherTwoList,
    OtherThird
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
  height: 30vh;
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
    padding: 0.5em;
    line-height: 1.3em;
    text-align: justify;
    background-color: lightgrey;
  }

  #category {
    width: 100%;
    height: 5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;

    h3 {
      width: 100%;
      padding: 0;
      margin-top: 1.5em;
      font-weight: bold;
      font-size: 0.8rem;
      color: #6f1d1bff;
    }
  }
}

.work-show {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: start;

  p {
    width: 90%;
    font-size: 0.8rem;
    padding: 0.5em;
    line-height: 1.3em;
    text-align: justify;
    margin: 1em 0 1em 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0.5em 0 0.5em 0;
  }
}

.desktop {
  display: none;
}

@media only screen and (min-width: 600px) {

  #title {
    height: 40vh;

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
      }
    }
  }

  .work-show {
    p {
      font-size: 1.2rem;
      padding: 1em;
      line-height: 1.5em;
      margin: 1em 0 2em 0;
      padding: 1em 0 1em 0;
    }
  }

  .desktop {
    display: none;
  }
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
    h1 {
      width: 15%;
      margin: 1em 0 1em 0;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      padding: 1em;
    }

    #category {
      h3 {
        font-size: 2rem;
      }
    }
  }

  .work-show {
    p {
      font-size: 1.5rem;
    }

    .mobile-tablet {
      display: none;
    }

    .desktop {
      width: 100%;
      min-height: 30vh;
      display: grid;
      justify-items: center;
      align-items: center;

      .work-list-1 {
        width: 100%;
        min-height: 30vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .work-list-2 {
        width: 50%;
        min-height: 30vh;
        display: grid;
      }
    }
  }
}
</style>