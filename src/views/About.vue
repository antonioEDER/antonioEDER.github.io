<template>
  <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-12 row">
          <div class="container">
            <div class="section-header text-left">
              <h2>About Me</h2>
            </div>
            <div class="about-text">
              <div>
                Hi! My name is Eder Antonio and here I share my projects in
                development. <br />
                I am developer Pleno Front-End Developer at Eulabs and Bachelors
                degree in systems developmentcomputer at (Faculdade Rolim de
                Moura - FAROL(RO)).
              </div>
              <p>My Tech Stacks is: <br /></p>
              <p>
                <b>Front-End</b>: Vuejs, NodeJs, Sass, QuasarJs, Cordova <br />
                <b>Back-End</b>: Golang, PHP, MySql, PostgreSQL<br />
              </p>
            </div>
            <div class="skills">
              <div class="skill-name">
                <p>Front-End</p>
                <p>70%</p>
              </div>
              <div class="">
               <base-progress :key="1" color="blue" :percentage="70" class="mx-2 mb-2"></base-progress>
              </div>
              <div class="skill-name">
                <p>Back-End</p>
                <p>30%</p>
              </div>
              <div class="">
                <base-progress :key="2"  color="blue" :percentage="30" class="mx-2 mb-2"></base-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseProgress from "@/components/BaseProgress";

export default {
 name: 'About',
  components: {
    BaseProgress
  },
  data() {
    return {
      colors: [
        "gray",
        "yellow",
        "orange",
        "red",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink"
      ],
    };
  },
};
</script>

<style>
.about-content {
  padding-top: 50px !important;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}

</style>

