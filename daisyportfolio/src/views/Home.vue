<template>
  <div id="home">
    <h1>
      Hello, I’m <span>Daisy Tong</span> I’m a Junior Full-stack Web Developer
    </h1>
    <h2 @click="goToProjects">VIEW MY PROJECTS</h2>
    <img @click="goToAbout" src="../assets/enter_icon.png" alt="enter icon">
  </div>
</template>

<script>
import cookies from "vue-cookies"
export default {
  methods: {
    goToProjects: function() {
      cookies.set("currentPage", 2)
      this.$store.commit("changePage", 2)
      console.log(this.isActive)
      this.$router.push("/projects")
    },
    goToAbout: function() {
      cookies.set("currentPage", 1)
      this.$store.commit("changePage", 1)
      console.log(this.isActive)
      this.$router.push("/about")
    }
  },
  computed: {
    isActive() {
      return this.$store.getters.pageGet;
    }
  },
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background: url(../assets/home_background.gif);
  background-size: cover;
  background-position: top;
  padding: 13em 0 13em 0;

  h1 {
    width: 75%;
    font-size: 1.2rem;
    color: white;
    line-height: 2em;
  }

  span {
    color: red;
    font-size: 2rem;
  }

  h2 {
    width: 60%;
    padding: 0.5em;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }

  img {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 5vh;
    right: 5vw;
  }
}
</style>