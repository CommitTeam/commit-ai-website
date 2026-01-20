
import React from 'react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="flex gap-6 items-center">
      {/* First Phone - Home Screen */}
      <div className="relative w-[280px] h-[560px] bg-black border-[8px] border-black rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:-rotate-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-50"></div>

        {/* Home Screen Image */}
        <img
          src="/HomeScreen .png"
          alt="COMO App Home Screen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second Phone - Workout Screen (hidden on mobile) */}
      <div className="hidden md:block relative w-[280px] h-[560px] bg-black border-[8px] border-black rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:rotate-2 -mt-12">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-50"></div>

        {/* Workout Image */}
        <img
          src="/Workout.jpg"
          alt="COMO App Workout"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
