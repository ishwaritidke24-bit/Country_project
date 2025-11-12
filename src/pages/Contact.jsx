export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData.entries()));
    alert("Message sent successfully!");
  };

  return (
    <section className="section-contact">
      <h3 className="contact-title">Contact Us</h3>

      <div className="contact-wrapper">
        <form onSubmit={handleFormSubmit} className="contact-form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
          />

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
