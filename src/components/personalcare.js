// import "../index.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Percare = () => {
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
        Personal Care
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
          image="https://www.netmeds.com/images/category/v1/525/thumb/body_care_200.jpg"
          title="Body Care"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_0.jpg"
          title="Mom & Baby"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/653/thumb/skin_treatment.jpg"
          title="Skin Treatment"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/3495/thumb/face-wash-cleansers_1.jpg"
          title="Face Wash Cleansers"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/category/v1/3566/thumb/shower_gels_body_wash.jpg"
          title="Shower Gels & Body Wash"
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
          width="200"
          style={{
            width: "13vw",
            marginLeft: "1vw",
          }}
          image={props.image}
          alt="green iguana"
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

export default Percare;
