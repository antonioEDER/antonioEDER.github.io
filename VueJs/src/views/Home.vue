<template>
  <div data-spy="scroll" data-target=".navbar" data-offset="51">
    <!-- Hero Start -->
    <Hero/>
    <!-- Hero End -->

    <!-- About Start -->
    <About/>
    <!-- About End -->

    <!-- Service Start -->
    <Services />
    <!-- Service End -->

    <!-- Experience Start -->
    <Experience />
    <!-- Job Experience End -->

    <!-- Banner Start -->
    <div class="banner wow zoomIn" data-wow-delay="0.1s">
      <div class="container">
        <div class="section-header text-center">
          <p>Reasonable Price</p>
          <h2>Get A <span>Special</span> Price</h2>
        </div>
        <div class="container banner-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem. Curabitur non nisl nec nisi scelerisque maximus.
          </p>
          <a class="btn">Pricing Plan</a>
        </div>
      </div>
    </div>
    <!-- Banner End -->

    <!-- Portfolio Start -->
    <div class="portfolio" id="portfolio">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Portfolio</p>
          <h2>My Excellent Portfolio</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <ul id="portfolio-filter">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-1">Web Design</li>
              <li data-filter=".filter-2">Mobile Apps</li>
              <li data-filter=".filter-3">Game Dev</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container">
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-1.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>eCommerce Website</h3>
                <a
                  class="btn"
                  href="img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-2.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Product Landing Page</h3>
                <a
                  class="btn"
                  href="img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-3.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>JavaScript quiz game</h3>
                <a
                  class="btn"
                  href="img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-4.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>JavaScript drawing</h3>
                <a
                  class="btn"
                  href="img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-5.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Social Mobile Apps</h3>
                <a
                  class="btn"
                  href="img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
            data-wow-delay="1s"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="../assets/img/portfolio-6.jpg" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>Company Website</h3>
                <a
                  class="btn"
                  href="img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                  >+</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio End -->

    <!-- Banner Start -->
    <div class="banner wow zoomIn" data-wow-delay="0.1s">
      <div class="container">
        <div class="section-header text-center">
          <p>Awesome Discount</p>
          <h2>Get <span>30%</span> Discount</h2>
        </div>
        <div class="container banner-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem. Curabitur non nisl nec nisi scelerisque maximus.
          </p>
          <a class="btn">Order Now</a>
        </div>
      </div>
    </div>
    <!-- Banner End -->

    <!-- Price Start -->
    <div class="price" id="price">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>Pricing Plan</p>
          <h2>Affordable Price</h2>
        </div>
        <div class="row">
          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
            <div class="price-item">
              <div class="price-header">
                <div class="price-title">
                  <h2>Basic</h2>
                </div>
                <div class="price-prices">
                  <h2><small>$</small>49<span>/ mo</span></h2>
                </div>
              </div>
              <div class="price-body">
                <div class="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div class="price-footer">
                <div class="price-action">
                  <a class="btn" href="">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
            <div class="price-item featured-item">
              <div class="price-header">
                <div class="price-title">
                  <h2>Standard</h2>
                </div>
                <div class="price-prices">
                  <h2><small>$</small>99<span>/ mo</span></h2>
                </div>
              </div>
              <div class="price-body">
                <div class="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div class="price-footer">
                <div class="price-action">
                  <a class="btn" href="">Order Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
            <div class="price-item">
              <div class="price-header">
                <div class="price-title">
                  <h2>Premium</h2>
                </div>
                <div class="price-prices">
                  <h2><small>$</small>149<span>/ mo</span></h2>
                </div>
              </div>
              <div class="price-body">
                <div class="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div class="price-footer">
                <div class="price-action">
                  <a class="btn" href="">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Price End -->

    <!-- Contact Start -->
    <div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <div class="container-fluid">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <div class="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="control-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p class="help-block"></p>
                  </div>
                  <div class="control-group">
                    <textarea
                      class="form-control"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p class="help-block"></p>
                  </div>
                  <div>
                    <button class="btn" type="submit" id="sendMessageButton">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact End -->

  
  </div>
</template>

<script>
import Hero from '@/views/Hero.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Experience from '@/views/Experience.vue'

export default {
  name: 'home',
  components: {
    Hero,
    About,
    Services,
    Experience,
  }
}
</script>
