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

  }, [eventDate]);

  return (
    <div className="glass p-10 rounded-3xl text-center w-full max-w-md shadow-2xl border border-cyan-900">

      <h2 className="text-3xl font-bold mb-8 gradient-text">
        Event Countdown
      </h2>

      <div className="grid grid-cols-4 gap-4 text-center">

        <div className="bg-[#0B1720] p-4 rounded-2xl">
          <h3 className="text-4xl font-bold text-cyan-400">
            {timeLeft.days}
          </h3>

          <p className="text-gray-400 mt-2">
            Days
          </p>
        </div>

        <div className="bg-[#0B1720] p-4 rounded-2xl">
          <h3 className="text-4xl font-bold text-cyan-400">
            {timeLeft.hours}
          </h3>

          <p className="text-gray-400 mt-2">
            Hours
          </p>
        </div>

        <div className="bg-[#0B1720] p-4 rounded-2xl">
          <h3 className="text-4xl font-bold text-cyan-400">
            {timeLeft.minutes}
          </h3>

          <p className="text-gray-400 mt-2">
            Min
          </p>
        </div>

        <div className="bg-[#0B1720] p-4 rounded-2xl">
          <h3 className="text-4xl font-bold text-cyan-400">
            {timeLeft.seconds}
          </h3>

          <p className="text-gray-400 mt-2">
            Sec
          </p>
        </div>

      </div>

    </div>
  );
};

export default CountdownTimer;