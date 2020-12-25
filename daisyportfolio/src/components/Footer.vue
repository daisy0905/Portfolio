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
  height: 30vh;
  display: grid;
  justify-items: center;
  align-items: center;
}

#contact {
  height: 25vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  background-color: darkgrey;
  opacity: 0.9;
  padding-top: 0.5em;

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
      font-family: Arial, Helvetica, sans-serif;
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
  position: fixed;
  bottom: 0;
  background-color: black;

  h4 {
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: lightgrey;
  }

  #text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: red;
    font-weight: normal;
  }
}
</style>