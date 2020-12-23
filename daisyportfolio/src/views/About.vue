<template>
    <div id="home">
        <navigation-bar id="nav"></navigation-bar>
        <div id="body">

        </div>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'

    export default {
  components: { 
      NavigationBar 
      },
        
    }
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
}

#nav {
  height: 8vh;
  width: 100%;
}
</style>