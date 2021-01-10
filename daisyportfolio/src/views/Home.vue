<template>
  <div id="body">
    <div class="welcome">
      <span id="splash-overlay" class="splash"></span>
      <span id="welcome" class="z-depth-4"></span>

      <header class="navbar-fixed">
        <div></div>
        <img src="../assets/linkedin.png" alt="Linkedin logo" />
        <img src="../assets/github.png" alt="GitHub logo" />
      </header>

      <main class="body">
        <div class="container-1">
          <h2>HELLO, MY NAME IS</h2>
          <h1 class="title">DAISTY TONG</h1>
          <p>I’m a Full-Stack Web Developer</p>
          <div class="btn-container">
            <a class="btn" @click="goToProjects"
              ><span>VIEW MY PROJECTS</span></a
            >
          </div>
        </div>
        <img
          class="enter-img"
          @click="goToAbout"
          src="../assets/enter_icon.png"
          alt="enter icon"
        />
      </main>
    </div>
    <div id="copyright">
      <h4>DAISY TONG<span id="text">@2020</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects: function () {
      this.$router.push("/projects");
    },
    goToAbout: function () {
      this.$router.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
#body {
  display: flex;
  // height: 100vh;
  flex-direction: column;
}

.welcome {
  background-color: #657786;
  background-image: linear-gradient(#657786, #e1e8ed);
  min-height: 100vh;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

.welcome .splash {
  height: 0px;
  padding: 0px;
  border: 130em solid black;
  position: fixed;
  left: 50%;
  top: 100%;
  display: block;
  box-sizing: initial;
  overflow: hidden;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
    borderRadius 0.2s 2.3s linear forwards;
}

.welcome #welcome {
  background: #aab8c2;
  width: 56px;
  height: 56px;
  position: absolute;
  left: 50%;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards,
    moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards,
    moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
    materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards,
    hide 2s 2.9s ease forwards;
}

/* moveIn */
.welcome header,
.welcome img {
  opacity: 0;
  animation: moveIn 2s 3.1s ease forwards;
}

@keyframes init {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 56px;
    height: 56px;
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes puff {
  0% {
    top: 100%;
    height: 0px;
    padding: 0px;
  }
  100% {
    top: 50%;
    height: 100%;
    padding: 0px 100%;
  }
}

@keyframes borderRadius {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@keyframes moveDown {
  0% {
    top: 50%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 100%;
  }
}

@keyframes moveUp {
  0% {
    background: #657786;
    top: 100%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 100%;
    background: #657786;
  }
}

@keyframes materia {
  0% {
    background: darkgrey;
  }
  50% {
    background: darkgrey;
    top: 26px;
  }
  100% {
    background: black;
    width: 100%;
    height: 64px;
    border-radius: 0px;
    top: 26px;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.navbar-fixed {
  width: 100%;
  height: 8vh;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 60% 20% 20%;
  background-color: black;

  img {
    width: 40%;
  }
}

.body {
  width: 100%;
  height: 84vh;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: 8em;
}

.container-1 {
  height: 20vh;
  animation: fadeInDown;
  animation-duration: 2s;

  h2 {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1em;
    font-weight: normal;
    // text-shadow: 2px 2px 1px white;
  }

  h1 {
    width: 100%;
    font-size: 1.5rem;
    letter-spacing: 0.2em;
    text-shadow: 2px 2px 1px black;
    color: #bb9457ff;
    font-weight: bold;
  }

  p {
    width: 100%;
    font-size: 1.3rem;
    margin: 1em 0 1em 0;
    // text-shadow: 2px 2px 1px white;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.btn-container {
  height: 20vh;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-align: center;
  align-items: center;
  justify-content: center;
}

.btn {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 60px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #6f1d1bff;

  span {
    display: inline-block;
    position: relative;
    top: 25px;
    left: 0px;
    height: 50px;
    z-index: 1000;
    transition: transform 0.3s, color 0.2s;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;

    display: inline-block;
    width: 190px;
    height: 42px;

    border: 4px solid #6f1d1bff;
    border-radius: 50px;

    z-index: 20;
  }

  &:before {
    bottom: 0;
    left: 0;
    transition: transform 0.3s, background-color 0.3s;
  }

  &:after {
    top: 0;
    left: 10px;
    opacity: 0.2;
    transition: transform 0.3s, opacity 0.3s;
  }

  // Hover

  &:hover {
    span {
      color: #fff;
      transform: translate(5px, -5px);
    }
    &:before {
      background-color: #6f1d1bff;
      transform: translate(5px, -5px);
    }
    &:after {
      transform: translate(-5px, 5px);
      opacity: 0;
    }
  }

  // Active
  &:active {
    &:before {
      background-color: #000;
    }
  }
}
.enter-img {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10vh;
  right: 10vw;
}

#copyright {
  width: 100%;
  height: 8vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: black;

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    color: lightgrey;
  }

  #text {
    font-size: 0.8rem;
    color: red;
    font-weight: normal;
  }
}
</style>