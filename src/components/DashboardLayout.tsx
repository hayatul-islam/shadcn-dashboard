import { ContextProvider } from "@/context/Context";
import { useContext } from "react";
import LeftSidebar from "./LeftSidebar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: any) => {
  const { isMenuOpen }: any = useContext(ContextProvider);
  return (
    <div className="flex bg-white">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {isMenuOpen && (
        <div className="relative md:hidden">
          <div className="fixed inset-0 bg-black z-[999] opacity-70" />
          <div
            className={`absolute top-0 bg-white z-[999] duration-500 delay-100  ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="flex ">
              <div className="h-[100vh]">
                <Sidebar />
              </div>
              <div
                style={{ width: "240px" }}
                className="h-[100vh] overflow-y-auto no-scrollbar overflow-hidden "
              >
                <LeftSidebar />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-[100vh] overflow-y-auto ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
