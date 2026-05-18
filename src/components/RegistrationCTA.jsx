const RegistrationCTA = () => {
  return (
    <section
      id="register"
      className="py-20 px-6 bg-[#031826]"
    >

      <div className="max-w-7xl mx-auto">

        {/* ================= Registration Heading ================= */}
        <div className="text-center mb-14">

          <h2 className="inline-block bg-cyan-700 text-white px-10 py-4 rounded-2xl text-4xl font-black shadow-lg">
            REGISTRATION DETAILS
          </h2>

        </div>

        {/* ================= Registration Table ================= */}
        <div className="overflow-x-auto rounded-[30px] shadow-2xl mb-16">

          <table className="w-full border-collapse overflow-hidden rounded-[30px]">

            <thead>

              <tr className="bg-cyan-800 text-white text-center">

                <th className="p-5 border border-cyan-200 text-lg">
                  PARTICULARS
                </th>

                <th className="p-5 border border-cyan-200 text-lg">
                  EARLY BIRD TILL 31ST MAY
                </th>

                <th className="p-5 border border-cyan-200 text-lg">
                  LATE REGISTRATION 1ST JUNE - 12TH JUNE
                </th>

                <th className="p-5 border border-cyan-200 text-lg">
                  SPOT
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="bg-cyan-50 text-center">

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700">
                  ICS, API, MPAP MEMBERS & PG
                </td>

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700 text-xl">
                  2,000/-
                </td>

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700 text-xl">
                  2,500/-
                </td>

                <td
                  rowSpan="2"
                  className="p-5 border border-cyan-200 font-bold text-cyan-700 text-xl"
                >
                  4,000/-
                </td>

              </tr>

              <tr className="bg-white text-center">

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700">
                  NON MEMBERS
                </td>

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700 text-xl">
                  2,500/-
                </td>

                <td className="p-5 border border-cyan-200 font-bold text-cyan-700 text-xl">
                  3,000/-
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* ================= Bank Details + QR Code ================= */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* Bank Details */}
          <div className="bg-[#0B1720] border border-cyan-800 rounded-[30px] p-8 shadow-2xl">

            <h3 className="text-3xl font-black text-cyan-400 mb-8">
              Bank Details
            </h3>

            <div className="space-y-5 text-white text-lg">

              <div>
                <span className="text-cyan-400 font-semibold">
                  Account Name :
                </span>{" "}
                MP PACES Summit 2026
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  Bank Name :
                </span>{" "}
                HDFC Bank
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  Account Number :
                </span>{" "}
                XXXXXXXXXXXXXX
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  IFSC Code :
                </span>{" "}
                HDFCXXXXXXX
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">
                  Branch :
                </span>{" "}
                XXXXX XXXXX, XXXXXX
              </div>

            </div>

          </div>

          {/* QR Code */}
          <div className="bg-[#0B1720] border border-cyan-800 rounded-[30px] p-8 shadow-2xl flex flex-col items-center justify-center">

            <h3 className="text-3xl font-black text-cyan-400 mb-8">
              Scan & Pay
            </h3>

            <img
              src="/qr/qr-code.png"
              alt="QR Code"
              className="w-72 h-72 object-contain rounded-2xl bg-white p-4"
            />

            <p className="text-gray-400 mt-6 text-center">
              Scan the QR code to complete your registration payment.
            </p>

          </div>

        </div>

        {/* ================= Register Button BOTTOM ================= */}
        <div className="text-center">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSetUkdxYNrVBSswsNoDgNL56AwQFjvys0XZBToP7ouinv0NBw/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105">

              Register Now

            </button>

          </a>

        </div>

      </div>

    </section>
  );
};

export default RegistrationCTA;