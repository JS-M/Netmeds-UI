import { Carousel, CarouselItem } from "react-bootstrap";
import "../index.css";

const Brand = (props) => {
  return (
    <section style={{ width: "98%" }}>
      <Carousel interval={null}>
        <Carousel.Item>
          <section className="brand">
            {props.brands.map((slides) => {
              return (
                <a
                  href=""
                  //   className="brandCards"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "black",
                    fontFamily: "Lato",
                    fontWeight: "600",
                  }}
                >
                  <div>
                    <img src={slides.Img1} alt="" />
                    <p>{slides.Title1}</p>
                    <h6>{slides.Desc1}</h6>
                  </div>
                  <div>
                    <img src={slides.Img2} alt="" />
                    <p>{slides.Title2}</p>
                    <h6>{slides.Desc2}</h6>
                  </div>
                  <div>
                    <img src={slides.Img3} alt="" />
                    <p>{slides.Title3}</p>
                    <h6>{slides.Desc3}</h6>
                  </div>
                  <div>
                    <img src={slides.Img4} alt="" />
                    <p>{slides.Title4}</p>
                    <h6>{slides.Desc4}</h6>
                  </div>
                  <div>
                    <img src={slides.Img5} alt="" />
                    <p>{slides.Title5}</p>
                    <h6>{slides.Desc5}</h6>
                  </div>
                </a>
              );
            })}
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="brand">
            {props.brands.map((slides) => {
              return (
                <a
                  href=""
                  //   className="brandCards"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "black",
                    fontFamily: "Lato",
                    fontWeight: "600",
                  }}
                >
                  <div>
                    <img src={slides.Img6} alt="" />
                    <p>{slides.Title6}</p>
                    <h6>{slides.Desc6}</h6>
                  </div>
                  <div>
                    <img src={slides.Img7} alt="" />
                    <p>{slides.Title7}</p>
                    <h6>{slides.Desc7}</h6>
                  </div>
                  <div>
                    <img src={slides.Img8} alt="" />
                    <p>{slides.Title8}</p>
                    <h6>{slides.Desc8}</h6>
                  </div>
                  <div>
                    <img src={slides.Img9} alt="" />
                    <p>{slides.Title9}</p>
                    <h6>{slides.Desc9}</h6>
                  </div>
                  <div>
                    <img src={slides.Img10} alt="" />
                    <p>{slides.Title10}</p>
                    <h6>{slides.Desc10}</h6>
                  </div>
                </a>
              );
            })}
          </section>
        </Carousel.Item>
        {/* 
        <CarouselItem>
          <section className="trending">
            {props.slide.map((slides) => {
              return (
                <a href="">
                  <img src={slides.Img4} alt="" />
                  <img src={slides.Img5} alt="" />
                  <img src={slides.Img6} alt="" />
                </a>
              );
            })}
          </section>
        </CarouselItem> */}
      </Carousel>
    </section>
  );
};

export default Brand;
