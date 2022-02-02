<template>
  <q-page class="flex flex-center">
    <div class="tabcontent">
      <div class="devfolio_home">
        <div class="home_content">
          <div class="avatar">
            <div
              class="image avatar_img"
              :style="`background-image: url('${avatar}')`"
            ></div>
          </div>
          <div class="details">
            <h3 class="name">Eder Antonio</h3>
            <p class="job">
              Oi! Meu nome é Eder Antonio e aqui compartilho meus projetos em desenvolvimento.<br />
              Sou desenvolvedor Pleno Front-End na Eulabs e Bacharelado em Sistemas de informação na (Faculdade Rolim de
               Moura - FAROL(RO))
            </p>
            <p class="job">
              Hi! My name is Eder Antonio and here I share my projects in
              development.<br />
              I am developer Pleno Front-End Developer at Eulabs and Bachelors
              degree in systems development computer at (Faculdade Rolim de
              Moura - FAROL(RO)).
            </p>
            <div class="social">
              <div>
                <a
                  target="blank"
                  href="https://www.facebook.com/Ederantonio1993/"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </div>
              <div>
                <a
                  target="blank"
                  href="https://www.instagram.com/eder_antoniio/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
              <div>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/eder-antonio-3b7021122/"
                  ><i class="fab fa-linkedin-in"></i
                ></a>
              </div>
              <div>
                <a target="blank" href="https://github.com/antonioEDER"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      avatar: require("../assets/img/i.jpg"),
    };
  },
});
</script>

<style lang="scss" scoped>
  .social i {
    font-size: 45px;
  }
</style>
