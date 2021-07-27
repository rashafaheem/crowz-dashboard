import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { palette } from "@material-ui/system";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { blueGrey } from "@material-ui/core/colors";
import { colors } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: blueGrey,
  },
  drawerPaper: {
    width: drawerWidth,
    background: blueGrey,
  },
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="sidear">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <div>
            <img
              className="logo"
              src="https://assets.powertofly.com/medium/c0fd8bd600fb43e18ddde73abd86c071.jpeg"
            ></img>
            <h3 className="crowz">Crowz</h3>
          </div>
          <br />
          <br />
          <div className="profile">
            <img
              className="robertPic"
              src="https://cdn4.vectorstock.com/i/1000x1000/25/68/executive-businessman-profile-isolated-icon-vector-9692568.jpg"
            ></img>
            <h2 className="robertName">Robert Grant</h2>
            <p className="designation">Marketing Director</p>
          </div>
          <List>
            {["Dashboard", "Insights", "Reports", "Comments", "Channels"].map(
              (text) => (
                <ListItem className="button" button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <br />
          <div>
            <ExitToAppIcon className="logoutIcon" />
            <p className="logoutText">Logout</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Sidebar;
