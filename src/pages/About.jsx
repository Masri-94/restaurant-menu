
import { useState } from "react";

function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="section about-page">
      <div className="section-heading">
        <span className="eyebrow">OUR STORY</span>
        <h1>About Savor</h1>
        <p>
          We believe every meal should be an experience.
          Our menu brings together fresh ingredients,
          comforting flavors and memorable moments.
        </p>
      </div>

      <div className="contact-box">
        <h2>Contact us</h2>

        {submitted && (
          <p className="success">
            Thank you! Your message has been received.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              required
              value={form.name}
              onChange={e =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              required
              type="email"
              value={form.email}
              onChange={e =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Your email"
            />
          </label>

          <label>
            Message
            <textarea
              required
              value={form.message}
              onChange={e =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Write your message..."
            />
          </label>

          <button className="primary-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default About;