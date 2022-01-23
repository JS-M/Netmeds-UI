import { width } from "@mui/system";
import { Carousel } from "react-bootstrap";
import "../index.css";
const Csl = () => {
  return (
    <>
      <Carousel
        style={{
          width: "99%",
          alignItems: "center",
          textAlign: "center",
          alignContent: "center",
          //   height: "28vw",
          paddingLeft: "1%",
        }}
        indicators={true}
        interval={5000}
      >
        <Carousel.Item>
          <a href="" title="upto 90% off">
            <img
              className="d-block w-100"
              style={{
                //   alignContent: "center",
                //   textAlign: "center",
                height: "21vw",
              }}
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1636717038_Home_bannerma25.jpg"
              alt="First slide"
            />
          </a>

          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* <Carousel.Item
          style={{
            display: "flex",
            gap: "3vw",
            backgroundColor: "black",
            width: "10vw",
          }}
        >
          <img
            style={{
              width: "300px",
              height: "300px",
            }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
            alt=""
          />
          <img
            style={{
              width: "300px",
              height: "300px",
            }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
            alt=""
          />
          <img
            style={{
              width: "300px",
              height: "300px",
            }}
            src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
            alt=""
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <a href="">
            <img
              style={{
                //   alignContent: "center",
                //   textAlign: "center",
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641911175_Web_Home_title_1680X320.jpg"
              alt="Second slide"
            />
          </a>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                //   alignContent: "center",
                //   textAlign: "center",
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641910749_Homevdsfgdfg.jpg"
              alt="Third slide"
            />
          </a>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641829832_Homebvbbbb.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641297083_homeweb.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1629294429_web_same_day.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641292856_jioweb.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="">
            <img
              style={{
                height: "21vw",
              }}
              className="d-block w-100"
              src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1624976484_Web_home.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Csl;
