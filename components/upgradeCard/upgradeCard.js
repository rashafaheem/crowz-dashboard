// import card from "./card.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function UpgradeCard() {
  return (
    <div className="upCard">
      {/* <img src={card} alt="" /> */}
      <Card style={{ backgroundColor: "rgb(233, 220, 220)" }} className="card">
        <CardContent className="cardContent"></CardContent>
        <CardActions className="cardContent">
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default UpgradeCard;
