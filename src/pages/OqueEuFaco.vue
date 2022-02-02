<template>
  <div class="service wow fadeInUp" data-wow-delay="0.1s" id="service">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class=" row">
          <div class="container">
            <div
              class="section-header text-left wow zoomIn"
              data-wow-delay="0.1s"
            >
            <h2 class="text-bold">Com o que eu trabalho?</h2>
            <div> What I do work</div>
            </div>
            <div class="row q-mt-md">
              <div class="wow fadeInUp" data-wow-delay="0.0s">
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa fa-laptop"></i>
                  </div>
                  <div class="service-text">
                    <h3>UX — User Experience </h3>
                    <div>
                      UX significa User Experience, podendo ser traduzida
                      como Experiência do Usuário.
                      UI significa User Interface, podendo ser traduzida como
                      a Interface do Usuário.
                    </div>
                  </div>
                </div>
              </div>
              <div class=" wow fadeInUp" data-wow-delay="0.2s">
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa fa-laptop-code"></i>
                  </div>
                  <div class="service-text">
                    <h3>Web Development</h3>
                    <div>
                    Essencialmente, um desenvolvedor web realiza o desenvolvimento de websites na internet. Ele é o responsável por toda a estrutura de um determinado site. Ou seja, planeja, constrói e dá manutenção para tudo que roda em uma plataforma web.
                    </div>
                  </div>
                </div>
              </div>
              <div class=" wow fadeInUp" data-wow-delay="0.4s">
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa fa-cog"></i>
                  </div>
                  <div class="service-text">
                    <h3>RESTful API with GOLANG</h3>
                    <div>
                      Uma API é um conjunto de definições e protocolos usado no desenvolvimento e na integração de aplicações. Às vezes, as APIs são descritas como um contrato entre um provedor e um usuário de informações, estabelecendo o conteúdo exigido pelo consumidor (a chamada) e o conteúdo exigido pelo produtor (a resposta).
                    </div>
                  </div>
                </div>
              </div>
              <div class=" wow fadeInUp" data-wow-delay="0.6s">
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fab fa-android"></i>
                  </div>
                  <div class="service-text">
                    <h3>Apps Development</h3>
                    <div>
                      O desenvolvimento de aplicativos móveis é o processo pelo qual o software aplicativo é desenvolvido para dispositivos portáteis de baixa potência, como assistentes digitais pessoais, assistentes digitais empresariais ou telefones celulares.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Services',
};
</script>
<style  lang="scss">
$lightgrey: lightgrey;
$blue-clear: rgb(7, 34, 63);
$black: rgba(0, 0, 0, 0.2);
$color-default: rgb(7, 34, 63);

.service h2 {
  font-size: 2rem !important;
}

.service {
  position: relative;
  width: 100%;
  padding: 0px 0 15px 0;
  color: white !important;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  @media only screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.service .service-item {
  position: relative;
  margin-bottom: 30px;
  
  align-items: center;
  box-shadow: inset 0 0 0 0 transparent;
  transition: ease-out 0.5s;
  display: grid;
  grid-template-columns: 150px 1fr;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

.service .service-item:hover {
  box-shadow: inset 1300px 0 0 0 $color-default;
}

.service .service-icon {
  position: relative;
  width: 150px;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $color-default;
  background: #ffffff;
  @media only screen and (max-width: 1200px) {
   width: 100%;
  }
}

.service .service-icon i {
  position: relative;
  font-size: 60px;
  color: $color-default;
  transition: .3s;
}

.service .service-item:hover i {
  font-size: 75px;
}

.service .service-text {
  position: relative;
  width: calc(100% - 120px);
  padding: 0 30px;
  @media only screen and (max-width: 1200px) {
   width: 100%;
   padding: 0;
  }
}

.service .service-text h3 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  transition: 1s;
}

.service .service-text p {
  margin: 0;
  font-size: 16px;
  transition: 1s;
}

.service .service-item:hover .service-text h3,
.service .service-item:hover .service-text p {
  color: #ffffff;
}

@media (max-width: 575.98px) {
  .service .service-text h3 {
      margin-bottom: 5px;
  }
  
  .service .service-text p {
      font-size: 14px;
  }

}

</style>