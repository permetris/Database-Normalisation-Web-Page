const Card = (props) => {
  return (
    <div className="card shadow border border-2 rounded p-3">{props.children}</div>
  );
};
export default Card;
