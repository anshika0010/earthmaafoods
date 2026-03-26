"use client";

import React, { useState, useRef } from "react";

function ContactForm({ Receiveemail }) {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const receiveEmail = Receiveemail;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setStatus("❌ Please verify reCAPTCHA");
      return;
    }

    try {
      const response = await fetch("https://rbhardwaj.com/formsend.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          receiveemail: receiveEmail,
          recaptcha: token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Mail sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          country: "",
          message: "",
        });

        recaptchaRef.current?.reset();

        alert(
          "Your mail was sent successfully! The Earthmaa team will contact you soon."
        );
      } else {
        setStatus("❌ " + result.error);
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Phone + Email */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              pattern="[6-9]{1}[0-9]{9}"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>

      </form>

      {status && (
        <p className="mt-4 text-center text-sm text-green-600">
          {status}
        </p>
      )}

    </div>
  );
}

export default ContactForm;