import qrImage from "../qr/qr-code2.png";

const RegistrationCTA = () => {
  return (
    <section
      id="register"
      className="py-20 px-4 sm:px-6 bg-[#031826]"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= Registration Heading ================= */}
        <div className="text-center mb-14">

          <h2 className="inline-block bg-cyan-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-2xl sm:text-4xl font-black shadow-lg">
            REGISTRATION DETAILS
          </h2>

        </div>

        {/* ================= Registration Table ================= */}
        <div className="rounded-[30px] shadow-2xl mb-16 overflow-hidden bg-white">

          <table className="w-full border-collapse text-[10px] sm:text-sm md:text-base">

            <thead>

              <tr className="bg-cyan-800 text-white text-center">

                <th className="p-2 sm:p-5 border border-cyan-200">
                  PARTICULARS
                </th>

                <th className="p-2 sm:p-5 border border-cyan-200">
                  FEE TILL 10TH JUNE
                </th>

                <th className="p-2 sm:p-5 border border-cyan-200">
                  SPOT
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="bg-cyan-50 text-center">

                <td className="p-2 sm:p-5 border border-cyan-200 font-bold text-cyan-700">
                  CONFERENCE REGISTRATION
                </td>

                <td className="p-2 sm:p-5 border border-cyan-200 font-bold text-cyan-700">
                  ₹2,000/-
                </td>

                <td className="p-2 sm:p-5 border border-cyan-200 font-bold text-cyan-700">
                  ₹3,000/-
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* ================= Bank Details + QR Code ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* ================= Bank Details ================= */}
          <div className="bg-[#0B1720] border border-cyan-800 rounded-[30px] p-5 sm:p-8 shadow-2xl">

            <h3 className="text-2xl sm:text-3xl font-black text-cyan-400 mb-8">
              Bank Details
            </h3>

            <div className="space-y-5 text-white text-sm sm:text-lg break-words">

              <div>
                <span className="text-cyan-400 font-semibold">
                  Account Name :
                </span>{" "}
                Pulmonary and Critical Care Education Society
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  Bank Name :
                </span>{" "}
                Axis Bank
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  Account Number :
                </span>{" "}
                926010020408505
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  IFSC Code :
                </span>{" "}
                UTIB0004476
              </div>

            </div>

          </div>

          {/* ================= QR Code ================= */}
          <div className="bg-[#0B1720] border border-cyan-800 rounded-[30px] p-5 sm:p-8 shadow-2xl flex flex-col items-center justify-center">

            <h3 className="text-2xl sm:text-3xl font-black text-cyan-400 mb-8">
              Scan & Pay
            </h3>

            <div className="bg-white p-4 rounded-2xl shadow-lg">

              <img
                src={qrImage}
                alt="QR Code"
                className="w-[250px] sm:w-[320px] h-auto object-contain"
              />

            </div>

            <p className="text-gray-400 mt-6 text-center text-sm sm:text-base">
              Scan the QR code to complete your registration payment.
            </p>

          </div>

        </div>


        {/* ================= Buttons ================= */}
        <div className="text-center flex flex-col items-center gap-5">

          {/* Register Now Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetUkdxYNrVBSswsNoDgNL56AwQFjvys0XZBToP7ouinv0NBw/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105">

              Online Register Now

            </button>

          </a>

          {/* Download Registration Form Button */}
          <a
            href="/registration-form.pdf"
            download
          >

            <button className="bg-white hover:bg-cyan-100 text-cyan-700 border-2 border-cyan-500 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105">

              Download Registration Form

            </button>

          </a>

          {/* ================= Moving Text ================= */}
<div className="overflow-hidden whitespace-nowrap bg-white/5 border border-cyan-400/20 backdrop-blur-md py-3 rounded-full mb-8 shadow-lg">

  <div className="animate-marquee inline-block text-cyan-300 font-semibold text-sm sm:text-lg px-4">

    You can also fill up the form offline by clicking on Download Registration Form.

  </div>

</div>


        </div>

      </div>
    </section>
  );
};

export default RegistrationCTA;