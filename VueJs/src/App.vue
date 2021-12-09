<template>

   <div>
     <Header />
      <div class="router-view">
        <router-view />
      </div>
     <Footer />
   </div>

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      text: undefined,}
  },
  components: {
    Header,
    Footer
  }
}

</script>

<style scoped>
.router-view {
  min-height: 800px;

}
</style>