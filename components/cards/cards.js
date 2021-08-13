import SmallCards from "./smallCards.js";
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
        <SmallCards media="Dribble" userName="@grantart" growth="+2%" />
        <SmallCards media="Bahance" userName="@grantart" growth="-7%" />
        <SmallCards media="Instagram" userName="@robertgrant" growth="+4%" />
        <SmallCards media="Pinterest" userName="@grantart" growth="+2%" />
        <a className="link">
          <Card className="dribbleCard">
            <CardContent className="stats">
              <h3 className="h3stats">
                Full <br />
                Stats
              </h3>
              <PlayCircleFilledIcon className="statsIcon" />
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="logos">
        <img
          className="dlogo"
          src="https://iconape.com/wp-content/files/yd/55144/svg/dribbble-5.svg"
        />
        <img
          className="blogo"
          src="https://www.freeiconspng.com/thumbs/behance-icon/behance-minimalist-icon-21.png"
        />
        <img
          className="ilogo"
          src="https://www.pngitem.com/pimgs/m/602-6027464_instagram-logo-yellow-color-png-download-bitcoin-cash.png"
        />
        <img
          className="plogo"
          src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png"
        />
      </div>
    </div>
  );
}

export default Cards;
