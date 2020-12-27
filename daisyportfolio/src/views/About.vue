<template>
  <div id="about">
    <navigation-bar id="nav"></navigation-bar>
    <nav-desktop id="nav-desktop"></nav-desktop>
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
        <div class="concept-unit">
          <img
            src="../assets/Dynamic.png"
            alt="the image shows dynamic concept"
          />
          <h2>DYNAMIC</h2>
          <p>I love making pages come to life.</p>
        </div>
      </div>
      <div id="profile">
        <div id="bio">
          <div id="portrait">
            <img src="../assets/portrait.jpg" alt="portrait" />
          </div>
        </div>
        <div id="details">
          <h3>
            Coming from a design background it has taken the past 6 years of my
            career to figure out where I belong in the crazy world we work in.
          </h3>
          <p>
            I have a real passion for development and using my design
            experience. I leverage my knowledge of typographic, relationships
            and design patterns to create aesthetically pleasing but also very
            viable digital experiences. I find it incredibly rewarding to write
            not only very clean code but to witness and be apart of the solution
            bringing a design into development.
          </p>
        </div>
      </div>
      <button>DOWNLOAD RESUME</button>
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
import FooterBar from "../components/Footer.vue";
import NavDesktop from "../components/NavDesktop.vue";
export default {
  components: {
    NavigationBar,
    FooterBar,
    NavDesktop,
  },
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

#nav-desktop {
  display: none;
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
  border-bottom: 2px solid #6f1d1bff;
}

#concept-container {
  width: 100%;
  min-height: 50vh;
  display: grid;
  justify-items: center;
  align-items: start;
  row-gap: 1vh;

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
  }

  #details {
    width: 100%;
    min-height: 35vh;
    display: grid;
    justify-items: center;
    align-items: start;
    margin-top: 1em;

    h3 {
      width: 80%;
      padding-top: 0.5em;
      margin: 1em 0 1em 0;
      font-weight: bold;
      font-size: 0.8rem;
      text-align: justify;
      border-top: 1px solid black;
    }

    p {
      width: 80%;
      font-size: 0.8rem;
      padding-bottom: 0.5em;
      line-height: 1.5em;
      text-align: justify;
      border-bottom: 1px solid black;
    }
  }
}

button {
  width: 50%;
  padding: 0.5em;
  color: black;
  border: 2px solid red;
  font-weight: bold;
  margin: 1.5em 0 2em 0;
}

#skills {
  width: 80%;
  min-height: 40vh;
  display: grid;
  justify-items: center;
  align-items: start;
  margin-top: 1em;

  h2 {
    width: 80%;
    padding: 0;
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
    color: #6f1d1bff;
    font-weight: bold;
    border-bottom: 1px solid #6f1d1bff;
    margin-bottom: 1em;
  }

  img {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  h1 {
    width: 25%;
    margin: 1em 0 1em 0;
    font-size: 2rem;
  }

  #concept-container {
    grid-template-columns: 1fr 1fr;

    .concept-unit {
      width: 80%;

      img {
        width: 80px;
        height: 80px;
      }

      h2 {
        margin-top: 0.5em;
        font-size: 1.5rem;
      }

      p {
        width: 90%;
        font-size: 1.2rem;
      }
    }
  }

  #profile {
    min-height: 40vh;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5em;
    width: 90%;

    #bio {
      #portrait {
        width: 100%;

        img {
          width: 100%;
          box-shadow: 5px 5px 5px grey;
        }
      }
    }

    #details {
      h3 {
        width: 100%;
        margin-top: 0;
        font-size: 1.2rem;
        padding-top: 1.2em;
        line-height: 1.5em;
      }

      p {
        width: 100%;
        font-size: 1.1rem;
        padding-bottom: 1.5em;
        line-height: 1.5em;
      }
    }
  }

  button {
    width: 30vw;
    margin-top: 1em;
    font-size: 1.2rem;
  }

  #skills {
    h2 {
      width: 85%;
      font-size: 1.5rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
  #nav {
    display: none;
  }

  #nav-desktop {
    width: 100%;
    height: 12vh;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  h1 {
    width: 15%;
    margin: 1em 0 1em 0;
    font-size: 2.5rem;
  }

  #concept-container {
    min-height: 25vh;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 1.5em;

    .concept-unit {
      width: 70%;
    }
  }

  #profile {
    width: 80%;
    min-height: 30vh;
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;

    #bio {
      #portrait {
        width: 90%;

        img {
          width: 100%;
          box-shadow: 5px 5px 5px grey;
        }
      }
    }

    #details {
      h3 {
        font-size: 1.6rem;
        padding-top: 2.5em;
      }

      p {
        font-size: 1.5rem;
        padding-bottom: 2.5em;
      }
    }
  }

  button {
    width: 25vw;
    margin-top: 2.5em;
    font-size: 1.5rem;
  }

  #skills {
    h2 {
      width: 60%;
      font-size: 2rem;
    }
  }
}
</style>