import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function SmallCards(props) {
  return (
    <div className="smallCard">
      <Card className="dribbleCard" style={{ borderRadius: "20px" }}>
        <CardContent className="dContent">
          <h4 className="dribble">{props.media}</h4>
          <br />
          <p className="dtag">{props.userName}</p>
          <br />
          <h2 className="dpercent">{props.growth}</h2>
        </CardContent>
      </Card>
    </div>
  );
}

export default SmallCards;
