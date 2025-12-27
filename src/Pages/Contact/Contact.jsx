import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section  id="contact-section"
      className="pt-24 pb-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/cnts-bg.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-700/60"></div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-white">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-200 mt-2">
              Have questions or need information? Contact us anytime.
            </p>
          </div>

          {/* GRID (Desktop width controlled) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 justify-center">

            {/* LEFT: Contact Info */}
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-8 space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>

              <div className="flex items-start gap-4 text-sm text-gray-700">
                <FaPhoneAlt className="text-green-600 mt-1" />
                <span>+880xxxxxxxx</span>
              </div>

              <div className="flex items-start gap-4 text-sm text-gray-700">
                <FaEnvelope className="text-green-600 mt-1" />
                <span>xxxxxx@gmail.com</span>
              </div>

              <div className="flex items-start gap-4 text-sm text-gray-700">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <span>
                  xxxxzxxx <br />
                  Dhaka-1207, Bangladesh
                </span>
              </div>
            </div>

            {/* RIGHT: Contact Form (X-axis reduced) */}
            <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-10 max-w-3xl w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Send a Message
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-4 py-2 border rounded-full
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border rounded-full
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">Subject</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-4 py-2 border rounded-full
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">Message</label>
                  <textarea
                    rows="5"
                    className="w-full mt-1 px-4 py-3 border rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-full
                               font-semibold hover:bg-green-700 transition"
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
