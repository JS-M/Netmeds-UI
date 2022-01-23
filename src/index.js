import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Dropdown } from "react-bootstrap";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Csl from "./components/carousel";
import Downcsl from "./components/downcsl";
import Payment from "./components/payment";
import Trending from "./components/trendingggg";

import Shopcat from "./components/shopbycrtynew";
import Percare from "./components/personalcare";
import Mgroom from "./components/Mengrooming";

import Brand from "./components/brands";
import Health from "./components/HealthConcern";
import Footer from "./components/footer";

const slide = [
  {
    Img1: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1637564004_Mini-banner_calpol.jpg",
    Img2: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1642095119_Mini-Banner_web.jpg",
    Img3: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1642701643_cenvitan_436_x_224-web-change-Neel.jpg",
  },
  {
    Img4: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1642688003_Kapiva_web_1.jpg",
    Img5: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1634972793_Netmeds-masks_Mini_Banner__Web.jpg",
    Img6: "https://www.netmeds.com/images/cms/aw_rbslider/slides/1642680513_Just-Vedic_web.jpg",
  },
];

const brnds = [
  {
    Img1: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dettol.jpg?v=8",
    Img2: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=8",
    Img3: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=8",
    Img4: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/mamaearth.jpg?v=8",
    Img5: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/origin-nutrition.jpg?v=8",
    Title1: "Dettol",
    Title2: "Dabur",
    Title3: "Himalaya",
    Title4: "Mama-Earth",
    Title5: "Origin-Nutrition",
    Desc1: "UP TO 15% OFF",
    Desc2: "UP TO 25% OFF",
    Desc3: "UP TO 20% OFF",
    Desc4: "UP TO 10% OFF",
    Desc5: "UP TO 39% OFF",
  },
  {
    Img6: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/hashmi.jpg?v=8",
    Img7: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/skin-elements.jpg?v=8",
    Img8: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-vaidyas.jpg?v=8",
    Img9: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=8",
    Img10:
      "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=8",
    Title6: "Hashmi",
    Title7: "Skin Elements",
    Title8: "Dr-Vaidyas",
    Title9: "Dabur",
    Title10: "Acu-check",
    Desc6: "UP TO 50% OFF",
    Desc7: "UP TO 63% OFF",
    Desc8: "UP TO 30% OFF",
    Desc9: "UP TO 25% OFF",
    Desc10: "UP TO 20% OFF",
  },
];

const focus = [
  {
    Img1: "https://www.netmeds.com/images/category/3087/thumb/feminine_hygeine_0.jpg",
    Img2: "https://www.netmeds.com/images/category/v1/525/thumb/body_care_200.jpg",
    Img3: "https://www.netmeds.com/images/category/482/thumb/ayurvedic_0.jpg",
    Img4: "https://www.netmeds.com/images/category/482/thumb/ayurvedic_0.jpg",
    Img5: "https://www.netmeds.com/images/category/3216/thumb/sports_supplements_0.jpg",
    Title1: "Femenine Hygiene",
    Title2: "Body Care",
    Title3: "Ayurvedic",
    Title4: "Orthopaedics",
    Title5: "Sports Supplements",
    Desc1: "UP TO 50% OFF",
    Desc2: "UP TO 60% OFF",
    Desc3: "UP TO 76% OFF",
    Desc4: "UP TO 83% OFF",
    Desc5: "UP TO 60% OFF",
  },
  {
    Img6: "https://www.netmeds.com/images/category/3087/thumb/feminine_hygeine_0.jpg",
    Img7: "https://www.netmeds.com/images/category/v1/525/thumb/body_care_200.jpg",
    Img8: "https://www.netmeds.com/images/category/482/thumb/ayurvedic_0.jpg",
    Img9: "https://www.netmeds.com/images/category/482/thumb/ayurvedic_0.jpg",
    Img10:
      "https://www.netmeds.com/images/category/3216/thumb/sports_supplements_0.jpg",
    Title6: "Femenine Hygiene",
    Title7: "Body Care",
    Title8: "Ayurvedic",
    Title9: "Orthopaedics",
    Title10: "Sports Supplements",
    Desc6: "UP TO 50% OFF",
    Desc7: "UP TO 60% OFF",
    Desc8: "UP TO 76% OFF",
    Desc9: "UP TO 83% OFF",
    Desc10: "UP TO 60% OFF",
  },
];

const Start = () => {
  return (
    <section>
      <Navbar />

      <Csl />
      <Downcsl />
      <Payment />

      <Trending slide={slide} />
      <Shopcat />
      <Mgroom />
      <h4 style={{ fontFamily: "Lato", fontWeight: "800", marginLeft: "1vw" }}>
        Top Brands
      </h4>
      <Brand brands={brnds} />
      <Percare />
      <h4 style={{ fontFamily: "Lato", fontWeight: "800", marginLeft: "1vw" }}>
        Categories In Focus
      </h4>
      <Brand brands={focus} />

      <Health />
      <Footer />
    </section>
  );
};

const Navbar = () => {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  let re = document.getElementById("myBtn");
  return (
    <section>
      <section className="navi">
        <div className="imag ">
          <img
            className="m-4"
            src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg"
            alt=""
          />
        </div>
        <div className="box m-4 p-1">
          <div className="m-2">
            <span className="deliverto">Deliver to</span>

            <span className="deliverto" style={{ fontWeight: "bold" }}>
              &nbsp; 110002
              <KeyboardArrowDownIcon style={{ fontSize: "1vw" }} />
            </span>
          </div>
          <div>
            <input
              type="text"
              className="search m-2"
              placeholder="    Search for medicine and wellness products..."
              // size={50}
            />
          </div>
        </div>
        <div className="rx">
          <ReceiptLongIcon style={{ height: "1.5vw", width: "1.5vw" }} />
          <span> Upload Rx</span>
        </div>
        <div className="rx">
          <ShoppingCartIcon style={{ height: "1.5vw", width: "1.5vw" }} />
          <span> Cart</span>
        </div>
        <div className="rx">
          <AccountCircleIcon style={{ height: "1.5vw", width: "1.5vw" }} />
          <span> Sign in / Sign up</span>
        </div>
      </section>
      <section className="navi2">
        <div className="yy">
          <img
            style={{ width: "2.5vw", height: "2.5vw" }}
            src="https://www.netmeds.com/assets/version1640711336/gloryweb/images/icons/medicine.svg"
            alt=""
          />

          <Dropdownnavi2 Title=" Medicine" />
        </div>
        <div>
          <img
            style={{ width: "2.5vw", height: "2.5vw" }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
            alt=""
          />
          <span className="colors"> Wellness</span>
        </div>
        <div>
          <img
            style={{ width: "2.5vw", height: "2.5vw" }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg"
            alt=""
          />
          <span className="colors"> Lab Tests</span>
        </div>
        <div>
          <img
            style={{ width: "2.5vw", height: "2.5vw" }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
            alt=""
          />

          <Dropdownnavi2 Title=" Beauty" />
        </div>
        <div>
          <img
            style={{ width: "2.5vw", height: "2.5vw" }}
            src="https://www.netmeds.com/assets/version1640711336/gloryweb/images/icons/health-library.svg"
            alt=""
          />

          <Dropdownnavi2 Title=" Health Cover" />
        </div>
      </section>
      <section className="navi3">
        <ul>
          <li style={{ paddingLeft: "12.5vw" }}>
            <a href="#">COVID Essentials</a>
          </li>
          <li>
            <a href="#">Diabetes</a>
          </li>
          <li>
            <a href="#">Eyewear</a>
          </li>
          <li>
            <a href="#">Ayush</a>
          </li>
          <li>
            <a href="#">Fitness</a>
          </li>
          <li>
            <a href="#">Mom & Baby</a>
          </li>
          <li>
            <a href="#">Devices</a>
          </li>
          <li>
            <a href="#">Surgical</a>
          </li>
          <li>
            <a href="#">Sexual Wellness</a>
          </li>
          <li>
            <a href="#">Treatments</a>
          </li>
        </ul>
      </section>
    </section>
  );
};

const Dropdownnavi2 = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  //const { Title } = props;
  return (
    <>
      <Dropdown
        onMouseLeave={() => setShowDropdown(false)}
        onMouseOver={() => setShowDropdown(true)}
        style={{ display: "inline" }}
      >
        <Dropdown.Toggle id="dropdown-basic-button">
          {props.Title}
        </Dropdown.Toggle>

        <Dropdown.Menu show={showDropdown}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

ReactDOM.render(<Start />, document.getElementById("root"));
