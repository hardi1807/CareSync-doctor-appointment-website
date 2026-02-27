import React from "react";
import hero from "../assets/hero.png";

const Header = () => {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap 
    bg-blue-400 rounded-lg px-8 md:px-10 lg:px-20   "
    >
      {/* left side  */}

      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 md:py-[10vw] py-10 m-auto md:mb[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div>
          <p className="text-white text-sm font-light ">
            Simply browse through our extensive list of trustable doctors,
            <br  className="hidden sm:block"/>
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className="bg-white rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300 p-3" href="#speciality">Book appointment</a>
      </div>

      {/* right  side  */}

      <div className="md:w-1/2 relative ">
        <img className="md:absolute w-full bottom-0 h-auto rounded-lg" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Header;
