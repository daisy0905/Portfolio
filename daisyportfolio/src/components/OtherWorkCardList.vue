<template>
  <div>
    <work-card
      class="works"
      v-for="work in otherworks"
      :key="work.id"
      :work="work"
    ></work-card>
  </div>
</template>

<script>
import WorkCard from "./WorkCard.vue";
export default {
  name: "other-work-card-list",
  components: {
    WorkCard,
  },
  computed: {
    otherworks: function () {
      return this.$store.state.otherworks;
    },
  },
};
</script>

<style lang="scss" scoped>
.works {
  width: 100%;
  min-height: 40vh;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 1vh;
}

@media only screen and (min-width: 600px) {
  .works {
    min-height: 50vh;
  }
}

@media only screen and (min-width: 1024px) {
  .works {
    width: 100%;
    min-height: 40vh;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 0vh;
  }
}
</style>