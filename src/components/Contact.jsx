import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#031826] text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400 mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8">
            For registration queries, sponsorship opportunities,
            scientific sessions, and conference details,
            feel free to connect with the MP-PACES organizing team.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Phone className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Phone
            </h3>

            <p className="text-gray-400 leading-8">
              +91 97119 05636
              <br />
              +91 82693 05636
            </p>

          </div>

          {/* Email */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Email
            </h3>

            <p className="text-gray-400 leading-8">
              paceschest@gmail.com
             
            </p>

          </div>

          {/* Address */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400 transition duration-300">

            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Address
            </h3>

            <p className="text-gray-400 leading-8">
              109-B, Race Course Rd, Janjeerwala Square, Opp. BBC, Vidyapati,New Palasia
              <br />
              Indore, Madhya Pradesh, India
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;