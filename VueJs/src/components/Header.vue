<template>
  <!-- Nav Bar Start -->
  <header class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid header">
      <a href="/" class="navbar-brand">DevFolio</a>
      <div
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </div>

      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav ml-auto">
          <a  :class="link === '/' ? 'active' : ''" href="/" class=" nav-item nav-link">Home</a>
          <a  :class="link === '/about' ? 'active' : '' " href="/about" class=" nav-item nav-link">About</a>
          <a  :class="link === '/service' ? 'active' : '' " href="/service" class=" nav-item nav-link">What I do</a>
          <a  :class="link === '/experience' ? 'active' : '' " href="/experience" class=" nav-item nav-link">Experience</a>
          <a  :class="link === '/portfolio' ? 'active' : '' " href="/portfolio" class=" nav-item nav-link">Portfolio</a>
          <a  :class="link === '/courses' ? 'active' : '' " href="/courses" class=" nav-item nav-link">My Courses</a>
        </div>
      </div>
    </div>
  </header>
  <!-- Nav Bar End -->
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
 }
};
</script>

<style>
.active {
  color: rgb(7, 34, 63) !important;
}
 </style>
