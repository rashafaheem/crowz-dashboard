import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Cards() {
  return (
    <div>
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
        </Card>
      </div>
      <div className="smallCards">
        <Card className="dribbleCard">
          <CardContent className="dContent">
            <h4 className="dribble">Dribble</h4>
            <br />
            <p className="dtag">@grantart</p>
            <br />
            <h2 className="dpercent">+2%</h2>
          </CardContent>
        </Card>
        <Card className="dribbleCard">
          <CardContent className="dContent">
            <h4 className="dribble">Bahance</h4>
            <br />
            <p className="dtag">@grantart</p>
            <br />
            <h2 className="dpercent">-7%</h2>
          </CardContent>
        </Card>
        <Card className="dribbleCard">
          <CardContent className="dContent">
            <h4 className="dribble">Instagram</h4>
            <br />
            <p className="dtag">@robertgrant</p>
            <br />
            <h2 className="dpercent">+4%</h2>
          </CardContent>
        </Card>
        <Card className="dribbleCard">
          <CardContent className="dContent">
            <h4 className="dribble">Pinterest</h4>
            <br />
            <p className="dtag">@robertgrant</p>
            <br />
            <h2 className="dpercent">+2%</h2>
          </CardContent>
        </Card>
        <Card className="dribbleCard">
          <CardContent className="stats">
            <h3 className="h3stats">
              Full <br />
              Stats
            </h3>
            <PlayCircleFilledIcon className="statsIcon" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
