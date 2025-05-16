import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import Button from "./Button";

export default function PageNav() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          ) : (
            <Button onClick={handleLogout} type="primary">
              Logout
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}
