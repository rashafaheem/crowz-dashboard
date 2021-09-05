import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function SmallCards(props) {
  return (
    <div className="smallCard">
      {/* <Grid item xs={12} lg={1}> */}
      <Card className="dribbleCard">
        <CardContent className="dContent">
          {/* <img className="dlogo" src={props.src} /> */}
          <h4 className="dribble">{props.media}</h4>
          <br />
          <p className="dtag">{props.userName}</p>
          <br />
          <h2 className="dpercent">{props.growth}</h2>
        </CardContent>
      </Card>
      {/* </Grid> */}
    </div>
  );
}

export default SmallCards;
