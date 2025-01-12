import React, { useEffect, useContext } from "react";
import { ImStatsDots } from "react-icons/im";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center left-0 w-full py-[0.28rem] bg-white z-40 shadow-sm overflow-hidden">
      <div className="flex justify-start p-3 space-x-2">
        {/* <div className="px-0"> */}
        <ImStatsDots size={30} />
        <Link to={"/"} className="text-xl">
          Crimes Dashboard
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
