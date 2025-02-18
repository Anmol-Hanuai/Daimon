import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState(""); // For success/error message
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    setLoading(true);
    setResponseMessage("");
  
    try {
      console.log("Sending request to backend...");
  
      const response = await fetch("http://localhost:4000/api/send/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });
  
      const data = await response.json();
      console.log("Response received:", data);
  
      if (response.ok && data.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" }); // Reset form
      } else {
        setResponseMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Let's Work Together</h1>
        <p className="contact-description">
          For a detailed discussion on how our services can support your business objectives, you are welcome to schedule a consultation.
        </p>
        <div className="contact-info">
          <p>
            <strong><FaEnvelope /> Email:</strong> pratul@thedaimon.com
          </p>
          <p>
            <strong><FaPhone /> Phone:</strong> +1(718)313-7009
          </p>
          <p>
            <strong><FaMapMarkerAlt /> Location:</strong> New York, USA 
          </p>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-head">
              <label htmlFor="fullName">
                <FaUser /> Full Name
              </label>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <div className="form-head">
              <label htmlFor="email">
                <FaEnvelope /> Email Address
              </label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className="form-head">
              <label htmlFor="phone">
                <FaPhone /> Phone Number
              </label>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number (optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <div className="form-head">
              <label htmlFor="subject">
                <FaTag /> Subject
              </label>
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <div className="form-head">
              <label htmlFor="message">
                <FaCommentDots /> Message
              </label>
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

