<template>
  <div class="work-card">
    <div class="image">
      <img :src="work.cover_image" alt="the cover image of project" />
    </div>
    <div class="description">
      <h2>{{ work.name }}</h2>
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
        <h3>ABOUT</h3>
        <p>{{ work.description }}</p>
        <div class="button">
          <button>VIEW SITE</button>
          <button>GITHUB CODE</button>
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
  width: 100%;
  height: 40vh;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0;
  padding: 0;
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
  }

  h3 {
    width: 50%;
    font-size: 0.8rem;
    margin: 0;
  }

  button {
    width: 40vw;
    padding: 0.5em;
    color: black;
    border: 2px solid red;
    font-weight: bold;
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
  height: 45vh;
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
  height: 45vh;
  object-fit: cover;
}

.content {
  width: 100%;
  min-height: 55vh;
  display: grid;
  justify-items: center;
  align-items: start;
  padding-top: 0.5em;
  background-color: lightgrey;

  h3 {
    width: 40%;
    font-size: 1.2rem;
    margin: 0;
    padding-bottom: 0.2em;
    border-bottom: 1px solid grey;
  }

  p {
    width: 85%;
    font-size: 0.8rem;
    margin: 0;
    line-height: 1.5em;
  }

  .button {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: start;
    grid-template-columns: 1fr 1fr;

    button {
      width: 70%;
      padding: 0.5em;
      color: black;
      border: 2px solid red;
      font-weight: bold;
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
    bottom: 1vh;
    right: 0;

    img {
      width: 15px;
      height: 15px;
      align-content: right;
    }
  }
}
</style>