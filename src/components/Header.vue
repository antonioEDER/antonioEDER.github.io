<template>
  <!-- Nav Bar Start -->
  <header class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid header">
      <a :class="link === '/' ? 'active' : ''" href="/" class="navbar-brand"
        >DevFolio</a>
      <button
        v-on:click="open()"
        v-if="isOpen"
        class="navbar-toggler"
      >
      <span class="fas fa-times-circle"></span>
      </button>
      <button
        v-on:click="open()"
        v-else 
        class="navbar-toggler"
      >
      <span class="fas fa-bars"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav ml-auto">
          <a
            :class="link === '/' ? 'active' : '#home'"
            href="#home"
            class="nav-item nav-link active"
            >Home</a
          >
          <a
            :class="link === '/' ? 'active' : '#about'"
            href="#about"
            class="nav-item nav-link"
            >About</a
          >
          <a
            :class="link === '/' ? 'active' : '#service'"
            href="#service"
            class="nav-item nav-link"
            >Service</a
          >
          <a
            :class="link === '/' ? 'active' : '#experience'"
            href="#experience"
            class="nav-item nav-link"
            >Experience</a
          >
          <a
            :class="link === '/' ? 'active' : '#portfolio'"
            href="#portfolio"
            class="nav-item nav-link"
            >Portfolio</a
          >
          <a
            :class="link === '/' ? 'active' : '#courses'"
            href="#courses"
            class="nav-item nav-link"
            >Courses</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    link: {
      get() {
        return this.$route.path;
      },
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
          document.getElementById("navbarCollapse").classList.remove("show");
          document.getElementById("navbarCollapse").classList.add("hide");
      } else {
        document.getElementById("navbarCollapse").classList.remove("hide");
        document.getElementById("navbarCollapse").classList.add("show");
      }
    },
  },
};
</script>

<style></style>
