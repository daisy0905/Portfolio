<template>
  <div id="nav-desktop">
    <div id="header">
      <h2>DAISY TONG</h2>
      <div></div>
      <h3 :style="home" @click="goToHome">HOME</h3>
      <h3 :style="about" @click="goToAbout">ABOUT</h3>
      <h3 :style="projects" @click="goToProjects">PROJECTS</h3>
      <h3 :style="contact" @click="goToContact">CONTACT</h3>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: {
        color: "#bb9457ff",
        fontWeight: "bold",
      },
      home: {},
      about: {},
      projects: {},
      contact: {},
    };
  },
  methods: {
    goToHome: function () {
      this.$router.push("/");
    },
    goToAbout: function () {
      this.$router.push("/about");
    },
    goToProjects: function () {
      this.$router.push("/projects");
    },
    goToContact: function () {
      this.$router.push("/contact");
    },
  },
  mounted() {
    if (this.$router.history.current.path == "/") {
      this.home = this.active;
    } else if (this.$router.history.current.path == "/about") {
      this.about = this.active;
    } else if (this.$router.history.current.path == "/projects") {
      this.projects = this.active;
    } else if (this.$router.history.current.path == "/contact") {
      this.contact = this.active;
    }
  },
};
</script>

<style lang="scss" scoped>
#nav-desktop {
  height: 12vh;
  width: 100%;
  display: grid;
  align-items: center;
  padding: 10px 0 0 0;
  margin-bottom: 1em;
  z-index: 100;
  margin-bottom: 0.5em;
}

#header {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 40% repeat(5, 10%) auto;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 2em;
    color: black;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #bb9457ff;
    }

    &:active {
      color: #bb9457ff;
      border-bottom: 2px solid #6f1d1bff;
    }
  }
}

@media only screen and (min-width: 2400px) {
  #header {

    h2 {
      font-size: 2.5rem;
      letter-spacing: 10px;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
}
</style>