import PropsPer from "./propsPer.js";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Performers(props) {
  return (
    <div className="performers">
      <h2 className="h2">Top Performers</h2>
      <br />
      <br />
      <div className="top">
        <PropsPer
          src="https://www.pngkey.com/png/detail/203-2037403_flat-faces-icons-circle-girl-flat-icon-png.png"
          name="Valy Antonova"
          tag="@valyantonova"
          percent="39%"
        />
        <PropsPer
          src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg"
          name="Mark Noil"
          tag="@marknoil"
          percent="18%"
        />
        <PropsPer
          src="https://www.auditionform.in/wp-content/uploads/2020/09/User-4.png"
          name="Nenci Villy"
          tag="@nencivilly"
          percent="25%"
        />
      </div>
      <a className="link">
        <p className="view">View More</p>
        <ArrowForwardIosIcon className="icon" />
      </a>
    </div>
  );
}

export default Performers;
