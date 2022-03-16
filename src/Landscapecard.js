import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import "./stylehome.css"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {

    [theme.breakpoints.down(1024)]: { width: 465, height: 280 },

  }
}));
const useMobile = makeStyles((theme) => ({
  root: {

    [theme.breakpoints.down(361)]: { flexDirection: "column" },

  }
}));

export default function Landscapecard(props) {
  const classes = useStyles();
  const classe = useMobile();
  return (
    <Card className={classes.root} sx={{ maxWidth: 650, margin: 2 }}>
      <Link to={`/Category/${props.type}/Article/${props.id}`} style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea className={classe.root} sx={{ display: "flex", flexDirection: "" }}>
          <CardMedia style={{ width: 280 }}
            component="img"
            height="200"
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.subhead}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
            <Typography sx={{ margin: 1, opacity: 0.9, display: "inline-block" }} variant="p" gutterBottom component="div">
              {props.type}
            </Typography>
            <Typography sx={{ opacity: 0.5, display: "inline-block" }} variant="subtitle2" gutterBottom component="div">
              {" / " + props.created}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}