import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-[100vh] overflow-y-auto">
        <Header />
        <div className="px-8 py-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
