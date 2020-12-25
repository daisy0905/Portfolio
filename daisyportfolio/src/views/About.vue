<template>
  <div id="about">
    <navigation-bar id="nav"></navigation-bar>
    <div id="body">
      <h1>ABOUT</h1>
      <div id="concept-container">
        <div class="concept-unit">
          <img
            src="../assets/responsive-design.png"
            alt="the image shows responsive design"
          />
          <h2>RESPONSIVE</h2>
          <p>Website will work welll on any device, big or small.</p>
        </div>
        <div class="concept-unit">
          <img
            src="../assets/user-friendly.png"
            alt="the image shows user-friendly concept"
          />
          <h2>USER-FRIENDLY</h2>
          <p>Website is well-organized and easily navigated.</p>
        </div>
        <div class="concept-unit">
          <img
            src="../assets/visual.png"
            alt="the image shows visual appealing concept"
          />
          <h2>VISUAL APPEALING</h2>
          <p>Great design sensibility for user-interface heuristics.</p>
        </div>
      </div>
      <div id="profile">
        <div id="bio">
          <div id="portrait">
            <img src="../assets/portrait.jpg" alt="portrait" />
          </div>
          <h3>
            Coming from a design background it has taken the past 6 years of my
            career to figure out where I belong in the crazy world we work in.
          </h3>
        </div>
        <p>
          I have a real passion for development and using my design experience.
          I leverage my knowledge of typographic, relationships and design
          patterns to create aesthetically pleasing but also very viable digital
          experiences. I find it incredibly rewarding to write not only very
          clean code but to witness and be apart of the solution bringing a
          design into development.
        </p>
        
      </div>
      <div id="skills">
        <h2>SOFTWARE SKILLS & WEB TECHNOLOGY</h2>
        <img
          src="../assets/Skill_diagram.png"
          alt="The diagram shows skillsets"
        />
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/Footer.vue"
// import axios from "axios"
export default {
  components: {
    NavigationBar,
    FooterBar
  },
  // data() {
  //   return {
  //     filesrc: [{
  //       title: 'DaisyResume.pdf',
  //       src: require("@/assets/Resume_Daisy_Tong.pdf")
  //     }]
  //   }
  // },
  // methods: {
  //   forceFileDownload(response, title) {
  //     console.log(title)
  //     const url = window.URL.createObjectURL(new Blob([response.data]))
  //     const link = document.createElement('a')
  //     link.href = url
  //     link.setAttribute('download', title)
  //     document.body.appendChild(link)
  //     link.click()
  //   },
  //   downloadWithAxios(url, title) {
  //     axios({
  //       method: 'get',
  //       url,
  //       responseType: 'arraybuffer',
  //     })
  //       .then((response) => {
  //         this.forceFileDownload(response, title)
  //       })
  //       .catch(() => console.log('error occured'))
  //   },
  // }
};
</script>

<style lang="scss" scoped>
#about {
  min-height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
}

#nav {
  height: 8vh;
  width: 100%;
}

#body {
  min-height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
}

h1 {
  width: 30%;
  padding: 0;
  margin: 0.5em 0 1em 0;
  font-weight: bold;
  font-size: 1.5rem;
  color: #6f1d1bff;
  font-weight: bold;
  border-bottom: 2px solid #6f1d1bff;
}

#concept-container {
  width: 100%;
  min-height: 50vh;
  display: grid;
  justify-items: center;
  align-items: start;
  row-gap: 2vh;

  .concept-unit {
    width: 80%;
    height: 18vh;
    display: grid;
    justify-items: center;
    align-items: start;
    row-gap: 0.5em;

    img {
      width: 50px;
      height: 50px;
    }

    h2 {
      width: 100%;
      padding: 0;
      margin: 0;
      font-weight: bold;
      font-size: 1rem;
      color: #6f1d1bff;
      font-weight: bold;
    }

    p {
      width: 100%;
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
      line-height: 1.5em;
    }
  }
}

#profile {
  width: 100%;
  min-height: 50vh;
  display: grid;
  justify-items: center;
  align-items: start;

  #bio {
    width: 100%;
    min-height: 40vh;
    display: grid;
    justify-items: center;
    align-items: start;
    margin-top: 1em;

    #portrait {
      width: 90%;
      min-height: 30vh;

      img {
        width: 200px;
        box-shadow: 3px 3px 3px grey;
      }
    }

    h3 {
      width: 80%;
      padding: 0;
      margin-top: 1em;
      font-weight: bold;
      font-size: 0.8rem;
      text-align: justify;
    }
  }

  p {
    width: 80%;
    font-size: 0.8rem;
    margin-top: 1em;
    padding: 0;
    line-height: 1.5em;
    text-align: justify;
  }
}

#skills {
  width: 80%;
  min-height: 40vh;
  display: grid;
  justify-items: center;
  align-items: start;
  margin-top: 1em;

  h2 {
      width: 90%;
      padding: 0;
      margin: 0;
      font-weight: bold;
      font-size: 0.8rem;
      color: #6f1d1bff;
      font-weight: bold;
      border-bottom: 1px solid #6f1d1bff;
      margin-bottom: 1em;
    }

  img {
    width: 100%;
  }
}
</style>