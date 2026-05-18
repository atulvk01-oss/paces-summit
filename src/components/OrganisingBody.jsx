const OrganisingBody = () => {

  const organisations = [
    {
      title: "INDORE CHEST SOCIETY",
      members: [
        {
          role: "President",
          name: "Dr. (Prof.) Abhijeet Khandelwal",
        },
        {
          role: "Vice President",
          name: "Dr. Has Mukh Gandhi",
        },
        {
          role: "Secretary",
          name: "Dr. Gaurav Gupta",
        },
        {
          role: "Clinical Secretary",
          name: "Dr. Dilip Chawda",
        },
        {
          role: "Joint Secretary",
          name: "Dr. Deepak Bansal",
        },
        {
          role: "Treasurer",
          name: "Dr. Ravi Dosi",
        },
      ],
    },

    {
      title: "ASSOCIATION OF PHYSICIANS OF INDIA - MP CHAPTER",
      members: [
        {
          role: "President",
          name: "Dr. R.K. Jha",
        },
        {
          role: "Secretary",
          name: "Dr. Abhuday Verma",
        },
        {
          role: "Clinical Secretary",
          name: "Dr. Rakesh Jain",
        },
      ],
    },

    {
      title: "MP ASSOCIATION OF PULMONOLOGISTS (MPAP)",
      members: [
        {
          role: "President",
          name: "Dr. Lokendra Dave",
        },
        {
          role: "Vice President",
          name: "Dr. Alkesh Khurana",
        },
        {
          role: "Secretary",
          name: "Dr. Nishant Shrivastava",
        },
        {
          role: "Joint Secretary",
          name: "Dr. Sanjay Kumar Bharty",
        },
        {
          role: "Treasurer",
          name: "Dr. Abhinav Choubey",
        },
      ],
    },

    {
      title: "PULMONARY AND CRITICAL CARE EDUCATION SOCIETY (PACES)",
      members: [
        {
          role: "President",
          name: "Dr. (Prof.) Abhijeet Khandelwal",
        },
        {
          role: "Vice President",
          name: "Dr. Kumar Girendra",
        },
        {
          role: "Secretary",
          name: "Dr. Ankur Agarwal",
        },
        {
          role: "Joint Secretary",
          name: "Dr. Gaurav Gupta",
        },
        {
          role: "Treasurer",
          name: "Dr. Isha Khandelwal",
        },
      ],
    },
  ];

  // ================= Advisory Committee =================
  const advisoryCommittee = [
    "Dr. Ashok Bajpai",
    "Dr. Vijay Agarwal",
    "Dr. Vijay Chhajlani",
    "Dr. Anand Choudhry",
    "Dr. Mukesh Bhargava",
    "Dr. Pradeep Jain",

    "Dr. Prakash Joshi",
    "Dr. Satish Motiwale",
    "Dr. G. S. Malpani",
    "Dr. Dilip Balani",
    "Dr. S.Z. Jafrey",
    "Dr. Yogendra Malviya",

    "Dr. Vallabh Mundra",
    "Dr. Rajendra Mehta",
    "Dr. Mahesh Patni",
    "Dr. Pramod Jhanwar",
    "Dr. Sanjay Avashia",

    "Dr. Salil Bhargava",
    "Dr. Atul Kharate",
    "Dr. Sobhagya Jain",
    "Dr. Rupesh Modi",
    "Dr. Prafulla Dube",
  ];

  // ================= Scientific Committee =================
  const scientificCommittee = [
    "Dr. Deepak Bansal",
    "Dr. Sameer Vaidya",
    "Dr. Piyu Jain",
  ];

  // ================= Poster Committee =================
  const posterCommittee = [
    "Dr. Ankur Agarwal",
    "Dr. Suraj Verma",
    "Dr. Shailesh Agarwal",
  ];

  return (
    <section
      id="organising"
      className="py-28 px-6 bg-[#031826]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Conference Management
          </p>

          <h2 className="text-5xl font-black text-white">
            Organising
            <span className="text-cyan-400">
              {" "}Body
            </span>
          </h2>

        </div>

        {/* Organisations */}
        <div className="space-y-16">

          {organisations.map((org, index) => (

            <div
              key={index}
              className="bg-[#0B1720] border border-cyan-900 rounded-[35px] p-10 shadow-2xl"
            >

              {/* Organisation Title */}
              <div className="text-center mb-12">

                <div className="inline-block px-8 py-4 rounded-2xl border border-cyan-700 bg-[#02131F]">

                  <h3 className="text-3xl font-black text-cyan-400 leading-tight">
                    {org.title}
                  </h3>

                  <p className="text-gray-400 uppercase tracking-[4px] text-sm mt-2">
                    Office Bearers
                  </p>

                </div>

              </div>

              {/* Members Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {org.members.map((member, idx) => (

                  <div
                    key={idx}
                    className="bg-[#02131F] border border-cyan-900 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300"
                  >

                    <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
                      {member.role}
                    </p>

                    <h4 className="text-xl font-bold leading-8 text-white">
                      {member.name}
                    </h4>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* ================= Advisory Committee ================= */}
        <div className="mt-24 bg-[#0B1720] border border-cyan-900 rounded-[35px] p-10">

          <div className="text-center mb-14">

            <div className="inline-block px-10 py-5 border-2 border-cyan-600 rounded-2xl">

              <h3 className="text-4xl font-black text-cyan-400 uppercase">
                Advisory Committee : Indore Chest Society
              </h3>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {advisoryCommittee.map((member, index) => (

              <div
                key={index}
                className="bg-[#02131F] border border-cyan-900 rounded-2xl py-5 px-4 text-center hover:border-cyan-400 transition duration-300"
              >

                <h4 className="text-white font-bold text-lg leading-8 uppercase">
                  {member}
                </h4>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Scientific Committee ================= */}
        <div className="mt-16 bg-[#0B1720] border border-cyan-900 rounded-[35px] p-10">

          <div className="text-center mb-14">

            <div className="inline-block px-10 py-5 border-2 border-cyan-600 rounded-2xl">

              <h3 className="text-4xl font-black text-cyan-400 uppercase">
                Scientific Committee
              </h3>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {scientificCommittee.map((member, index) => (

              <div
                key={index}
                className="bg-[#02131F] border border-cyan-900 rounded-2xl py-6 px-4 text-center hover:border-cyan-400 transition duration-300"
              >

                <h4 className="text-white font-bold text-xl uppercase">
                  {member}
                </h4>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Poster & Paper Committee ================= */}
        <div className="mt-16 bg-[#0B1720] border border-cyan-900 rounded-[35px] p-10">

          <div className="text-center mb-14">

            <div className="inline-block px-10 py-5 border-2 border-cyan-600 rounded-2xl">

              <h3 className="text-4xl font-black text-cyan-400 uppercase">
                Poster & Paper Committee
              </h3>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {posterCommittee.map((member, index) => (

              <div
                key={index}
                className="bg-[#02131F] border border-cyan-900 rounded-2xl py-6 px-4 text-center hover:border-cyan-400 transition duration-300"
              >

                <h4 className="text-white font-bold text-xl uppercase">
                  {member}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default OrganisingBody;