import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-customGray h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* <div>
          <Sidebar />
        </div> */}
        <div className="flex-1 bg-customGray overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
