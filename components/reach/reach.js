import Divider from "@material-ui/core/Divider";

function Reach(props) {
  return (
    <div>
      <p>{props.title}</p>
      <Divider varient="inset" />
      <p>{props.reach}</p>
    </div>
  );
}

export default Reach;
