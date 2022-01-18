<template>
  <div class="portfolio" id="courses">
     <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My courses</p>
          <h2>Never stop studying</h2>
        </div>
        <div class="row portfolio-container">
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
            data-wow-delay="0.0s"
            v-for="(l, i) in list"
            :key="i"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img :src="l.img" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>{{ l.course}}</h3>
                <a
                  class="btn"
                  :href="l.img"
                  target="new"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courses',
  data () {
    return {
      list: [
        {
          course: 'MicroFrontend com SingleSPA',
          img: require('@/assets/img/courses/21.jpg')
        },
        {
          course: 'ES6/7 / Webpack 2 / TypeScript',
          img: require('@/assets/img/courses/ts-01.jpg')
        },
        {
          course: 'Vuejs 3, Vuex e Vue Router',
          img: require('@/assets/img/courses/1.jpg')
        },
        {
          course: 'Analytics para iniciantes',
          img: require('@/assets/img/courses/2.png')
        },
        {
          course: 'Scrum',
          img: require('@/assets/img/courses/3.png')
        },
        {
          course: 'Vuejs 2',
          img: require('@/assets/img/courses/4.jpg')
        },
        {
          course: 'Vuejs com PWA',
          img: require('@/assets/img/courses/5.jpg')
        },
        {
          course: 'Docker',
          img: require('@/assets/img/courses/6.png')
        },
        {
          course: 'Levantamento de requisitos',
          img: require('@/assets/img/courses/7.png')
        },
        {
          course: 'Liderança',
          img: require('@/assets/img/courses/8.png')
        },
        {
          course: 'HTML5 Web Storage',
          img: require('@/assets/img/courses/9.png')
        },
        {
          course: 'HTML Básico',
          img: require('@/assets/img/courses/10.jpg')
        },
        {
          course: 'CSS/Sass',
          img: require('@/assets/img/courses/11.jpg')
        },
        {
          course: 'Vuejs 01',
          img: require('@/assets/img/courses/12.jpg')
        },
        {
          course: 'Vuejs 02',
          img: require('@/assets/img/courses/13.jpg')
        },
        {
          course: 'Fundamentos do JavaScript',
          img: require('@/assets/img/courses/14.png')
        },
        {
          course: 'Introdução ao JavaScript',
          img: require('@/assets/img/courses/15.png')
        },
        {
          course: 'O que é .NET',
          img: require('@/assets/img/courses/16.png')
        },
        {
          course: 'O que é NPM',
          img: require('@/assets/img/courses/17.png')
        },
        {
          course: 'O que é Vuejs',
          img: require('@/assets/img/courses/18.png')
        },
        {
          course: 'O que é PHP',
          img: require('@/assets/img/courses/19.png')
        },
        {
          course: 'PHP iniciantes',
          img: require('@/assets/img/courses/20.png')
        }
      ]
    }
  }

}
</script>

<style>

</style>