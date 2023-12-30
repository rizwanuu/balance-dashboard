import "./App.css";
import DashboardSideBar from "./layouts/dashboard/DashboardSideBar";
import Statistics from "./pages/statistics";

function App() {
  return (
    <>
      <div className="flex">
        <DashboardSideBar />
        <Statistics />
      </div>
    </>
  );
}

export default App;
