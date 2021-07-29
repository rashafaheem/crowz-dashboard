import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(233, 220, 220)",
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="sidear">
        <Drawer
          className="drawer"
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <div>
            <br />
            <img
              className="logo"
              src="https://assets.powertofly.com/medium/c0fd8bd600fb43e18ddde73abd86c071.jpeg"
            ></img>
            <h3 className="crowz">Crowz</h3>
          </div>
          <br />
          <div className="profile">
            <img
              className="robertPic"
              src="https://cdn4.vectorstock.com/i/1000x1000/25/68/executive-businessman-profile-isolated-icon-vector-9692568.jpg"
            ></img>
            <h2 className="robertName">Robert Grant</h2>
            <p className="designation">Marketing Director</p>
          </div>
          <br />
          <br />
          <div className="menues">
            <a className="menu">Dashboard</a>
            <br />
            <br />
            <a className="menu">Insights</a>
            <br />
            <br />
            <a className="menu">Reports</a>
            <br />
            <br />
            <a className="menu">Comments</a>
            <br />
            <br />
            <a className="menu">Channels</a>
          </div>
          <br />
          <br />
          <br />
          <div>
            <ExitToAppIcon className="logoutIcon" />
            <a className="logoutButton">Logout</a>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Sidebar;
