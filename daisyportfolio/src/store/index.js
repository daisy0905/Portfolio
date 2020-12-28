import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activaPage: cookies.get("currentPage"),
    works: [
      {
        id: 0,
        cover_image: require("@/assets/OkotoksPizza_cover.png"),
        name: "Okotoks Pizza Project",
        purpose:
          "A Fully Responsive Website Design for OkotoksPizza Restaurant",
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
          },
        ],
      },
      {
        id: 1,
        cover_image: require("@/assets/Tweeter_cover.png"),
        name: "Full-Stack Tweeter Project",
        purpose: "A Mobile Social Media Application Design",
        language: "Flask Python, Restful API, Vue.js, Vuex",
        description:
          "Built a mobile social media application whose server-side is created by Flask Python and Restful API in collaboration with database and client-side is created by Vue.js and Vuex; its features include social authorization, feed, post and comments creation, edit and delete; post and comments likes, user profile and search; focused on mobile responsive and a proper web application.",
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
          },
        ],
      },
      {
        id: 1,
        cover_image: require("@/assets/ArtistWebsite_cover.png"),
        name: "Artist Website Project",
        purpose: "A Fully Responsive Website Design",
        language: "Flask Python, Restful API, Vue.js, Vuex",
        description:
          "It is an advanced full-stack web development project in the use of database, Flaks Python, Restful API and Vue.js and Vuex; created features for visitors and the artist including visitors’ reviewing artwork, submitting enquiry and ordering the artwork, and subscribing to the newsletter; the artist’s reviewing artwork inventory, uploading, updating and deleting artwork, checking artworks’ status, visitors' enquiries and contact information for follow-up; the website is fully responsive.",
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
          },
        ],
      },
    ],
    otherworks: [
      {
        id: 0,
        cover_image: require("@/assets/Wayfinding_cover.png"),
        name: "Way-finding System Design",
        purpose:
          "A Comprehensive Environmental Design",
        language: "Photoshop, Illustrator, Indesign, AutoCAD, Sketchup",
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
        language: "Photoshop, Illustrator, Indesign, AutoCAD, Sketchup",
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
          "Photoshop, Illustrator, Indesign, AutoCAD, Sketchup, RevitArchitecture",
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
  },
  mutations: {},
  actions: {},
  getters: {
    getVue: function(state) {
      let vueWorks = [];
      for(let i=0; i<state.works.length; i++) {
        if(state.works[i].language == "Flask Python, Restful API, Vue.js, Vuex") {
          vueWorks.push(state.works[i]);
        }
      }
      return vueWorks;
    },
    getHtml: function(state) {
      let htmlWorks = []
      for(let i=0; i<state.works.length; i++) {
        if(state.works[i].language == "HTML, CSS, SASS") {
          htmlWorks.push(state.works[i]);
        }
      }
      return htmlWorks;
    },
    getOtherTwo: function(state) {
      let getOtherTwo = []
      getOtherTwo.push(state.otherworks[0])
      getOtherTwo.push(state.otherworks[1])
      return getOtherTwo
    },
    getOtherThird: function(state) {
      let getOtherThird = []
      getOtherThird.push(state.otherworks[2])
      return getOtherThird
    }
  }
});
