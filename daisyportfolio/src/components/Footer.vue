<template>
  <div id="footer">
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
    <div id="copyright">
      <h4>DAISY TONG<span id="text">@2020</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-bar",
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
  height: 22vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  background-color: darkgrey;
  padding: 1em 0 0.5em 0;

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
    padding-top: 1em;

    .item {
      img {
        width: 30px;
        height: 30px;
      }

      h4 {
        font-size: 1rem;
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

@media only screen and (min-width: 1240px) {
  #footer {
    min-height: 20vh;
  }

  #contact {
    align-items: center;
    padding: 1em 0 1em 0;
    grid-template-columns: 1fr 1fr;

    .item {
      height: 0;
      justify-items: left;
      grid-template-columns: 20% 80%;
      margin-left: 10em;

      h4 {
        font-size: 1.2rem;
        text-align: left;
      }
    }
  }

  #copyright {
    h4 {
      font-size: 1.2rem;
    }

    #text {
      font-size: 1.2rem;
    }
  }
}
</style>