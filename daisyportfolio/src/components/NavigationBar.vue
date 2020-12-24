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
      <h2 @click="goToHome" :class="{ isActive: active }">HOME</h2>
      <h2 @click="goToAbout" :class="{ isActive: 1 }">ABOUT</h2>
      <h2 @click="goToProjects" :class="{ isActive: 2 }">PROJECTS</h2>
      <h2 @click="goToContact" :class="{ isActive: 3 }">CONTACT</h2>
      <div></div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies"
export default {
  data() {
    return {
      display: true,
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
      cookies.set("currentPage", 0)
      this.$store.commit("changePage", 0)
      console.log(this.active)
      this.$router.push("/");
    },
    goToAbout: function () {
      cookies.set("currentPage", 1)
      this.$store.commit("changePage", 1)
      console.log(this.active)
      this.$router.push("/about");
    },
    goToProjects: function () {
      cookies.set("currentPage", 2)
      this.$store.commit("changePage", 2)
      console.log(this.active)
      this.$router.push("/projects");
    },
    goToContact: function () {
      cookies.set("currentPage", 3)
      this.$store.commit("changePage", 3)
      console.log(this.active)
      this.$router.push("/contact");
    },
  },
  computed: {
    active() {
      return this.$store.getters.pageGet;
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 5px;
  }
}

#nav-bar {
  height: 18vh;
  width: 100%;
  display: grid;
  justify-items: left;
  align-items: left;
  position: absolute;
  top: 8vh;
  background-color: black;
  opacity: 0.7;
  z-index: 100;

  h2 {
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin-left: 2em;
    color: white;
  }

  .isActive {
    color: red;
  }
}
</style>