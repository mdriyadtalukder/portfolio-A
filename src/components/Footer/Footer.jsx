import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
          <a href="https://www.facebook.com/anonna.akhy.1?mibextid=ZbWKwL">  <Facebook color="white" size={"3rem"} /></a>

          <a href="https://github.com/Anonnaakhy54321?fbclid=IwAR0T445OlzByDh_8-bgLzQskmPyaLCraXaoj_ajqFwbZmoCdXwlUvZKsMvg"> <Gitub color="white" size={"3rem"} /></a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
