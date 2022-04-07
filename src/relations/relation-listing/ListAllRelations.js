import RelationItem from "./RelationItem";
import Card from "../../card/Card";
const ListAllRelations = (props) => {
  console.log(props.data);
  return (
    <div className="container">
      <Card>
        <h1 className="fw-light mt-4 mb-3 ">List all dependencies </h1>

        {props.data.map((element) => (
          <RelationItem key={element.id} itemData={element} />
        ))}
      </Card>
    </div>
  );
};

export default ListAllRelations;
