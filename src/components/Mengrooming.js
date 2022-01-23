import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import "../index.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Mgroom = () => {
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
        Mens's Grooming
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
          image="https://www.netmeds.com/images/category/v1/3420/thumb/shaving_200.jpg?v=1"
          title="Covid Essentials"
          offer="UP TO 31% OFF"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_0.jpg?v=1"
          title="Ayush"
          offer="UP TO 46% OFF"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_200.jpg?v=1"
          title="Mom & Baby"
          offer="UP TO 25% OFF"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_0.jpg?v=1"
          title="Devices"
          offer="UP TO 20% OFF"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_200.jpg?v=1"
          title="Fitness"
          offer="UP TO 23% OFF"
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
          <Typography
            gutterBottom
            component="div"
            style={{
              fontSize: "1vw",
              textAlign: "center",
              fontFamily: "Lato",
              fontWeight: "600",
              color: "#5ba41c",
              marginTop: "1.1vw",
            }}
          >
            {props.offer}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Mgroom;
