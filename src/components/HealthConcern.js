import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Health = () => {
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
        Health Concerns
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
          image="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1"
          title="Lung Care"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1"
          title="Weight Care"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1"
          title="Women care"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1"
          title="Bone And Joint Pain"
        />
        <ActionAreaCard
          image="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1"
          title="Cold And Fever"
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

export default Health;
