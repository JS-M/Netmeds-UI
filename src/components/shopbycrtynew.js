import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import "../index.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Shopcat = () => {
  //   const image = [
  //     "https://www.netmeds.com/images/category/3055/thumb/covid-essentials_0.jpg",
  //     "https://www.netmeds.com/images/category/481/thumb/ayush_0.jpg",
  //     "https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_0.jpg",
  //     "https://www.netmeds.com/images/category/665/thumb/devices_0.jpg",
  //     "https://www.netmeds.com/images/category/500/thumb/fitness_0.jpg",
  //   ];
  return (
    <section>
      <h4
        style={{
          // position: "absolute",
          // left: "2vw",
          fontFamily: "Lato",
          fontWeight: "800",
          margin: "1vw",
        }}
      >
        Shop By Category
        <a
          href=""
          style={{
            color: "#EF4281",
            fontSize: "1vw",
            float: "right",
            textDecoration: "none",
            marginRight: "1.5vw",
          }}
        >
          View All
          <KeyboardArrowRightIcon style={{ height: "1vw" }} />
        </a>
      </h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          margin: "2vw",
          marginLeft: "5vw",
        }}
      >
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/3055/thumb/covid-essentials_0.jpg"
          title="Covid Essentials"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/481/thumb/ayush_0.jpg"
          title="Ayush"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_0.jpg"
          title="Mom & Baby"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/665/thumb/devices_0.jpg"
          title="Devices"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/500/thumb/fitness_0.jpg"
          title="Fitness"
        />
      </div>
    </section>
  );
};

function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="100"
          image={props.image}
          alt="green iguana"
          style={{
            width: "13vw",
            marginLeft: "1vw",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            style={{
              fontSize: "1vw",
              textAlign: "center",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Shopcat;
