import RelationItem from "./RelationItem";


const ListAllReltions = (props) => {
  return (
    <div className="container">
      <h1>List all dependencies </h1>

      {props.data.map((element) => (
        <RelationItem itemData={element} />
      ))}
    </div>
  );
};

export default ListAllReltions;
