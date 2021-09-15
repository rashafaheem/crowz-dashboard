import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "50%",
    backgroundColor: "rgb(206, 67, 32)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(177, 47, 24)",
      color: "white",
    },
  },
}));

function UpgradeCard() {
  const classes = useStyles();
  return (
    <div className="upCard">
      <Card
        style={{ backgroundColor: "rgb(233, 220, 220)", borderRadius: "20px" }}
        className="card"
      >
        <CardContent className="cardContent">
          <p className="upgrade">
            Upgrade
            <span className="yourCrowd">
              {" "}
              Your <br /> Crowd
            </span>
          </p>
          <p className="sub">Pro plan for better results</p>
        </CardContent>
        <CardActions className="now">
          <Button className={classes.button} size="large" variant="contained">
            Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UpgradeCard;
