<template>
    <div id="projects">
        <navigation-bar></navigation-bar>
        <work-card-list></work-card-list>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import WorkCardList from '../components/WorkCardList.vue'
    export default {
        components: {
            WorkCardList,
            NavigationBar
           
        },
    }
</script>

<style lang="scss" scoped>
#projects {
    width: 100%;
    min-height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
}
</style>