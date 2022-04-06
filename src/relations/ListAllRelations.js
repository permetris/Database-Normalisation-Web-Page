import RelationItem from "./RelationItem";

const ListAllRelations = (props) => {
  console.log(props.data);
  return (
    <div className="container">
      <h1 className="fw-light mt-4 mb-3 ">List all dependencies </h1>

      {props.data.map((element) => (
        <RelationItem key={element.id} itemData={element} />
      ))}
    </div>
  );
};

export default ListAllRelations;
