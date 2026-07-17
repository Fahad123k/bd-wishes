import './App.css';
import AppRouter from "./AppRouter";
import { useEffect, useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {

    const checkDate = () => {

      const now = new Date();

      // 18 July 12:00 AM
      const birthdayDate = new Date(
        now.getFullYear(),
        6,
        18,
        0,
        0,
        0
      );


      const difference = birthdayDate - now;


      if (difference <= 0) {

        setIsOpen(true);

        return;
      }


      const hours = Math.floor(
        difference / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
      );


      setTimeLeft({
        hours,
        minutes,
        seconds
      });

    };


    checkDate();

    const timer = setInterval(checkDate, 1000);


    return () => clearInterval(timer);


  }, []);



  if (!isOpen) {

    return (

      <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-pink-100
                via-purple-100
                to-indigo-100
                text-center
                px-4
            ">

        <div>

          <h1 className="
                        text-3xl
                        sm:text-5xl
                        font-bold
                        text-pink-600
                    ">
            🎂 Birthday Surprise Coming Soon 🎂
          </h1>


          <p className="
                        mt-4
                        text-gray-600
                        text-lg
                    ">
            The surprise will open on 18 July ❤️
          </p>



          {/* Countdown */}

          <div className="
                        mt-8
                        flex
                        justify-center
                        gap-4
                    ">


            <TimeBox
              value={timeLeft.hours}
              label="Hours"
            />


            <TimeBox
              value={timeLeft.minutes}
              label="Minutes"
            />


            <TimeBox
              value={timeLeft.seconds}
              label="Seconds"
            />

          </div>


        </div>

      </div>

    );
  }


  return <AppRouter />;

}



function TimeBox({ value, label }) {

  return (

    <div className="
            bg-white
            shadow-xl
            rounded-2xl
            px-5
            py-4
            min-w-[80px]
        ">

      <h2 className="
                text-3xl
                font-bold
                text-pink-600
            ">
        {String(value).padStart(2, "0")}
      </h2>


      <p className="
                text-gray-500
                text-sm
            ">
        {label}
      </p>

    </div>

  );

}


export default App;