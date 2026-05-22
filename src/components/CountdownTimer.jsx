import { useEffect, useState } from "react";

const CountdownTimer = () => {

  // Event Date
  const eventDate = new Date("June 13, 2026 08:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();

      const distance = eventDate - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      // Stop timer after event
      if (distance < 0) {

        clearInterval(timer);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

      }

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="w-full px-4">

      <div className="glass p-6 sm:p-10 rounded-3xl text-center w-full max-w-4xl mx-auto shadow-2xl border border-cyan-900 overflow-hidden">

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 gradient-text leading-tight">
          Event Countdown
        </h2>

        {/* Countdown Boxes */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">

          {/* Days */}
          <div className="bg-[#0B1720] w-[70px] sm:w-[120px] h-[110px] sm:h-[150px] rounded-2xl flex flex-col items-center justify-center">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              {timeLeft.days}
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-xl">
              Days
            </p>

          </div>

          {/* Hours */}
          <div className="bg-[#0B1720] w-[70px] sm:w-[120px] h-[110px] sm:h-[150px] rounded-2xl flex flex-col items-center justify-center">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              {timeLeft.hours}
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-xl">
              Hours
            </p>

          </div>

          {/* Minutes */}
          <div className="bg-[#0B1720] w-[70px] sm:w-[120px] h-[110px] sm:h-[150px] rounded-2xl flex flex-col items-center justify-center">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              {timeLeft.minutes}
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-xl">
              Min
            </p>

          </div>

          {/* Seconds */}
          <div className="bg-[#0B1720] w-[70px] sm:w-[120px] h-[110px] sm:h-[150px] rounded-2xl flex flex-col items-center justify-center">

            <h3 className="text-3xl sm:text-5xl font-bold text-cyan-400">
              {timeLeft.seconds}
            </h3>

            <p className="text-gray-400 mt-2 text-sm sm:text-xl">
              Sec
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default CountdownTimer;