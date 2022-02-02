<template>
  <div>
      <div class="experience" id="experience">
      <div class="container q-ma-lg">
        <header
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <h1 class="text-bold">Experiência de trabalho</h1>
          <div class="q-ma-md">Working Experience</div>
        </header>
        <div class="timeline">
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">May 2016 - Present</div>
              <h2>Web Developer</h2>
              <h4>EUCATUR - Empresa União Cascavel de Transportes e Turismo, JiParaná - RO</h4>
                <p>‑ Desenvolver Front‑End dos sites da empresa.</p>
                <p>‑ Gerar App Android e IOS Híbrido usando CordovaJs/CapacitorJs.</p>
                <p>‑ Seguir Padrões dos Layouts criado pelo UX e UI. </p>
                <p>‑ Integrar front-end as APIS-REST. </p>
                <p>‑ Treinar novos desenvolvedores Front‑End com padrões de escrita e cultura do empresa.</p>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div class="timeline-text">
              <div class="timeline-date">Jan 2013 - Apr 2016</div>
              <h2>Técnico de Suporte em Campo</h2>
              <h4>HSF SOFTWARE, Rolim de Moura - RO</h4>
              <p>- Treinar novos clientes com o sistemas de automação comercial.</p>
              <p>‑ Instalar Sistema em ambiente Window.</p>
              <p>‑ Suporte e instalação as impressoras fiscais.</p>
            </div>
          </div>
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">Oct 2012 - Nov 2012</div>
              <h2>Tecnico de Urna</h2>
              <h4>ENGETEC TECNOLOGICA, Rolim de Moura - RO</h4>
                <p>‑ Suporte a urna Eletrônica durante as eleições de 2012.</p>
                <p>‑ Orientar os mesários e eleitores sobre funcionamento das urnas.</p>
                <p>‑ Enviar dados da urna ONLINE com sistema da justiça eleitoral.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Experience',
}
</script>

<style  lang="scss">
$lightgrey: lightgrey;
$blue-clear: rgb(7, 34, 63);
$black: rgba(0, 0, 0, 0.2);
$color-default: rgb(7, 34, 63);

.experience {
  position: relative;
  padding: 45px 0 15px 0;
}

.experience h1 {
  font-size: 2rem !important;
}
.experience h2 {
  font-size: 1rem !important;
}

.experience .timeline {
  position: relative;
  width: 100%;
}

.experience .timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: $color-default;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.experience .timeline .timeline-item {
  position: relative;
  background: inherit;
  width: 50%;
  margin-bottom: 30px;
}

.experience .timeline .timeline-item.left {
  left: 0;
  padding-right: 30px;
}

.experience .timeline .timeline-item.right {
  left: 50%;
  padding-left: 30px;
}

.experience .timeline .timeline-item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 48px;
  right: -8px;
  background: #ffffff;
  border: 2px solid $color-default;
  border-radius: 16px;
  z-index: 1;
}

.timeline-text {
  color: black;
}

.experience .timeline .timeline-item.right::after {
  left: -8px;
}

.experience .timeline .timeline-item::before {
content: '';
position: absolute;
width: 0;
height: 0;
top: 46px;
right: 10px;
z-index: 1;
border: 10px solid;
border-color: transparent transparent transparent #dddddd;
}

.experience .timeline .timeline-item.right::before {
left: 10px;
border-color: transparent #dddddd transparent transparent;
}

.experience .timeline .timeline-date {
  position: absolute;
  width: 100%;
  top: 44px;
  font-size: 16px;
  font-weight: 600;
  color: $color-default;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.timeline-date {
  color: white !important;
}

.experience .timeline .timeline-item.left .timeline-date {
  text-align: left;
  left: calc(100% + 55px);
}

.experience .timeline .timeline-item.right .timeline-date {
  text-align: right;
  right: calc(100% + 55px);
}

.experience .timeline .timeline-text {
  padding: 30px;
  background: #ffffff;
  position: relative;
  border-right: 5px solid #dddddd;
  box-shadow: 0 0 60px rgba(0, 0, 0, .08);
}

.experience .timeline .timeline-item.right .timeline-text {
  border-right: none;
  border-left: 5px solid #dddddd;
}

.experience .timeline .timeline-text h2 {
  margin: 0 0 5px 0;
  font-size: 22px;
  font-weight: 600;
}

.experience .timeline .timeline-text h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
}

.experience .timeline .timeline-text p {
  margin: 0;
  font-size: 16px;
}

@media (max-width: 767.98px) {
  .experience .timeline::after {
      left: 8px;
  }

  .experience .timeline .timeline-item {
      width: 100%;
      padding-left: 38px;
  }
  
  .experience .timeline .timeline-item.left {
      padding-right: 0;
  }
  
  .experience .timeline .timeline-item.right {
      left: 0%;
      padding-left: 38px;
  }

  .experience .timeline .timeline-item.left::after, 
  .experience .timeline .timeline-item.right::after {
      left: 0;
  }
  
  .experience .timeline .timeline-item.left::before,
  .experience .timeline .timeline-item.right::before {
      left: 18px;
      border-color: transparent #dddddd transparent transparent;
  }
  
  .experience .timeline .timeline-item.left .timeline-date,
  .experience .timeline .timeline-item.right .timeline-date {
      position: relative;
      top: 0;
      right: auto;
      left: 0;
      text-align: left;
      margin-bottom: 10px;
  }
  
  .experience .timeline .timeline-item.left .timeline-text,
  .experience .timeline .timeline-item.right .timeline-text {
      border-right: none;
      border-left: 5px solid #dddddd;
  }
}
</style>