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
            <a href="mailto:dtong0905@gmail.com">dtong0905@gmail.com</a>
          </div>
          <div class="item">
            <img src="../assets/github_2.png" alt="github icon" />
            <h4 @click="redirect('https://github.com/daisy0905')">
              https://github.com/daisy0905
            </h4>
          </div>
          <div class="item">
            <img src="../assets/linkedin_2.png" alt="linkedin icon" />
            <h4 @click="redirect('https://www.linkedin.com/in/daisy-tong/')">
              www.linkedin.com/in/daisy-tong
            </h4>
          </div>
          <div class="item">
            <img src="../assets/phone-icon.png" alt="phone icon" />
            <a href="tel:4039262495">403.926.2495</a>
          </div>
        </div>
        <div id="button">
          <button
            @click="
              redirect(
                'https://www.dropbox.com/s/bwdl49ask9c68e7/Resume_Daisy%20Tong.pdf?dl=0'
              )
            "
          >
            Download Resume
          </button>
          <button
            @click="redirect('https://form.123formbuilder.com/5762072/form')"
          >
            Request Project Quote
          </button>
        </div>
      </div>
      <div id="footer">
        <h4>DAISY TONG<span id="text">@2021</span></h4>
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
  background: url(../assets/home_background_2.jpg);
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  h1 {
    width: 80%;
    padding: 0;
    margin: 2em 0 1em 0;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.2em;
    text-shadow: 3px 3px 2px black;
  }

  #container {
    min-height: 70vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;
  }

  #contact {
    min-height: 25vh;
    width: 65%;
    display: grid;
    justify-items: center;
    align-items: start;
    padding: 1em 0 1em 0;
    background-color: white;
    box-shadow: 3px 3px 2px black;
    opacity: 0.8;

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
        color: black;

        &:hover,
        &:active {
          cursor: pointer;
        }
      }

      a {
        font-weight: bold;
        font-size: 0.8rem;
        margin: 0.5em;
        text-decoration: none;
        color: black;
      }
    }
  }

  #button {
    width: 65%;
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

    &:hover {
      background-color: grey;
      color: white;
      border: 1px solid white;
      cursor: pointer;
    }

    &:active {
      background-color: #6f1d1bff;
      border: 1px solid white;
      color: white;
      cursor: pointer;
    }
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

        a {
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
    background: url(../assets/home_background.jpg);
    background-position: right bottom;

    h1 {
      font-size: 2rem;
    }

    #container {
      width: 65%;
      min-height: 70vh;
      grid-template-columns: 1.5fr 1fr;
      padding-top: 1em;
    }

    #contact {
      width: 100%;
      height: 45vh;
      padding-top: 2em;

      .item {
        justify-items: left;
        grid-template-columns: 20% 80%;
        margin-left: 5em;

        img {
          width: 30px;
          height: 30px;
        }

        h4 {
          text-align: left;
          font-size: 1rem;
        }

        a {
          text-align: left;
          font-size: 1rem;
        }
      }
    }

    #button {
      width: 100%;
      padding: 0 3em 3em 3em;
    }

    button {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 2em;
      padding: 0.5em;
      line-height: 1.5em;
    }
  }

  #footer {
    h4 {
      font-size: 1rem;
      letter-spacing: 0.5em;
    }

    #text {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 2400px) {

  #contact-container {

    h1 {
      font-size: 2.5rem;
    }

    #container {
      width: 50%;
    }

    #contact {
      width: 100%;
      height: 45vh;
      padding: 4em 0 2em 0;

      .item {
        justify-items: left;
        grid-template-columns: 20% 80%;
        margin-left: 15em;

        img {
          width: 40px;
          height: 40px;
        }

        h4 {
          text-align: left;
          font-size: 1.5rem;
        }

        a {
          text-align: left;
          font-size: 1.5rem;
        }
      }
    }

    #button {
      width: 100%;
      padding: 0 3em 4em 3em;
    }

    button {
      width: 100%;
      font-size: 1.5rem;
      margin-bottom: 2em;
      padding: 0.5em;
      line-height: 1.5em;
    }
  }

  #footer {
    h4 {
      font-size: 1.2rem;
    }

    #text {
      font-size: 1.2rem;
    }
  }
}
</style>