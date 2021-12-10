<template>
  <!-- Nav Bar Start -->
  <header class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid header">
      <a :class="link === '/' ? 'active' : ''" href="/" class="navbar-brand">DevFolio</a>
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
          <a :class="link === '/' ? 'active' : '#home'" href="#home" class="nav-item nav-link active">Home</a>
          <a :class="link === '/' ? 'active' : '#about'" href="#about" class="nav-item nav-link">About</a>
          <a :class="link === '/' ? 'active' : '#service'" href="#service" class="nav-item nav-link">Service</a>
          <a :class="link === '/' ? 'active' : '#experience'" href="#experience" class="nav-item nav-link">Experience</a>
          <a :class="link === '/' ? 'active' : '#portfolio'" href="#portfolio" class="nav-item nav-link">Portfolio</a>
          <a :class="link === '/' ? 'active' : '#courses'" href="#courses" class="nav-item nav-link">Courses</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
   computed: {
   link: {
      get () {
        return this.$route.path
      }
    },
 },
  methods: {
   
  }
};
</script>

<style></style>