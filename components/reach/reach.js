import Divider from "@material-ui/core/Divider";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function Reach() {
  return (
    <div className="">
      <div className="info">
        <p>Views</p>
        <ArrowUpwardIcon className="arrow1" />
        <Divider />
        <h2>27,6m</h2>
      </div>
      <div className="info">
        <p>Followers</p>
        <ArrowDownwardIcon className="arrow2" />
        <Divider />
        <h2>219,3k</h2>
      </div>
      <div className="info">
        <p>Reposts</p>
        <ArrowUpwardIcon className="arrow3" />
        <Divider />
        <h2>1,5k</h2>
      </div>
    </div>
  );
}

export default Reach;
