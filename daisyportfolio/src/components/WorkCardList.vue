<template>
  <div></div>
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
            cover_image: "../assets/OkotoksPizza_cover.png",
            name: "Okotoks Pizza Project",
            language: "HTML, CSS, SASS",
            description:
                "Created a visual appealing website for a pizza restaurant in the use of HTML5, CSS3 and SASS; focused on responsive web design, SEO and user-friendly experience; aimed to achieve: by proper color selection, typographic relationships and visual layouts, the website is visually appealing; by well-organized wireframe, the website is user-friendly.",
            images: [
                "../assets/OkotoksPizza_1.png",
                "../assets/OkotoksPizza_2.png",
                "../assets/OkotoksPizza_3.png",
                "../assets/OkotoksPizza_4.png",
          ],
        },
        {
            id: 1,
            cover_image: "",
            name: "Full Stack Tweeter Project",
            language: "Flask Python, Restful API, Vue.js, Vuex",
            description:
                "Built a complete tweeter social media application whose server-side is created by Flask Python and Restful API in collaboration with database and client-side is created by Vue.js and Vuex; created features including user sign-up, log-in/out, edit and delete user profile, view other peoples’ profiles; create, update and delete tweets, comments, nested comments and view other users’ tweets, comments and nested comments, like and un-like tweets and comments, follow and un-follow users, retweet, upload images, focused on mobile responsive and a proper web application.",
            images: [
                "../assets/Tweeter_1.JPG",
                "../assets/Tweeter_2.JPG",
                "../assets/Tweeter_3.JPG",
                "../assets/Tweeter_4.JPG",
            ]
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>