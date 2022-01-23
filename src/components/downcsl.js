const Downcsl = () => {
  return (
    <div className="downcsl">
      <a href="">
        <span>
          <img
            style={{ height: "4vw", width: "3.9vw", margin: "1vw" }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"
            alt=""
          />
        </span>
        <span className="downcslspan">
          <span> Order Medicine</span>
          <div>Save Upto 60% off</div>
        </span>
      </a>
      <a href="">
        <span>
          <img
            style={{ height: "4vw", width: "3.9vw", margin: "1vw" }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"
            alt=""
          />
        </span>
        <span className="downcslspan">
          <span> Beauty</span>
          <div>Save Upto 40% off</div>
        </span>
      </a>

      <a href="">
        <span>
          <img
            style={{ height: "4vw", width: "3.9vw", margin: "1vw" }}
            className="imag2"
            src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"
            alt=""
          />
        </span>
        <span className="downcslspan">
          <span> Wellness</span>
          <div>Flat 15% off</div>
        </span>
      </a>
    </div>
  );
};

export default Downcsl;
