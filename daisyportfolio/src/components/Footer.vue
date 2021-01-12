<template>
  <div id="footer">
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
    <div id="copyright">
      <h4>DAISY TONG<span id="text">@2020</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-bar",
  methods: {
    redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 25vh;
  display: grid;
  justify-items: center;
  align-items: center;
}

#contact {
  min-height: 40vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  background-color: darkgrey;
  padding: 1.5em 0 1.5em 0;
  margin-top: 1em;

  .item {
    height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: start;

    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }

    h4 {
      font-weight: normal;
      font-size: 0.8rem;
      margin: 0;

      &:hover,
      &:active {
        cursor: pointer;
      }
    }

    a {
      font-size: 0.8rem;
      margin: 0.5em;
      text-decoration: none;
      color: black;
    }
  }
}

#copyright {
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
  #contact {
    min-height: 20vh;
    grid-template-columns: 1fr 1fr;

    .item {
      img {
        width: 30px;
        height: 30px;
      }

      h4 {
        font-size: 1.2rem;
      }

      a {
        font-size: 1.2rem;
      }
    }
  }

  #copyright {
    h4 {
      font-size: 1rem;
    }

    #text {
      font-size: 1rem;
    }
  }
}

@media only screen and (min-width: 1024px) {
  #footer {
    min-height: 20vh;
  }

  #contact {
    align-items: center;
    padding: 1em 0 2em 0;
    grid-template-columns: 1fr 1fr;
    row-gap: 1em;

    .item {
      height: 0;
      justify-items: left;
      grid-template-columns: 20% 80%;
      margin-left: 10em;

      h4 {
        font-size: 1.2rem;
        text-align: left;
      }

      a {
        text-align: left;
      }
    }
  }

  #copyright {
    h4 {
      font-size: 1rem;
    }

    #text {
      font-size: 1rem;
    }
  }
}
</style>