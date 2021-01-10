<template>
  <div class="work-card">
    <div class="image">
      <img :src="work.cover_image" alt="the cover image of project" />
      <!-- <button></button> -->
    </div>
    <div class="description">
      <h2>{{ work.name }}</h2>
      <h3 class="purpose">{{ work.purpose }}</h3>
      <h3>{{ work.language }}</h3>
      <button @click="open">LEARN MORE</button>
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
        <div class="button">
          <button v-if="url != ''" @click="redirect(url)">VIEW SITE</button>
          <button v-if="github_front != ''" @click="redirect(github_front)">
            GITHUB FRONT-END
          </button>
          <button v-if="github_back != ''" @click="redirect(github_back)">
            GITHUB BACK-END
          </button>
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

  &:hover {
    cursor: pointer;
  }

  &:hover > .description {
    opacity: 0.9;
    box-shadow: 5px 5px 7px grey;
    top: 0vh;
    transition: all 0.25s ease-in-out;
  }

  &:hover h2,
  &:hover h3,
  &:hover button {
    transform: scale(1);
    opacity: 1;
  }
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
  transform: scaleY(1);
  transition: all 0.7s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-top: 0;
    border: 3px solid white;
  }
}

.description {
  width: 100%;
  height: 40vh;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  z-index: 40;
  background-color: white;
  box-shadow: 0px 0px 0px grey;
  top: 0;
  left: 0;
  padding: 3em 0 3em 0;

  h2 {
    width: 90%;
    padding: 0;
    font-size: 1.2rem;
    transform: scale(0);
    color: #333;
    transition: all 0.5s linear;
    opacity: 0;
  }

  .purpose {
    width: 80%;
    font-size: 0.8rem;
    color: black;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
  }

  h3 {
    width: 60%;
    font-size: 0.8rem;
    margin: 0;
    color: #99582aff;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
  }

  button {
    width: 40vw;
    padding: 0.5em;
    color: black;
    border: 2px solid red;
    font-weight: bold;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear;
  }
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
  z-index: 100;
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

  .button {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;

    button {
      width: 90%;
      padding: 0.5em;
      color: black;
      border: 2px solid red;
      font-weight: bold;
      font-size: 0.6rem;
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
    }
  }
}

@media only screen and (min-width: 600px) {
  .work-card {
    height: 50vh;
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

  .description {
    height: 50vh;
    padding: 3em 0 3em 0;

    h2 {
      font-size: 2rem;
    }

    .purpose {
      font-size: 1.5rem;
      line-height: 1.5em;
    }

    h3 {
      font-size: 1.5rem;
    }

    button {
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
  }

  .content {
    min-height: 35vh;
    padding: 1.5em 0 1em 0;

    p {
      font-size: 1.2rem;
      padding-bottom: 0.5em;
    }

    .button {
      button {
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
    height: 60vh;

    &:hover > .image {
      transform: scale(2);
      opacity: 0;
    }
  }

  .description {
    height: 60vh;
    padding: 3em 0 3em 0;

    h2 {
      font-size: 1.2rem;
    }

    .purpose {
      font-size: 1rem;
      line-height: 1.5em;
    }

    h3 {
      width: 80%;
      font-size: 1rem;
    }

    button {
      width: 30%;
      font-size: 0.8rem;
    }
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
    z-index: 100;
    background-color: white;
    box-shadow: 5px 5px 5px darkgrey;
  }

  .slider {
    width: 100%;
    height: 55vh;
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

    .button {
      button {
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