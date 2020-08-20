<template>
    <div>
      <indoor-menu></indoor-menu>
      <list></list>
      <router-view/>
    </div>
</template>

<script>
    import IndoorMenu from "./common/IndoorMenu";
    import list from "./common/list";
    export default {
        name: 'App',
      components: {IndoorMenu,list}
    }
</script>

<style>

</style>
