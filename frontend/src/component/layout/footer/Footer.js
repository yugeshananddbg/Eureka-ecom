import React from "react";
import playstore from "../../../images/android.png";
import appstore from "../../../images/ios.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="Playstore"></img>
        <img src={appstore} alt="Appstore"></img>
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Yugesh Anand</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/yugeshanand">Instagram</a>
        <a href="http://twitter.com/anandyugesh">Twitter</a>
        <a href="http://facebook.com/yugeshanand">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
