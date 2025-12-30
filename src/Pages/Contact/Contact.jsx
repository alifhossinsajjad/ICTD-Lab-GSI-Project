import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact-section" className="py-20 bg-emerald-50 font-sans relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
            <h2 className="text-3xl md:text-4xl p-2 lg:text-5xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or need information? We're here to help. Reach out to us anytime.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 bg-white rounded-3xl shadow-2xl shadow-green-900/10 overflow-hidden">

          {/* LEFT: Contact Info (Dark Theme) */}
          <div className="lg:col-span-1 bg-[#006A4E] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-green-100 mb-10 leading-relaxed">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-green-100 text-sm mt-1">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-green-100 text-sm mt-1">info@ictd-lab.gov.bd</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-green-100 text-sm mt-1 leading-relaxed">
                      ICT Tower, Agargaon,<br />
                      Dhaka-1207, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="relative z-10 mt-12">
              <div className="w-24 h-24 bg-green-500/20 rounded-full absolute -bottom-10 -right-10 blur-xl"></div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-2 p-10 md:p-14 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+880..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#006A4E] hover:bg-[#00563f] text-white font-semibold rounded-lg shadow-lg shadow-green-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;