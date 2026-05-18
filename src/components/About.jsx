const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#031826]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            About Summit
          </p>

          <h2 className="text-5xl font-black mb-8 leading-tight">
            India’s Premier
            <span className="text-cyan-400">
              {" "}Pulmonology
            </span>
            <br />
            Academic Summit
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            MP – PACES Summit 2026 brings together renowned pulmonologists,
            physicians, critical care specialists, and healthcare innovators
            from across India.
          </p>

          <p className="text-gray-400 leading-8">
            The conference focuses on interactive case-based discussions,
            multidisciplinary debates, poster presentations, and real-world
            clinical learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#0B1720] p-8 rounded-3xl border border-cyan-900">
            <h3 className="text-4xl font-black text-cyan-400 mb-3">
              35+
            </h3>

            <p className="text-gray-300">
              National Speakers
            </p>
          </div>

          <div className="bg-[#0B1720] p-8 rounded-3xl border border-cyan-900">
            <h3 className="text-4xl font-black text-cyan-400 mb-3">
              2 Days
            </h3>

            <p className="text-gray-300">
              Academic Sessions
            </p>
          </div>
          
          <div className="bg-[#0B1720] p-8 rounded-3xl border border-cyan-900">
            <h3 className="text-4xl font-black text-cyan-400 mb-3">
              Live
            </h3>

            <p className="text-gray-300">
              Case Discussions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;