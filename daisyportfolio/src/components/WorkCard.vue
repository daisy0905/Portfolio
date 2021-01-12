<template>
  <div class="work-card">
    <div class="mobile-tablet">
      <div class="image">
        <img :src="work.cover_image" alt="the cover image of project" />
        <div class="wrap">
          <button @click="showDescription" class="button">DETAILS</button>
        </div>
      </div>
      <div class="description" v-if="show == true">
        <h2>{{ work.name }}</h2>
        <h3 class="purpose">{{ work.purpose }}</h3>
        <h3>{{ work.language }}</h3>
        <h4 @click="open">LEARN MORE</h4>
        <div @click="closeDescription" class="close icon">
          <img src="../assets/close-icon.png" alt="close icon" />
        </div>
      </div>
    </div>
    <div class="desktop">
      <div class="image">
        <img :src="work.cover_image" alt="the cover image of project" />
      </div>
      <div class="description">
        <h2>{{ work.name }}</h2>
        <h3 class="purpose">{{ work.purpose }}</h3>
        <h3>{{ work.language }}</h3>
        <h4 @click="open">LEARN MORE</h4>
      </div>
    </div>
    <div class="details" v-if="display == true">
      <div class="slider">
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
          </div>
        </transition-group>
        <a class="prev" @click="prev" href="#"></a>
        <a class="next" @click="next" href="#"></a>
      </div>
      <div class="content">
        <p>{{ work.description }}</p>
        <div class="details-button">
          <h4 v-if="url != ''" @click="redirect(url)">VIEW SITE</h4>
          <h4 v-if="github_front != ''" @click="redirect(github_front)">
            GITHUB FRONT-END
          </h4>
          <h4 v-if="github_back != ''" @click="redirect(github_back)">
            GITHUB BACK-END
          </h4>
        </div>
        <div @click="open" class="close icon">
          <img src="../assets/close-icon.png" alt="close icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-card",
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      images: this.work.images,
      timer: null,
      currentIndex: 0,
      display: false,
      currentImag: "",
      url: this.work.website,
      github_front: this.work.github_front,
      github_back: this.work.github_back,
      show: false,
    };
  },
  mounted: function () {
    this.startSlider();
  },
  methods: {
    open: function () {
      this.display = !this.display;
    },
    startSlider: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentImage = this.images[
        Math.abs(this.currentIndex++) % this.images.length
      ].image;
    },
    prev: function () {
      this.currentImage = this.images[
        Math.abs(this.currentIndex++) % this.images.length
      ].image;
    },
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
    showDescription: function () {
      this.show = !this.show;
    },
    closeDescription: function () {
      this.show = !this.show;
    },
  },
  computed: {
    currentImg: function () {
      console.log(this.images);
      return this.images[Math.abs(this.currentIndex) % this.images.length]
        .image;
    },
  },
};
</script>

<style lang="scss" scoped>
.work-card {
  width: 100%;
  height: 40vh;
  row-gap: 1vh;
  display: grid;
  justify-items: center;
  align-items: center;
  border: 0;
  position: relative;
  background-color: darkgrey;
  padding: 0.5em 0 0 0;
}

.mobile-tablet {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

.image {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 0;
  padding: 0;
  margin-top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-top: 0;
    border: 3px solid white;
  }
}

.wrap {
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18vh;
  width: 25vw;
}

.button {
  min-width: 100px;
  min-height: 30px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: white;
  background: #bb9457ff;
  background: linear-gradient(90deg, #cbb89a 0%, #bb9457ff 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 8px 8px 15px black;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  z-index: 50;
  opacity: 0.8;
}

button::before {
  content: "";
  border-radius: 1000px;
  min-width: 100px;
  min-height: 30px;
  border: 3px solid #5d3f11;
  box-shadow: 0 0 60px black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}

.button:hover,
.button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
  opacity: 1;
}

button::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 3px solid #bb9457ff;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after,
button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

.description {
  width: 100%;
  height: 40vh;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 1;
  position: absolute;
  z-index: 200;
  background-color: white;
  box-shadow: 0px 0px 0px grey;
  top: 0;
  left: 0;
  padding: 3em 0 3em 0;

  h2 {
    width: 90%;
    padding: 0;
    font-size: 1.2rem;
    color: #333;
  }

  .purpose {
    width: 80%;
    font-size: 0.8rem;
    color: black;
  }

  h3 {
    width: 80%;
    font-size: 0.8rem;
    margin: 0;
    color: #99582aff;
  }

  h4 {
    width: 40vw;
    padding: 0.5em;
    color: black;
    border: 2px solid red;
    font-weight: bold;

    &:hover {
      background-color: grey;
      border: 2px solid #6f1d1bff;
      color: white;
      cursor: pointer;
    }

    &:active {
      background-color: #6f1d1bff;
      border: 1px solid white;
      color: white;
      cursor: pointer;
    }
  }

  .icon {
    width: 100%;
    height: 3vh;
    display: grid;
    justify-items: right;
    align-items: center;
    margin-right: 1em;
    position: absolute;
    top: 1vh;
    left: -1vw;

    img {
      width: 15px;
      height: 15px;
      align-content: right;
      cursor: pointer;
    }
  }
}

.desktop {
  display: none;
}

.details {
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: start;
  align-content: start;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 500;
  background-color: white;
}

.slider {
  width: 100%;
  height: 60vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  width: 100%;
  position: absolute;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

.content {
  width: 100%;
  min-height: 40vh;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: 1.5em;
  background-color: lightgrey;

  p {
    width: 90%;
    font-size: 0.8rem;
    margin: 0;
    line-height: 1.5em;
    text-align: justify;
  }

  .details-button {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 0.8fr 1.2fr 1fr;

    h4 {
      width: 90%;
      padding: 0.5em;
      color: black;
      border: 2px solid #6f1d1bff;
      font-weight: bold;
      font-size: 0.6rem;

      &:hover {
        background-color: grey;
        border: 2px solid #6f1d1bff;
        color: white;
        cursor: pointer;
      }

      &:active {
        background-color: #6f1d1bff;
        border: 1px solid white;
        color: white;
        cursor: pointer;
      }
    }
  }

  .icon {
    width: 100%;
    height: 3vh;
    display: grid;
    justify-items: right;
    align-items: center;
    margin-right: 1em;
    position: absolute;
    top: 1vh;
    left: -1vw;

    img {
      width: 15px;
      height: 15px;
      align-content: right;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 600px) {
  .work-card {
    height: 50vh;
  }

  .button {
    min-width: 200px;
    min-height: 60px;
    font-size: 1.5rem;
  }

  button::before {
    min-width: 200px;
    min-height: 60px;
  }

  button::after {
    content: "";
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }

  @keyframes ring {
    0% {
      width: 60px;
      height: 60px;
    }
    100% {
      width: 300px;
      height: 300px;
    }
  }

  .description {
    height: 50vh;

    h2 {
      font-size: 2rem;
    }

    .purpose {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      margin-top: 2em;
      width: 30vw;
      font-size: 1.5rem;
    }
  }

  .slider {
    height: 65vh;
  }

  img {
    height: 65vh;
    object-fit: cover;
  }

  .content {
    min-height: 35vh;
    padding: 1.5em 0 1em 0;

    p {
      font-size: 1.2rem;
      padding-bottom: 0.5em;
    }

    .details-button {
      h4 {
        width: 70%;
        font-size: 1rem;
      }
    }

    .icon {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .work-card {
    height: 40vh;

    .desktop {
      width: 100%;
      height: 100%;
      display: grid;
      justify-items: center;
      align-items: center;

      .image {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        row-gap: 0;
        padding: 0;
        margin-top: 0;
        transform: scaleY(1);
        transition: all 0.7s ease-in-out;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding-top: 0;
          border: 3px solid white;
        }
      }
    }

    &:hover .description {
      opacity: 0.9;
      box-shadow: 5px 5px 7px grey;
      top: 0vh;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
    }

    &:hover h2,
    &:hover h3,
    &:hover button {
      transform: scale(1);
      opacity: 1;
    }

    &:hover .image {
      transform: scale(2);
      opacity: 0;
    }
  }

  .description {
    height: 100%;
    opacity: 0;

    h2 {
      font-size: 1.5rem;
      transform: scale(0);
      transition: all 0.5s linear;
      opacity: 0;
    }

    .purpose {
      font-size: 1rem;
      opacity: 0;
      transform: scale(0);
      transition: all 0.5s linear;
    }

    h3 {
      font-size: 1rem;
      opacity: 0;
      transform: scale(0);
      transition: all 0.5s linear;
    }

    h4 {
      width: 20vw;
      font-size: 1.2rem;
    }
  }

  .mobile-tablet {
    display: none;
  }

  .details {
    width: 40%;
    min-height: 70vh;
    display: grid;
    justify-items: center;
    align-items: start;
    align-content: start;
    position: fixed;
    top: 0;
    right: 30vw;
    z-index: 500;
    background-color: white;
    box-shadow: 5px 5px 5px darkgrey;
  }

  .slider {
    width: 100%;
    height: 55vh;
  }

  img {
    width: 100%;
    height: 55vh;
    object-fit: cover;
  }

  .content {
    width: 100%;
    height: 45vh;
    display: grid;
    justify-items: center;
    align-items: start;
    padding: 1em 0 1em 0;
    background-color: lightgrey;

    p {
      width: 90%;
      height: 30vh;
      font-size: 0.8rem;
      padding-bottom: 0.5em;
    }

    .details-button {
      h4 {
        width: 90%;
        font-size: 0.7rem;
        padding-bottom: 0.2em;
      }
    }

    .icon {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>