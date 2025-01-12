import React from "react";

const Sidebar = () => {
  return (
    <div
      className={`max-w-[1640px] w-[300px] fixed h-lvh mx-auto flex justify-between shadow-lg bg-white top-[50px] transform -translate-x-full transition-transform duration-300 ease-in-out xl:static xl:translate-x-0 z-30`}
    >
      <div className="text-black w-full">
        <div className="mt-5 text-left"></div>
      </div>
    </div>
  );
};

export default Sidebar;
