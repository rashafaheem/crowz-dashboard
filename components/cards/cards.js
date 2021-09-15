import SmallCards from "./smallCards.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Grid } from "@material-ui/core";

function Cards() {
  return (
    <div className="cards">
      <Grid
        container
        style={{ backgroundColor: "rgb(220, 235, 238)" }}
        className="bigCard"
      >
        <Grid item xs={12} md={2}>
          <div className="cardContentsDiv">
            <h3 className="channels">Channels</h3>
            <p className="sub">
              Your channels statistics for
              <span className="week"> 1 week </span>
              period.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            className="dlogo"
            src="https://iconape.com/wp-content/files/yd/55144/svg/dribbble-5.svg"
          />
          <SmallCards
            // src="https://iconape.com/wp-content/files/yd/55144/svg/dribbble-5.svg"
            media="Dribble"
            userName="@grantart"
            growth="+2%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            className="blogo"
            src="https://www.freeiconspng.com/thumbs/behance-icon/behance-minimalist-icon-21.png"
          />
          <SmallCards
            // src="https://www.freeiconspng.com/thumbs/behance-icon/behance-minimalist-icon-21.png"
            media="Bahance"
            userName="@grantart"
            growth="-7%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            className="ilogo"
            src="https://www.pngitem.com/pimgs/m/602-6027464_instagram-logo-yellow-color-png-download-bitcoin-cash.png"
          />
          <SmallCards
            // src="https://www.pngitem.com/pimgs/m/602-6027464_instagram-logo-yellow-color-png-download-bitcoin-cash.png"
            media="Instagram"
            userName="@robertgrant"
            growth="+4%"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <img
            className="plogo"
            src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png"
          />
          <SmallCards
            // src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png"
            media="Pinterest"
            userName="@grantart"
            growth="+2%"
          />
        </Grid>
        <div className="smallCard">
          <Grid item xs={12} md={2}>
            <a className="link">
              <Card
                className="dribbleCard"
                elevation={0}
                style={{ borderRadius: "20px" }}
              >
                <CardContent className="stats">
                  <h3 className="h3stats">
                    Full <br />
                    Stats
                  </h3>
                  <PlayCircleFilledIcon className="statsIcon" />
                </CardContent>
              </Card>
            </a>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Cards;
