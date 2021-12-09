<template>
  <div class="hero" id="home">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-6">
          <div class="hero-content">
            <div class="hero-text">
              <p>I'm</p>
              <h1>Eder Antonio</h1>
              <h2></h2>
              <div class="typed-text">
                Web Developer, Front-End Developer, Apps Developer
              </div>
            </div>
            <div class="hero-btn">
              <a class="btn" href="/#contact">Contact Me</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 d-none d-md-block">
          <div class="hero-image">
            <img src="../assets/img/i.jpg" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;
import Typed from "typed.js";

export default {
 name: 'Hero',

  mounted() {
    // Typed Initiate
    if ($(".hero .hero-text h2").length == 1) {
      var typed_strings = $(".hero .hero-text .typed-text").text();
      new Typed(".hero .hero-text h2", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  },
};
</script>

<style>
.hero {
  width: 100%;
}
</style>
