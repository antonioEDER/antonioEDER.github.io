<template>
  <div class="q-pa-md my-videos">
    <div class="section-header text-left">
      <h2 class="text-white text-bold">Meus videos</h2>
      <div class="text-white q-mb-lg">My videos</div>
    </div>
    <div class="videos">
      <div v-for="(v, index) in videos" :key="index">
        <q-card class="my-card">
          <q-video :ratio="16 / 9" w :src="v.url" />
          <q-card-section>
            <div class="text-h6 text-black">{{ v.name }}</div>
            <div class="text-subtitle2 text-black">{{ v.name_english }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-black">
            <div class="text-black q-mb-md">
              {{ v.descript }}
            </div>
            <div class="text-black text-bold">
              {{ v.descript_english }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          url: "https://www.youtube.com/embed/RgL24KAOuzE",
          name: "#Resumão 01 - Criando um DevFolio com GitHub Pages",
          name_english: "Creating a DevFolio with GitHub Pages",
          descript:
            "Um resumão para você  ter  inspiração de criar um seu DevFolio com GitHub Pages. No vídeo eu indico alguns frameworks e plataformas para enriquecer o seus conhecimentos.",
          descript_english:
            "A summary to get you inspired to create your own DevFolio with GitHub Pages. In the video I indicate some frameworks and platforms to enrich your knowledge.",
        },
        {
          url: "https://www.youtube.com/embed/MkgLF6Vhsjg",
          name: "Meu discurso de colação de grau",
          name_english: "My graduation speech",
          descript:
            "No dia 03/03/2017 eu me formei como graduado em Sistemas de informação pela Faculdade Farol da cidade de Rolim de Moura - RO - Brasil",
          descript_english:
            "On 2017-03-03 I graduated in Information Systems from Faculdade Farol in the city of Rolim de Moura - RO - Brazil",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section-header h2 {
  font-size: 2rem !important;
}

.videos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

.my-videos {
  padding-left: 50px;
  padding-right: 50px;
  @media only screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
