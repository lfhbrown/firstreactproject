import "./Card.css"; // This componnent is used to take the CSS that is shared by all the componenets and put it in a wrapper component so we do not need to repeat any CSS unnecessarily

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
