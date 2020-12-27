<template>
  <div>
    <work-card
      class="works"
      v-for="work in htmlworks"
      :key="work.id"
      :work="work"
    ></work-card>
  </div>
</template>

<script>
import WorkCard from "./WorkCard.vue";
export default {
  name: "html-work-list",
  components: {
    WorkCard,
  },
  computed: {
    htmlworks: function () {
      console.log(this.$store.getters.getHtml);
      return this.$store.getters.getHtml;
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
    min-height: 30vh;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 0vh;
  }
}
</style>