import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function Cards() {
  return (
    <div className="card">
      <Card
        style={{ backgroundColor: "rgb(220, 235, 238)" }}
        className="bigCard"
      >
        <CardContent className="cardContent">
          <h3 className="channels">Channels</h3>
          <p className="sub">
            Your channels <br /> statistics for
            <span className="week">
              {" "}
              1 week <br />
            </span>
            period.
          </p>
        </CardContent>
        <CardActions className="now"></CardActions>
      </Card>
    </div>
  );
}

export default Cards;
