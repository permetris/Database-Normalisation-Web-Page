import RelationItem from "./RelationItem";
import Card from "../../card/Card";
const ListAllRelations = (props) => {
  return (
    <Card className="container">
      <h1 className="fw-light mt-4 mb-3 ">List all dependencies </h1>

      {props.data.map((element) => {
        return (
          <div>
            <RelationItem key={element.id} itemData={element} />
            
          </div>
        );
      })}
    </Card>
  );
};

export default ListAllRelations;
