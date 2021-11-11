import React from "react";
import "./Footer.css";
import visaImg from "../../../assets/Visa.png";
import masterCardImg from "../../../assets/MasterCard.png";
import maestroImg from "../../../assets/Maestro.png";
import americanExpressImg from "../../../assets/American-Express.png";
import PaypalImg from "../../../assets/PayPal.png";

const Footer = () => {
  // footer start
  return (
    <div className="footer-container">
      <div className="footer container p-5 mx-auto row mt-5">
        <div className="col-md-6 col-lg-3 col-12 ">
        <h1 className="logo">
            <span className="logo-main">
              <i className="fas fa-car fs-2 logo-main"></i>KAR
            </span>
            BOX
          </h1>
          <hr className="footer-hr" />
          <p className="footer-text pe-3">
            Along with 1000s of cars to choose from, you can apply for finance
            online and value your existing car all from the comfort of your
            favourite armchair In line with our commitment to treating customers
            fairly, you can find more information about Charles Hurst complaints
            policy here.
          </p>
          <div className="row pe-5">
            <div className="col-12 text-center mt-4">
              <ul className="icon list-unstyled d-flex ">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-facebook-messenger"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Quick Link</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Home</p>
          <p className="footer-text">About Us</p>
          <p className="footer-text">Collections</p>
          <p className="footer-text">Dashboard</p>
          <p className="footer-text">Login</p>
          <p className="footer-text">Contact</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Collections</h3>
          <hr className="footer-hr" />
          <p className="footer-text">GTX_1122 BOOST</p>
          <p className="footer-text">PORSCHE 718 BOXSTER/CAYMAN</p>
          <p className="footer-text">TOYOTA GR SUPRA</p>
          <p className="footer-text">MAZDA MX-5</p>
          <p className="footer-text">MCLAREN 720S</p>
          <p className="footer-text">FORD MUSTANG</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Book Collection</h3>
          <hr className="footer-hr" />
          <p className="footer-text">(1800) 574 9687</p>
          <p className="footer-text">65, Street, New Youk, MAC 5245</p>
          <p className="footer-text"> hi@karbox.com</p>
          <p className="footer-text">
            Contact us now for a quote about consultation ( Available 24/7 )
          </p>
        </div>

        <hr className="text-warning my-5" />
        <div className="row">
          <div className="col-lg-9 col-md-6 col-1"></div>
          <div className="col-lg-3 col-md-6 col-11 payment">
            <img src={visaImg} alt="" />
            <img src={masterCardImg} alt="" />
            <img src={maestroImg} alt="" />
            <img src={americanExpressImg} alt="" />
            <img src={PaypalImg} alt="" />
          </div>
        </div>

        <p className="footer-last-text text-center mt-5">
          © 2021 -Karbox. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
