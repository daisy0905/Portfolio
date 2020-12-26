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
  data() {
    return {
      otherworks: [
        {
          id: 0,
          cover_image: require("@/assets/Wayfinding_cover.png"),
          name: "Way-finding System Design",
          purpose:
            "A comprehensive Environmental Design",
          language: "PHOTOSHOP, ILLUSTRATOR, INDESIGN, CAD, SKETCHUP",
          description:
            "Effective way-finding strategy and signage design are created to optimize patients’ and visitors’ navigation experience.",
          website: "",
          github_front: "",
          github_back: "",
          images: [
            {
              id: 0,
              image: require("@/assets/Wayfinding_1.png"),
            },
            {
              id: 1,
              image: require("@/assets/Wayfinding_2.png"),
            },
            {
              id: 2,
              image: require("@/assets/Wayfinding_3.png"),
            },
            {
              id: 3,
              image: require("@/assets/Wayfinding_4.png"),
            }
          ],
        },
        {
          id: 1,
          cover_image: require("@/assets/Diagram_cover.png"),
          name: "Diagram Design",
          purpose:
            "Thinking with diagram is essential for problem solving in design principles.",
          language: "PHOTOSHOP, ILLUSTRATOR, INDESIGN, CAD, REVIT, SKETCHUP",
          description:
            "The '3D' diagrams clearly illustrate how sustainable design principles are incorporated into site and building environment as architecture grows step by step.",
          website: "",
          github_front: "",
          github_back: "",
          images: [
            {
              id: 0,
              image: require("@/assets/Diagram_1.png"),
            },
            {
              id: 1,
              image: require("@/assets/Diagram_2.png"),
            },
            {
              id: 2,
              image: require("@/assets/Diagram_3.png"),
            },
          ],
        },
        {
          id: 1,
          cover_image: require("@/assets/Other_cover.png"),
          name: "Other Design Works",
          purpose:
            "Design is not just what it looks like and feels like. Design is how it works.",
          language:
            "PHOTOSHOP, ILLUSTRATOR, INDESIGN, POWERPOINT, CAD, REVIT, SKETCHUP",
          description:
            "The images, typography, space, layout and color are carefully considered and designed to create interfaces that optimize user experience and drive conversion.",
          website: "",
          github_front: "",
          github_back: "",
          images: [
            {
              id: 0,
              image: require("@/assets/Other_1.png"),
            },
            {
              id: 1,
              image: require("@/assets/Other_2.png"),
            },
            {
              id: 2,
              image: require("@/assets/Other_3.png"),
            },
            {
              id: 3,
              image: require("@/assets/Other_4.png"),
            },
          ],
        },
      ],
    };
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