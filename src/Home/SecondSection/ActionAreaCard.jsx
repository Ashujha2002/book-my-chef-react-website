import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import styles from "./ActionAreaCard.module.css";

export default function ActionAreaCard({
  image,
  title,
  description,
  bgColor,
  colors,
}) {
  return (
    <Card className={styles.card} style={{ backgroundColor: bgColor }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={styles.cardMedia}
          image={image}
          alt={title}
        />
        <CardContent className={styles.cardContent} style={{ color: colors }}>
          <Typography
            className={styles.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className={styles.description}
            variant="body2"
            style={{ color: colors, backgroundColor: bgColor }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
