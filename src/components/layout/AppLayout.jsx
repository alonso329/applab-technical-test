import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import MenuBar from "../menubar/menubar";
import "./appLayout.css";

export default function AppLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <MenuBar />
      <Outlet />
    </div>
  );
}
