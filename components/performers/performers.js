import PropsPer from "./propsPer.js";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Performers(props) {
  return (
    <div className="performers">
      <h2 className="h2">Top Performers</h2>
      <br />
      <br />
      <div className="top">
<<<<<<< HEAD
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
=======
        <img
          className="dp"
          src="https://www.pngkey.com/png/detail/203-2037403_flat-faces-icons-circle-girl-flat-icon-png.png"
        ></img>
        <h4 className="h4">Valy Antonova</h4>
        <p className="tag">@valyantonova</p>
        <h4 className="percent">39%</h4>
      </div>
      <div className="top">
        <img
          className="dp"
          src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg"
        ></img>
        <h4 className="h4">Mark Noil</h4>
        <p className="tag">@marknoil</p>
        <h4 className="percent">18%</h4>
      </div>
      <div className="top">
        <img
          className="dp"
          src="https://www.auditionform.in/wp-content/uploads/2020/09/User-4.png"
        ></img>
        <h4 className="h4">Nenci Villy</h4>
        <p className="tag">@nencivilly</p>
        <h4 className="percent">25%</h4>
>>>>>>> parent of c4d3b06 (Cards Updated)
      </div>
      <p className="view">View More</p>
      <ArrowForwardIosIcon className="icon" />
    </div>
  );
}

export default Performers;
