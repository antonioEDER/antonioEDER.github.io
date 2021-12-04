<template>

   <div>
     <Header />
     <Home />
     <Footer />
   </div>

</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/views/Home.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      text: undefined,}
  },
  components: {
    Header,
    Home,
    Footer
  }
}

</script>

