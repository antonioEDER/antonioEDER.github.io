<template>
  <div data-spy="scroll" data-target=".navbar" data-offset="51">
    <!-- Hero Start -->
    <Hero/>
    <!-- Hero End -->

    <!-- About Start -->
    <About/>
    <!-- About End -->

    <!-- Service Start -->
    <Services />
    <!-- Service End -->

    <!-- Experience Start -->
    <Experience />
    <!-- Job Experience End -->

  
    <!-- Portfolio Start -->
      <Portfolio />
    <!-- Portfolio End -->

        <!-- Portfolio Start -->
      <Courses />
    <!-- Portfolio End -->

  </div>
</template>

<script>
import { useMeta } from 'quasar'
import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Experience from '@/views/Experience.vue'
import Portfolio from '@/views/Portfolio.vue'
import Courses from '@/views/Courses.vue'

const metaData = {
  title: 'Meu Portfólio',
  titleTemplate: title => `${title} - Eder Antonio`,
}

export default {
  name: 'home',
  setup () {
    useMeta(metaData)
  },
  components: {
    Hero,
    About,
    Services,
    Experience,
    Portfolio,
    Courses
  }
}
</script>
