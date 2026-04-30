import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import toast, { Toaster } from "react-hot-toast";
import { CONTACT_INFO, BRAND } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const leadsCollection = collection(db, "leads");
      await addDoc(leadsCollection, {
        ...formData,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString(),
      });

      toast.success("Vibe Received! We'll get back to you soon.", {
        duration: 4000,
        position: "bottom-right",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit. Please try again.", {
        duration: 4000,
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <Toaster />
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${CONTACT_INFO.email}`} data-cursor="disable">
                {CONTACT_INFO.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${CONTACT_INFO.phone}`} data-cursor="disable">
                {CONTACT_INFO.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={CONTACT_INFO.twitter}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-form-box">
            <h4>Let&apos;s Connect</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
              />
              <button type="submit" disabled={loading} className="contact-submit-btn">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{BRAND.founder}</span>
            </h2>
            <h5>
              <MdCopyright /> 2024 {BRAND.name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
