import DashboardLayout from "./components/DashboardLayout";
import TableCom from "./components/Table";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <TableHeader />
        <TableCom />
      </div>
    </DashboardLayout>
  );
}

export default App;
