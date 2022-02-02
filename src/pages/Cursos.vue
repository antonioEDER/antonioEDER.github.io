<template>
  <div class="portfolio" id="courses">
     <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <h2>Meus certificados</h2>
          <div>My courses</div>
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
          img: require('../assets/img/courses/21.jpg')
        },
        {
          course: 'ES6/7 / Webpack 2 / TypeScript',
          img: require('../assets/img/courses/ts-01.jpg')
        },
        {
          course: 'Vuejs 3, Vuex e Vue Router',
          img: require('../assets/img/courses/1.jpg')
        },
        {
          course: 'Analytics para iniciantes',
          img: require('../assets/img/courses/2.png')
        },
        {
          course: 'Scrum',
          img: require('../assets/img/courses/3.png')
        },
        {
          course: 'Vuejs 2',
          img: require('../assets/img/courses/4.jpg')
        },
        {
          course: 'Vuejs com PWA',
          img: require('../assets/img/courses/5.jpg')
        },
        {
          course: 'Docker',
          img: require('../assets/img/courses/6.png')
        },
        {
          course: 'Levantamento de requisitos',
          img: require('../assets/img/courses/7.png')
        },
        {
          course: 'Liderança',
          img: require('../assets/img/courses/8.png')
        },
        {
          course: 'HTML5 Web Storage',
          img: require('../assets/img/courses/9.png')
        },
        {
          course: 'HTML Básico',
          img: require('../assets/img/courses/10.jpg')
        },
        {
          course: 'CSS/Sass',
          img: require('../assets/img/courses/11.jpg')
        },
        {
          course: 'Vuejs 01',
          img: require('../assets/img/courses/12.jpg')
        },
        {
          course: 'Vuejs 02',
          img: require('../assets/img/courses/13.jpg')
        },
        {
          course: 'Fundamentos do JavaScript',
          img: require('../assets/img/courses/14.png')
        },
        {
          course: 'Introdução ao JavaScript',
          img: require('../assets/img/courses/15.png')
        },
        // {
        //   course: 'O que é .NET',
        //   img: require('../assets/img/courses/16.png')
        // },
        // {
        //   course: 'O que é NPM',
        //   img: require('../assets/img/courses/17.png')
        // },
        // {
        //   course: 'O que é Vuejs',
        //   img: require('../assets/img/courses/18.png')
        // },
        // {
        //   course: 'O que é PHP',
        //   img: require('../assets/img/courses/19.png')
        // },
        // {
        //   course: 'PHP iniciantes',
        //   img: require('../assets/img/courses/20.png')
        // }
      ]
    }
  }

}
</script>

<style  lang="scss">
$lightgrey: lightgrey;
$blue-clear: rgb(7, 34, 63);
$black: rgba(0, 0, 0, 0.2);
$color-default: rgb(7, 34, 63);

.portfolio h2 {
  font-size: 2rem !important;
}

.portfolio h3 {
  font-size: 1rem;
}


.portfolio-container {
  padding: 30px;
  display: grid;
  column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
  }
}

.portfolio h2 {
  font-size: 2rem !important;
}


.portfolio {
  position: relative;
  padding: 45px 0 15px 0;
}

.portfolio #portfolio-filter {
  padding: 0;
  margin: -15px 0 25px 0;
  list-style: none;
  font-size: 0;
  text-align: center;
}

.portfolio #portfolio-filter li {
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: $color-default;
  border: 2px solid transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 50px $color-default;
  transition: ease-out 0.3s;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
}

.portfolio #portfolio-filter li:hover,
.portfolio #portfolio-filter li.filter-active {
  color: $color-default;
  background: transparent;
  box-shadow: inset 0 0 0 0 $color-default;
  border-color: $color-default;
}

.portfolio .portfolio-item {
  position: relative;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    width: 70%;
  }
}

.portfolio .portfolio-wrap {
  position: relative;
  width: 100%;
}

.portfolio .portfolio-img {
  position: relative;
  overflow: hidden;
}

.portfolio .portfolio-img img {
  position: relative;
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  transform: scale(1.1);
  transition: .5s;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
}

.portfolio .portfolio-item:hover img {
  margin-left: 15px;
}

.portfolio .portfolio-text {
  position: relative;
  height: 60px;
  width: calc(100% - 30px);
  margin: -30px 15px 30px 15px;
  display: flex;
  align-items: center;
  background: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, .12);
  @media only screen and (max-width: 1200px) {
    height: 100%;
  }
}

.portfolio .portfolio-text h3 {
  width: calc(100% - 70px);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 0 15px;
  white-space: nowrap;
  overflow: hidden;
}

.portfolio .portfolio-text a.btn {
  width: 50px;
  height: 50px;
  padding: 0 0 2px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 100;
}

.portfolio .portfolio-item:hover a.btn {
  color: white;
  background: transparent;
  box-shadow: inset 0 0 0 0 $color-default;
  border-color: $color-default;
}


</style>