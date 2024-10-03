"use client";
import React, { useState } from "react";
import Swal from "sweetalert2"; // Make sure to import Swal for alerts

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Append access key to form data
    const dataToSend = {
      ...formData,
      access_key: "915adfad-feb9-457b-85ff-064fcee681c7",
    };

    const json = JSON.stringify(dataToSend);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        // Clear form data after successful submission
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Message sending failed.",
        icon: "error",
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Bubbles Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => {
          const isWhiteBubble = Math.random() < 0.5; // 50% chance for white bubbles
          return (
            <div
              key={index}
              className={`bubble absolute rounded-full ${isWhiteBubble ? 'bg-white' : 'bg-pink-500'} opacity-60 animate-bubble`}
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 100}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          );
        })}
      </div>
      <div className="max-w-xl mx-auto p-4 relative z-10">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl text-pink-400 text-center mb-4">Contact Us</h2> {/* Updated styles for the heading */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          animation: rise 4s linear infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
};
