<template>
  <div>
    <work-card class="works" v-for="work in works" :key="work.id" :work="work"></work-card>
  </div>
</template>

<script>
import WorkCard from "./WorkCard.vue";
export default {
  name: "work-card-list",
  components: {
    WorkCard,
  },
  data() {
    return {
      works: [
        {
            id: 0,
            cover_image: require("@/assets/OkotoksPizza_cover.png"),
            name: "Okotoks Pizza Project",
            purpose: "A Fully Responsive Website Design for OkotoksPizza Restaurant",
            language: "HTML, CSS, SASS",
            description:
                "Created a visual appealing website for a pizza restaurant in the use of HTML5, CSS3 and SASS; focused on responsive web design, SEO and user-friendly experience; aimed to achieve: by proper color selection, typographic relationships and visual layouts, the website is visually appealing; by well-organized wireframe, the website is user-friendly.",
            website: "https://daisyokotoks.ml",
            github_front: "https://github.com/daisy0905/OkotoksPizzaProject.git",
            github_back: "",
            images: [
              {
                id: 0,
                image: require("@/assets/OkotoksPizza_1.png"),
              },
              {
                id: 1,
                image: require("@/assets/OkotoksPizza_2.png"),
              },
              {
                id: 2,
                image: require("@/assets/OkotoksPizza_3.png"),
              }
          ],
        },
        {
            id: 1,
            cover_image: require("@/assets/Tweeter_cover.png"),
            name: "Full Stack Tweeter Project",
            purpose: "A Mobile Social Media Application Design",
            language: "Flask Python, Restful API, Vue.js, Vuex",
            description:
                "Built a simple mobile social media application whose server-side is created by Flask Python and Restful API in collaboration with database and client-side is created by Vue.js and Vuex; its features includes social authorization, feed, post and comments creation, edit and delete, post likes, user profile and search; focused on mobile responsive and a proper web application.",
            website: "https://daisyfulltweeter.ml",
            github_front: "https://github.com/daisy0905/Tweeter-frontend.git",
            github_back: "https://github.com/daisy0905/Tweeter-backend.git",
            images: [
              {
                id: 0,
                image: require("@/assets/Tweeter_1.png"),
              },
              {
                id: 1,
                image: require("@/assets/Tweeter_2.png"),
              },
              {
                id: 2,
                image: require("@/assets/Tweeter_3.png"),
              }
            ]
        },
        {
            id: 1,
            cover_image: require("@/assets/ArtistWebsite_cover.png"),
            name: "Artist Website Project",
            purpose: "A Fully Responsive Artist Website Design",
            language: "Flask Python, Restful API, Vue.js, Vuex",
            description:
                "It is an advanced full-stack web development project in the use of database, Flaks Python, Restful API and Vue.js and Vuex; created features for visitors and the artist including visitors’ reviewing artwork, submitting enquiry and ordering the artwork, and subscribe to the newsletter; the artist’s reviewing artwork inventory, uploading, updating and deleting artwork, checking artworks’ status, visitors' enquiries and contact information for follow-up; the website is fully responsive.",
            website: "https://artisttongkemin.ml",
            github_front: "https://github.com/daisy0905/MVPProject-frontend.git",
            github_back: "https://github.com/daisy0905/MVPProject-backend.git",
            images: [
              {
                id: 0,
                image: require("@/assets/ArtistWebsite_1.png"),
              },
              {
                id: 1,
                image: require("@/assets/ArtistWebsite_2.png"),
              },
              {
                id: 2,
                image: require("@/assets/ArtistWebsite_3.png"),
              },
              {
                id: 3,
                image: require("@/assets/ArtistWebsite_4.png"),
              },
              {
                id: 4,
                image: require("@/assets/ArtistWebsite_5.png"),
              }
            ]
        }
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