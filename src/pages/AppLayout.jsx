import React from "react";
import SideBar from "../components/Sidebar";
import styles from "../pages/AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";

export default function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}
