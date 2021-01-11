<template>
  <div id="nav">
    <div id="header">
      <div></div>
      <h3 @click="goToHome">DAISY TONG</h3>
      <div class="icon">
        <img
          v-if="display"
          @click="displayNavBar"
          src="../assets/hamburger-menu-icon.png"
          alt="nav icon"
        />
        <img
          v-else
          @click="hideNavBar"
          src="../assets/hamburger-menu-icon-open.png"
          alt="nav icon"
        />
      </div>
    </div>
    <div v-if="display == false" id="nav-bar">
      <div></div>
      <h2 :style="home" @click="goToHome">HOME</h2>
      <h2 :style="about" @click="goToAbout">ABOUT</h2>
      <h2 :style="projects" @click="goToProjects">PROJECTS</h2>
      <h2 :style="contact" @click="goToContact">CONTACT</h2>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: true,
      disactive: {
        color: "black",
      },
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
    displayNavBar: function () {
      this.display = false;
    },
    hideNavBar: function () {
      this.display = true;
    },
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
#nav {
  height: 8vh;
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
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid darkgrey;

  .icon {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    img {
      height: 25px;
      object-fit: cover;
    }
  }

  h3 {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

#nav-bar {
  height: 18vh;
  width: 100%;
  display: grid;
  justify-items: left;
  align-items: center;
  position: absolute;
  top: 8vh;
  background-color: black;
  opacity: 0.7;
  z-index: 100;

  h2 {
    font-weight: normal;
    font-size: 0.8rem;
    margin-left: 2em;
    color: white;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #bb9457ff;
    }

    &:active {
      color: #bb9457ff;
      border-bottom: 2px solid white;
    }
  }
}

@media only screen and (min-width: 600px) {
  #header {
    .icon {
      img {
        height: 40px;
      }
    }

    h3 {
      font-size: 1.8rem;
      letter-spacing: 8px;
    }
  }

  #nav-bar {
    h2 {
      font-size: 1.3rem;
      margin-left: 3em;
    }
  }
}
</style>