import { Carousel, CarouselItem } from "react-bootstrap";

const Trending = (props) => {
  return (
    <section style={{ width: "98%" }}>
      <Carousel interval={null}>
        <Carousel.Item>
          <section className="trending">
            {props.slide.map((slides) => {
              return (
                <a href="">
                  <img src={slides.Img1} alt="" />

                  <img src={slides.Img2} alt="" />
                  <img src={slides.Img3} alt="" />
                </a>
              );
            })}
          </section>
        </Carousel.Item>

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
        </CarouselItem>
      </Carousel>
    </section>
  );
};

export default Trending;
