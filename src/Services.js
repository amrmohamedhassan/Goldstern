const Services = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="services">
      <div className="service">
        <h1>Car Importing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          expedita saepe reprehenderit molestias doloremque incidunt
          perspiciatis optio labore eum inventore eligendi adipisci, nulla
          provident? Reprehenderit libero, nostrum earum amet provident eveniet
          aspernatur accusantium omnis possimus facere doloribus dicta veritatis
          rerum doloremque vitae repellendus ad adipisci suscipit optio
          corporis. Corporis, et?
        </p>
      </div>
      <div className="service">
        <h1>Shipping</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          necessitatibus sed inventore nam. In aliquid sint, sed officia
          voluptatem facilis quibusdam autem unde, architecto, consectetur
          fugiat suscipit deserunt earum totam.
        </p>
      </div>
      <div className="service">
        <h1>Customs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          rem enim architecto officia rerum labore, molestiae corrupti ratione
          inventore hic quae vero ea, molestias laboriosam voluptatibus!
          Nesciunt est vel vitae sit reiciendis natus eligendi saepe? Sed
          obcaecati aliquid at iure?
        </p>
      </div>
      <div className="contact-us">
        <form>
          <h1>Contact Us</h1>
          <p>We will get in touch shortly</p>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div className="input">
            <label htmlFor="message">Your Inquiry</label>
            <textarea required type="message" name="message" id="message" />
          </div>
          <button onClick={handlesubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;
