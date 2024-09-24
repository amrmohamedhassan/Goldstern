const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="text">
          <div className="services">
            <h1>Our Services</h1>
            <ul className="services-list">
              <li>
                <img src=".\Icons\fast-delivery.png" alt="fast delivery" />
                Fastest Shipping (40 Days)
              </li>
              <li>
                <img src=".\Icons\discount.png" alt="cheapest Shipping" />
                Cheapest Shipping
              </li>
              <li>
                <img src=".\Icons\secure.png" alt="fast delivery" />
                Most Secure shipping
              </li>
              <li>
                <img src=".\Icons\guaranteed.png" alt="fast delivery" />
                Guaranteed Delivery promises
              </li>
            </ul>
          </div>
          <div className="featured">
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
        <div className="wrapper"></div>
      </div>
      <div className="details">
        <h1>How it works</h1>
        <div className="process">
          <h1>Step By Step Process</h1>
          <ul className="process-list">
            <li>1. Choosing your car</li>
            <li>2. Configuring your car options</li>
            <li>3. Buying the car</li>
            <li>4. shipping it to Egypt</li>
            <li>5. Finishing Customs and paperworks</li>
            <li>6. Delivering the car to your doorstep</li>
          </ul>
        </div>
        <div className="customs">
          <h1>Customs & Paperwork</h1>
          <p>What we handle for you</p>
        </div>
        <div className="support">
          <h1>After-Sales Support</h1>
          <p>Warranty and maintenance information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
