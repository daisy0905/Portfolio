<template>
  <div class="skill-card">
    <img :src="archskill.icon" alt="icons of architecture technology" />
    <h4>{{ archskill.name }}</h4>
  </div>
</template>

<script>
export default {
  name: "arch-skill",
  props: {
    archskill: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.skill-card {
  width: 100%;
  height: 10vh;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-items: center;
  align-items: start;

  img {
    width: 50px;
    height: auto;
  }

  h4 {
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0.5em 0 0.5em 0;
  }
}

@media only screen and (min-width: 600px) {
  .skill-card {
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-rows: 70% 30%;
    justify-items: center;
    align-items: center;

    img {
      width: 100px;
      height: auto;
    }

    h4 {
      font-weight: bold;
      font-size: 1.2rem;
      margin: 1em 0 1em 0;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .skill-card {
    height: 30vh;
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>