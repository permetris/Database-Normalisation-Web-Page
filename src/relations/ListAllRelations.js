import RelationItem from "./RelationItem";

const ListAllRelations = (props) => {
  console.log(props.data);
  return (
    <div className="container">
      <h1>List all dependencies </h1>

      {props.data.map((element) => (
        <RelationItem key={element.id} itemData={element} />
      ))}
    </div>
  );
};

export default ListAllRelations;
