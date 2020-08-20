<template>
  <div>
    <indoor-menu></indoor-menu>
    <router-view/>
  </div>
</template>

<script>
import IndoorMenu from "./../../components/common/IndoorMenu";
export default {
  name: 'App',
  components: {IndoorMenu}
}
</script>

<style>

</style>
