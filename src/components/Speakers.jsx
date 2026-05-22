import speaker1 from "../assets/speakers/speaker1.webp";
import speaker2 from "../assets/speakers/speaker2.webp";
import speaker3 from "../assets/speakers/speaker3.webp";
import speaker4 from "../assets/speakers/speaker4.jpg";
import speaker5 from "../assets/speakers/speaker5.png";
import speaker6 from "../assets/speakers/speaker6.png";
// import speaker7 from "../assets/speakers/speaker7.webp";
import speaker8 from "../assets/speakers/speaker8.png";
import speaker9 from "../assets/speakers/speaker9.jpeg";
import speaker10 from "../assets/speakers/speaker10.png";
import speaker11 from "../assets/speakers/speaker11.png";
import speaker12 from "../assets/speakers/speaker12.jpeg";
import speaker13 from "../assets/speakers/speaker13.jpeg";
import speaker14 from "../assets/speakers/speaker14.jpeg";
import speaker15 from "../assets/speakers/speaker15.png";
import speaker16 from "../assets/speakers/speaker16.png";
import speaker17 from "../assets/speakers/speaker17.jpg";
import speaker18 from "../assets/speakers/speaker18.png";
import speaker19 from "../assets/speakers/speaker19.png";
import speaker20 from "../assets/speakers/speaker20.jpeg";
import speaker21 from "../assets/speakers/speaker21.png";
import speaker22 from "../assets/speakers/speaker22.jpeg";
import speaker23 from "../assets/speakers/speaker23.png";
import speaker24 from "../assets/speakers/speaker24.png";
// import speaker25 from "../assets/speakers/speaker25.png";
// import speaker26 from "../assets/speakers/speaker26.jpeg";
// import speaker27 from "../assets/speakers/speaker27.jpeg";
// import speaker28 from "../assets/speakers/speaker28.jpeg";
const speakers = [
  {
    name: "DR. S K CHABRA",
    city: "DELHI",
    image: speaker1,
  },
  {
    name: "PADMA SHRI DR. RANDEEP GULERIA",
    city: "DELHI",
    image: speaker2,
  },
  {
    name: "DR. DEEPAK TALWAR",
    city: "NOIDA",
    image: speaker3,
  },
  {
    name: "DR. ANAND JAISWAL",
    city: "DELHI",
    image: speaker4,
  },
  {
    name: "DR. DHRUVA CHOUDHRY",
    city: "ROHTAK",
    image: speaker5,
  },
  {
    name: "DR. JALIL PARKER",
    city: "Mumbai",
    image: speaker6,
  },
  // {
  //   name: "DR. PRALHAD PRABHUDESAI",
  //   city: "MUMBAI",
  //   image: speaker7,
  // },
  {
    name: "DR. SANJEEV MEHTA",
    city: "MUMBAI",
    image: speaker8,
  },
  {
    name: "DR. PRASHANT CHHAJED",
    city: "MUMBAI",
    image: speaker9,
  },
  {
    name: "DR. HARJEET DUMRA",
    city: "AHMEDABAD",
    image: speaker10,
  },
  {
    name: "DR. ANAND SANGHI",
    city: "INDORE",
    image: speaker11,
  },
  {
    name: "DR. VIJAY HADDA",
    city: "DELHI",
    image: speaker12,
  },
  {
    name: "DR. SANDEEP ATTAWAR",
    city: "HYDERABAD",
    image: speaker13,
  },
  {
    name: "DR. SUSHIL JAIN",
    city: "RAIPUR",
    image: speaker14,
  },
  {
    name: "DR. SANDEEP TILVE",
    city: "MUMBAI",
    image: speaker15,
  },
  {
    name: "DR. ASHISH PRAKASH",
    city: "DELHI",
    image: speaker16,
  },
  {
    name: "Dr Varun Patel",
    city: "Ahmedabad",
    image: speaker17,
  },
  {
    name: "DR. PRANAV ISH",
    city: "DELHI",
    image: speaker18,
  },
  {
    name: "DR. BAJRANG KUMAR SINGH",
    city: "INDORE",
    image: speaker19,
  },
  {
    name: "DR. PANKAJ SINGHAI",
    city: "INDORE",
    image: speaker20,
  },
  {
    name: "DR. P. N. AGRAWAL",
    city: "BHOPAL",
    image: speaker21,
  },
  {
    name: "DR. MADHUR KALRA",
    city: "CHANDIGARH",
    image: speaker22,
  },
  {
    name: "DR. VIKAS K. MISHRA",
    city: "BHOPAL",
    image: speaker23,
  },
  {
    name: "DR. SUMIT BANGERIA",
    city: "MUMBAI",
    image: speaker24,
  },
  //  {
  //   name: "DR. HEMIL JASANI",
  //   city: "MUMBAI",
  //   image: speaker25,
  // // },
  // {
  //   name: "DR. FATIMA MAMNOON",
  //   city: "DELHI",
  //   image: speaker26,
  // },
  // {
  //   name: "DR. MITI MANIAR",
  //   city: "MUMBAI",
  //   image: speaker27,
  // },
  //  {
  //   name: "DR. NAMRATA MODI",
  //   city: "NASHIK",
  //   image: speaker28,
  // },
  
];

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="py-28 px-6 bg-[#031826]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-teal-800 uppercase tracking-[5px] mb-4">
            Eminent Faculty
          </p>

          <h2 className="text-5xl font-black">
            National
            <span className="text-cyan-400">
              {" "}Speakers
            </span>
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-[#00809a] border border-cyan-900 rounded-[30px] overflow-hidden hover:scale-105 transition-all duration-500 group"
            >

              <div className="overflow-hidden">

                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition-all duration-500"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-xl font-bold mb-2 leading-8">
                  {speaker.name}
                </h3>

                <p className="text-cyan-400">
                  {speaker.city}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Speakers;