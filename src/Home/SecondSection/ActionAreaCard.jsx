import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { colors } from "@mui/material";

export default function ActionAreaCard({
  image,
  title,
  description,
  bgColor,
  colors,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: 10,
        width: "100%",
        backgroundColor: bgColor,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={title} />
        <CardContent sx={{ color: colors }}>
          <Typography
            sx={{ color: "#F70000 ", fontFamily: "Julius Sans One" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: colors,
              fontFamily: "Roboto",
              fontSize: 15,
              fontWeight: 500,
              backgroundColor: bgColor,
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
