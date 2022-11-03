import RelationItem from "./RelationItem";
import Card from "../../card/Card";
const ListAllRelations = (props) => {
  let dataExists = props.data ? true : false;
  console.log(props.data);

  return (
    <Card className="container">
      <h1 className="fw-light mt-4 mb-3 ">List all dependencies </h1>

      {dataExists &&
        props.data.map((element) => {
          return (
            <div>
              <RelationItem key={Math.random()} itemData={element} />
            </div>
          );
        })}

      {!dataExists && <h2>No data!</h2>}
    </Card>
  );
};

export default ListAllRelations;
