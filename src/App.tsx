import DashboardLayout from "./components/DashboardLayout";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import TableCom from "./components/Table";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <DashboardLayout>
      <div className="flex ">
        <div
          style={{ width: "284px" }}
          className="h-[100vh] overflow-y-auto no-scrollbar"
        >
          <LeftSidebar />
        </div>
        <div className="space-y-6 w-full h-[100vh] overflow-y-auto no-scrollbar">
          <Header />
          <div className="w-full px-8 space-y-6">
            <TableHeader />
            <TableCom />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
