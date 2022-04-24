<template>
  <div>
    <navbar/>
  <router-view/>
   
  </div>
</template>

<script>
import "./style/style.scss"
import Navbar from "./components/Navbar.vue"
export default {
    name:'Ap',
    components:{
      Navbar
    }
}
</script>