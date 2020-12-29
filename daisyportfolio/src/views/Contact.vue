<template>
  <div id="contact">
    <navigation-bar id="nav"></navigation-bar>
    <nav-desktop id="nav-desktop"></nav-desktop>
    <div id="contact-container">
      <h1>GET IN TOUCH !</h1>
      <div id="container">
        <div id="contact">
          <div class="item">
            <img src="../assets/email-icon.png" alt="email icon" />
            <h4>dtong0905@gmail.com</h4>
          </div>
          <div class="item">
            <img src="../assets/github.png" alt="github icon" />
            <h4>https://github.com/daisy0905</h4>
          </div>
          <div class="item">
            <img src="../assets/linkedin.png" alt="linkedin icon" />
            <h4>www.linkedin.com/in/daisy-tong</h4>
          </div>
          <div class="item">
            <img src="../assets/phone-icon.png" alt="phone icon" />
            <h4>403.926.3495</h4>
          </div>
        </div>
        <div id="button">
          <button @click="redirect('https://www.dropbox.com/s/kr389xugehy8yrl/Resume_Daisy%20Tong.pdf?dl=0')">Download Resume</button>
          <button
            @click="redirect('https://form.123formbuilder.com/5762072/form')"
          >
            Request Project Quote
          </button>
        </div>
      </div>
      <div id="footer">
        <h4>DAISY TONG<span id="text">@2020</span></h4>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import NavDesktop from "../components/NavDesktop.vue";
export default {
  components: {
    NavigationBar,
    NavDesktop,
  },
  methods: {
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
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

#contact-container {
  width: 100%;
  min-height: 87vh;
  display: grid;
  justify-items: center;
  align-items: start;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background: url(../assets/project_background.jpg);
  background-size: cover;
  background-position: center;
  opacity: 0.6;

  h1 {
    width: 80%;
    padding: 0;
    margin: 2em 0 1em 0;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2em;
  }

  #container {
    min-height: 70vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
  }

  #contact {
    min-height: 30vh;
    width: 60%;
    display: grid;
    justify-items: center;
    align-items: start;
    padding: 1em 0 1em 0;
    background-color: white;
    box-shadow: 3px 3px 2px black;

    .item {
      height: 10vh;
      width: 100%;
      display: grid;
      justify-items: center;
      align-items: start;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }

      h4 {
        font-weight: bold;
        font-size: 0.8rem;
        margin: 0.5em;
      }
    }
  }

  #button {
    width: 60%;
    min-height: 10vh;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 1em;
  }

  button {
    width: 100%;
    padding: 0.5em;
    color: black;
    font-weight: bold;
    box-shadow: 1px 1px 1px black;
  }
}

#footer {
  width: 100%;
  height: 5vh;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: black;

  h4 {
    font-weight: normal;
    font-size: 0.8rem;
    color: lightgrey;
  }

  #text {
    font-size: 0.8rem;
    color: red;
    font-weight: normal;
  }
}

@media only screen and (min-width: 600px) {
  #contact-container {
    h1 {
      font-weight: bold;
      font-size: 2rem;
    }

    #container {
      min-height: 80vh;
    }

    #contact {
      width: 50%;
      box-shadow: 5px 5px 5px black;

      .item {
        img {
          width: 40px;
          height: 40px;
        }

        h4 {
          font-size: 1.2rem;
        }
      }
    }

    #button {
      width: 100%;
    }

    button {
      width: 50%;
      font-size: 1.5rem;
    }
  }

  #footer {
    h4 {
      font-size: 1rem;
    }

    #text {
      font-size: 1rem;
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

  #contact-container {
    min-height: 87vh;

    h1 {
      font-size: 2.5rem;
    }

    #container {
      width: 70%;
      min-height: 70vh;
      grid-template-columns: 1.5fr 1fr;
      padding-top: 5em;
    }

    #contact {
      width: 90%;
      height: 40vh;

      .item {
        justify-items: left;
        grid-template-columns: 20% 80%;
        margin-left: 10em;

        img {
          width: 40px;
          height: 40px;
        }

        h4 {
          font-size: 1.5rem;
          text-align: left;
        }
      }
    }

    #button {
      width: 100%;
      padding: 3em;
    }

    button {
      width: 100%;
      font-size: 1.5rem;
      margin-bottom: 2em;
      padding: 0.5em;
      letter-spacing: 0.2em;
      line-height: 1.5em;
    }
  }

  #footer {
    h4 {
      font-size: 1rem;
    }

    #text {
      font-size: 1rem;
    }
  }
}
</style>