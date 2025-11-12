import footerContact from "../../api/footerApi.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className="footer-Contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright © 2025. All Right Reserved.{" "}
                <NavLink to="/"></NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Social</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};