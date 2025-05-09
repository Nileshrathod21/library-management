import React from "react";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

const TopNavbar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // clean up on unmount
  }, []);

  const time = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = currentDate.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const currentDate = new Date();
  // const time = currentDate.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  // const date = currentDate.toLocaleDateString([], {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  return (
    <div className="sticky top-0 w-full bg-white shadow-md px-6 py-3 flex justify-between items-center z-50 rounded-none ">
      {/* Left Section: Profile */}
      <div className="flex items-center gap-3">
        <UserCircleIcon className="h-10 w-10 text-gray-600" />
        <div>
          <div className="font-semibold text-gray-800">John Doe</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <div className="font-semibold text-gray-800">{time}</div>
          <div className="text-sm text-gray-700">{date}</div>
        </div>
        <div className="border-l-2 border-black h-10 "></div>
        <Cog6ToothIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNavbar;
