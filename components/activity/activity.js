import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    width: 150,
    float: "right",
  },
}));

function Activity() {
  const classes = useStyles();

  return (
    <div className="activity">
      <Paper elevation={0}>
        <h2 className="h2">Activity</h2>
        <TextField
          id="date"
          type="date"
          defaultValue="2021-02-08"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <p className="p">Data updates every 3 hours</p>
      </Paper>
    </div>
  );
}

export default Activity;
