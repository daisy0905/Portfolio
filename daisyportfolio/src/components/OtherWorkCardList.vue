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
    otherworks: function() {
      return this.$store.state.otherworks 
    }
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
</style>