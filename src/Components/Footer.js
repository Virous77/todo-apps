import React from "react";
import "./Main.css";

const Footer = ({ checked }) => {
  const today = new Date();
  return (
    <footer className="footer">
      <p className="list">
        {checked} List {checked <= 1 ? "item" : "items"}
      </p>
      <p className="copy">Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
