import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1 intro">{config.heading}</h1>
        <h3 className="mb-5">
          <p class="font-italic font-weight-light">{config.subHeading}</p>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            About
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="shadow">
              <em className="text-fancy">I</em>n summer 2018, the scorching hot Texas heat burnt down the 
              cabin-in-the-woods-turned-Playboy-mansion in which the founders resided. Dosey Doe is the phoenix 
              that rose from the ashes.

            </h2>
            <p className="lead mb-5">
              We do cool stuff and things. 
            </p>
            <Scroll type="id" element="projects" offset={100}>
              <a className="btn btn-dark btn-xl" href="#projects">
                See our Projects
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-primary text-white text-center"
      id="projects"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Projects</h3>
           <h2 className="mb-5">We tell vidid, real stories</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-smartphone"></i>
            </span>
            <h4>
              <strong>Project 1</strong>
            </h4>
            <p className="text-faded mb-0">Project 1 placeholder!</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-pencil"></i>
            </span>
            <h4>
              <strong>Project 2</strong>
            </h4>
            <p className="text-faded mb-0">
              Project 2 placeholder!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-like"></i>
            </span>
            <h4>
              <strong>Project 3</strong>
            </h4>
            <p className="text-faded mb-0">
              Project 3 Placeholder!
              <i className="fas fa-heart"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-mustache"></i>
            </span>
            <h4>
              <strong>Project 4</strong>
            </h4>
            <p className="text-faded mb-0">Project 4 placeholder! </p>
          </div>
        </div>
      </div>
    </section>

    <section className="callout">
      <div className="container text-center">
        <a
          className="btn btn-primary btn-xl"
          href="https://vimeo.com/doseydoe"
        >
          Check us out on Vimeo
        </a>
      </div>
    </section>

    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Stationary</h2>
                  <p className="mb-0">
                    A yellow pencil with envelopes on a clean, blue backdrop!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Ice Cream</h2>
                  <p className="mb-0">
                    A dark blue background with a colored pencil, a clip, and a
                    tiny ice cream cone!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Strawberries</h2>
                  <p className="mb-0">
                    Strawberries are such a tasty snack, especially with a
                    little sugar on top!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Workspace</h2>
                  <p className="mb-0">
                    A yellow workspace with some scissors, pencils, and other
                    objects.
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-primary text-white tilapia">
      <div className="container text-center">
        <h2 className="mb-4">Thoughts &amp; Musings</h2>
        <a href="/#" className="btn btn-xl btn-clear-with-border">
          Logan's Authentic, Home-Grown, non-GMO Blog
        </a>
        
      </div>
    </section>

    {/* <section id="contact" className="map">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      ></iframe>
      <br />
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>
    </section> */}

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
