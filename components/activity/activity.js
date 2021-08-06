import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

function Activity() {
  const classes = useStyles();

  return (
    <div className="activity">
      <h2 className="h2">Activity</h2>
      <p className="p">Data updates every 3 hours</p>
      <TextField
        id="date"
        type="date"
        defaultValue="2021-02-08"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default Activity;
