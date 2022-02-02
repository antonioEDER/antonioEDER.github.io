<template>
  <div class="portfolio" id="portfolio">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <h2 class="text-bold">Meu Portfolio</h2>
          <div>My Portfolio</div>
        </div>
        <div class="portfolio-container">
          <div
            class="portfolio-item filter-1 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/site-eucatur.png" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>eCommerce Eucatur</h3>
                <a
                  class="btn"
                  href="https://www.eucatur.com.br/"
                  target="new"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="portfolio-item filter-2 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/sso-eucatur.png" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>SSO KeyCloak</h3>
                <a
                  class="btn"
                  href="https://accounts.eucatur.com.br/saml/sso"
                  target="new"

                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="portfolio-item filter-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/qop.png" alt="Image" />
              </div>
              <div class="portfolio-text">
               <h3>Marketplace QOP </h3>
                <a
                  class="btn"
                  href="https://qop.net.br/"
                  data-lightbox="portfolio"
                  target="new"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="portfolio-item filter-1 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/app-eucatur.png" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>APP Eucatur Android</h3>
                <a
                  class="btn"
                  href="https://play.google.com/store/apps/details?id=br.com.eucatur&hl=pt_BR&gl=US"
                  data-lightbox="portfolio"
                  target="new"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="portfolio-item filter-2 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/nps.png" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>NPS</h3>
                <a
                  class="btn"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="portfolio-item filter-3 wow fadeInUp"
            data-wow-delay="1s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/carrinho.png" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Serviço de Carrinho abandonado</h3>
                <a
                  class="btn"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 name: 'Portfolio',
}
</script>

<style  lang="scss">
$lightgrey: lightgrey;
$blue-clear: rgb(7, 34, 63);
$black: rgba(0, 0, 0, 0.2);
$color-default: rgb(7, 34, 63);

.portfolio-container {
  padding: 30px;
  display: grid;
  column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
  }
}

.portfolio h2 {
  font-size: 2rem !important;
}


.portfolio {
  position: relative;
  padding: 45px 0 15px 0;
}

.portfolio #portfolio-filter {
  padding: 0;
  margin: -15px 0 25px 0;
  list-style: none;
  font-size: 0;
  text-align: center;
}

.portfolio #portfolio-filter li {
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: $color-default;
  border: 2px solid transparent;
  border-radius: 0;
  box-shadow: inset 0 0 0 50px $color-default;
  transition: ease-out 0.3s;
  -webkit-transition: ease-out 0.3s;
  -moz-transition: ease-out 0.3s;
}

.portfolio #portfolio-filter li:hover,
.portfolio #portfolio-filter li.filter-active {
  color: $color-default;
  background: transparent;
  box-shadow: inset 0 0 0 0 $color-default;
  border-color: $color-default;
}

.portfolio .portfolio-item {
  position: relative;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    width: 70%;
  }
}

.portfolio .portfolio-wrap {
  position: relative;
  width: 100%;
}

.portfolio .portfolio-img {
  position: relative;
  overflow: hidden;
}

.portfolio .portfolio-img img {
  position: relative;
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  transform: scale(1.1);
  transition: .5s;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
}

.portfolio .portfolio-item:hover img {
  margin-left: 15px;
}

.portfolio .portfolio-text {
  position: relative;
  height: 60px;
  width: calc(100% - 30px);
  margin: -30px 15px 30px 15px;
  display: flex;
  align-items: center;
  background: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, .12);
  @media only screen and (max-width: 1200px) {
    height: 100%;
  }
}

.portfolio .portfolio-text h3 {
  width: calc(100% - 70px);
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 0 15px;
  white-space: nowrap;
  overflow: hidden;
}

.portfolio .portfolio-text a.btn {
  width: 50px;
  height: 50px;
  padding: 0 0 2px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 100;
}

.portfolio .portfolio-item:hover a.btn {
  color: white;
  background: transparent;
  box-shadow: inset 0 0 0 0 $color-default;
  border-color: $color-default;
}

</style>