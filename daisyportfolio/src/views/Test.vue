<template>
  <div id="test">
    <div>
      <h1>Test 1</h1>
      <p>
        Coming from a design background it has taken the past 6 years of my
        career to figure out where I belong in the crazy world we work in.
      </p>
    </div>
    <div>
      <h1>Test 2</h1>
      <p>
        I have a real passion for utilizing my design background for web
        development. I leverage my knowledge of typographic, relationships and
        design patterns to create aesthetically pleasing but also very viable
        digital experiences. I find it incredibly rewarding to write not only
        very clean code but also to being engaged in delivering highly polished
        design into development.
      </p>
    </div>
    <h2>{{ width }}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            width: window.innerWidth
        }
    }
};
</script>

<style lang="scss" scoped>
p {
    color: red;
}

@media only screen and (min-width: 1024px) {
    p {
        color: blue;
    }
}

@media only screen and (min-width: 1240px) {
    p {
        color: yellow;
    }
}
@media only screen and (min-width: 1300px) {
    p {
        color: orange;
    }
}
@media only screen and (min-width: 1350px) {
    p {
        color: purple;
    }
}
@media only screen and (min-width: 1450px) {
    p {
        color: grey;
    }
}
@media only screen and (min-width: 2400px) {
    p {
        color: black;
    }
}
@media only screen and (min-width: 2800px) {
    p {
        color: skyblue;
    }
}
</style>