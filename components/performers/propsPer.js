function PropsPer(props) {
  return (
    <div>
      <a className="link">
        <img className="dp" src={props.src}></img>
        <h4 className="name">{props.name}</h4>
        <p className="tag">{props.tag}</p>
        <h4 className="percent">{props.percent}</h4>
      </a>
    </div>
  );
}

export default PropsPer;
