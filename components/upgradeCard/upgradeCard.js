import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function UpgradeCard() {
  return (
    <div className="upCard">
      <Card style={{ backgroundColor: "rgb(233, 220, 220)" }} className="card">
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
          <Button
            className="button"
            size="large"
            variant="contained"
            color="secondary"
          >
            Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default UpgradeCard;
