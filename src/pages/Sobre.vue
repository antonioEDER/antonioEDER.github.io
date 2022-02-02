<template>
  <div class="about wow fadeInUp q-pb-xl" data-wow-delay="0.1s" id="about">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-12 row">
          <div class="container">
            <div class="section-header text-left">
              <h2 class="text-white text-bold">Sobre mim</h2>
              <div class="text-white">About Me</div>
            </div>
            <div class="q-mt-md q-mb-md">
              <img
                width="100%"
                src="../assets/img/minha-mesa.png"
                alt="Mesa onde o Eder trabalha"
                title="Mesa onde o Eder trabalha"
              />
            </div>
            <div class="about-text">
              <div>
                Oi! Meu nome é Eder Antonio e aqui compartilho meus projetos em
                desenvolvimento. <br />
                Sou desenvolvedor Pleno Front-End Developer na Eulabs e
                Bacharelado graduado em desenvolvimento de sistemascomputador na
                (Faculdade Rolim de Moura - FAROL(RO)).
              </div>
            </div>
            <div class="about-text">
              <q-separator class="q-mt-md q-mb-md" color="grey" />
              <div>
                Hi! My name is Eder Antonio and here I share my projects in
                development. <br />
                I am developer Pleno Front-End Developer at Eulabs and Bachelors
                degree in systems developmentcomputer at (Faculdade Rolim de
                Moura - FAROL(RO)).
              </div>
              <q-separator class="q-mt-md q-mb-lg" color="grey" />
              <div>Minha Stacks são:</div>
              <div>My Tech Skills are:</div>
              <br />
              <p>
                <b>Front-End</b>: Vuejs, NodeJs, Sass, QuasarJs, CapacitorJs
                <br />
                <b>Back-End</b>: Golang, PHP, MySql, PostgreSQL<br />
              </p>
            </div>
            <div class="skills">
              <div class="skill-name">Front-End 70%</div>
              <div class="">
                <base-progress
                  :key="1"
                  color="blue"
                  :percentage="70"
                  class="mx-2 mb-2"
                ></base-progress>
              </div>
              <br />
              <div class="skill-name">Back-End 30%</div>
              <div class="">
                <base-progress
                  :key="2"
                  color="blue"
                  :percentage="30"
                  class="mx-2 mb-2"
                ></base-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseProgress from "components/BaseProgress";

export default {
  name: "About",
  components: {
    BaseProgress,
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
        "pink",
      ],
    };
  },
};
</script>

<style lang="scss">
.section-header h2 {
  font-size: 2rem !important;
}
.about {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  color: white;
  max-width: 700px;
  @media only screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
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
