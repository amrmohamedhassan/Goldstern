import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="home">
      <div className="hero" data-aos="fade-up">
        <div className="text">
          <div className="services" data-aos="fade-right">
            <h1>Our Services</h1>
            <ul className="services-list">
              <li data-aos="fade-up">
                <img src=".\Icons\fast-delivery.png" alt="fast delivery" />
                Fastest Shipping (40 Days)
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <img src=".\Icons\discount.png" alt="cheapest Shipping" />
                Cheapest Shipping
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <img src=".\Icons\secure.png" alt="fast delivery" />
                Most Secure shipping
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <img src=".\Icons\guaranteed.png" alt="fast delivery" />
                Guaranteed Delivery promises
              </li>
            </ul>
          </div>

          <div className="featured" data-aos="fade-left">
            <h1>Featured Cars</h1>
            <div className="cars">
              <div className="car">
                <p>
                  <img src=".\Icons\mercedes.png" alt="mercedes" />E Class AMG
                </p>
                <img src=".\Icons\E200-AMG.png" alt="E Class AMG" />
              </div>
              <div className="car">
                <p>
                  <img src=".\Icons\mercedes.png" alt="mercedes" />
                  G63 AMG
                </p>
                <img src=".\Icons\G63-AMG.png" alt="E200 AMG" />
              </div>
              <div className="car">
                <p>
                  <img src=".\Icons\mercedes.png" alt="mercedes" />
                  GLA AMG
                </p>
                <img src=".\Icons\GLA-AMG.png" alt="GLA AMG" />
              </div>
              <div className="car">
                <p>
                  <img src=".\Icons\mercedes.png" alt="mercedes" />
                  AMG GT
                </p>
                <img src=".\Icons\AMG-GT.png" alt="AMG GT" />
              </div>
            </div>
          </div>
        </div>
        <img src=".\Icons\hero.jpg" alt="background" className="hero-image" />
      </div>

      <div className="details" data-aos="fade-up">
        <h1>How it works</h1>
        <div className="process" data-aos="fade-right">
          <h1>Step By Step Process</h1>
          <ul className="process-list">
            <li data-aos="fade-up">1. Choosing your car</li>
            <li data-aos="fade-up" data-aos-delay="100">
              2. Configuring your car options
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              3. Buying the car
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              4. shipping it to Egypt
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              5. Finishing Customs and paperworks
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              6. Delivering the car to your doorstep
            </li>
          </ul>
        </div>
        <div className="customs" data-aos="fade-left">
          <h1>Customs & Paperwork</h1>
          <p>What we handle for you</p>
        </div>
        <div className="support" data-aos="fade-right">
          <h1>After-Sales Support</h1>
          <p>Warranty and maintenance information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
