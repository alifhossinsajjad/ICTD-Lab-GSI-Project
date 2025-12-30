import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="relative pt-24 pb-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/cnts-bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-700/60"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white tracking-wide">
              CONTACT US
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              Official Communication & Location Information
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT INFO CARD */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">
                Office Information
              </h3>

              <ul className="space-y-5 text-sm text-gray-700">
                <li className="flex gap-4">
                  <FaMapMarkerAlt className="text-green-400 mt-1" />
                  <span>
                    Plot # E-14/X, ICT Tower (5th Floor) <br />
                    Agargaon, Dhaka-1207
                  </span>
                </li>

                <li className="flex gap-4">
                  <FaEnvelope className="text-green-400 mt-1" />
                  <span>pdsrdl@doict.gov.bd</span>
                </li>

                <li className="flex gap-4">
                  <FaPhoneAlt className="text-green-400 mt-1" />
                  <span>+88-02-41024073</span>
                </li>
              </ul>

              <p className="text-xs text-gray-500 mt-6 leading-relaxed">
                Establishment of ICTD Digital Lab Project (Phase II)
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: <FaFacebookF />, link: "#" },
                  { icon: <FaInstagram />, link: "#" },
                  { icon: <FaYoutube />, link: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                     w-10 h-10 rounded-full
  flex items-center justify-center
  bg-green-50 text-green-600
  hover:bg-green-600 hover:text-white
  transition
                    "
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe
                title="ICT Tower Location"
                src="https://www.google.com/maps?q=ICT%20Tower%20Agargaon%20Dhaka&output=embed"
                className="w-full h-[420px] border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
