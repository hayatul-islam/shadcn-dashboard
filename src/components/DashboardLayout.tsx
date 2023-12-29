import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-[100vh] overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
