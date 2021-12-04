<template>
  <!-- Nav Bar Start -->
  <header class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid header" @click="focusBtn">
      <a href="/" class="navbar-brand">DevFolio</a>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav ml-auto">
          <a href="#home" class="nav-item nav-link active">Home</a>
          <a href="#about" class="nav-item nav-link">About</a>
          <a href="#service" class="nav-item nav-link">Service</a>
          <a href="#experience" class="nav-item nav-link">Experience</a>
          <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
          <a href="#price" class="nav-item nav-link">Price</a>
          <a href="#review" class="nav-item nav-link">Review</a>
          <a href="#team" class="nav-item nav-link">Team</a>
          <a href="#blog" class="nav-item nav-link">Blog</a>
          <a href="#contact" class="nav-item nav-link">Contact</a>
        </div>
      </div>
    </div>
  </header>
  <!-- Nav Bar End -->
</template>

<script>
import jQuery from 'jquery';
const $ = jQuery

export default {
  name: 'Header',
  methods: {
    focusBtn () {
       // Smooth scrolling on the navbar links
      $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
                console.log("$(this).parents('.navbar-nav')", )
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    }
  }
};
</script>

<style></style>
