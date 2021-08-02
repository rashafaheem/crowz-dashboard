import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Performers() {
  return (
    <div className="performers">
      <h2 className="h2">Top Performers</h2>
      <br />
      <br />
      <div className="top">
        <a className="link">
          <img
            className="dp"
            src="https://www.pngkey.com/png/detail/203-2037403_flat-faces-icons-circle-girl-flat-icon-png.png"
          ></img>
          <h4 className="h4">Valy Antonova</h4>
          <p className="tag">@valyantonova</p>
          <h4 className="percent">39%</h4>
        </a>
      </div>
      <div className="top">
        <a className="link">
          <img
            className="dp"
            src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg"
          ></img>
          <h4 className="h4">Mark Noil</h4>
          <p className="tag">@marknoil</p>
          <h4 className="percent">18%</h4>
        </a>
      </div>
      <div className="top">
        <a className="link">
          <img
            className="dp"
            src="https://www.auditionform.in/wp-content/uploads/2020/09/User-4.png"
          ></img>
          <h4 className="h4">Nenci Villy</h4>
          <p className="tag">@nencivilly</p>
          <h4 className="percent">25%</h4>
        </a>
      </div>
      <a className="link">
        <p className="view">View More</p>
        <ArrowForwardIosIcon className="icon" />
      </a>
    </div>
  );
}

export default Performers;
