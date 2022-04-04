import DependencyItem from "./DependenyItem";

const RelationItem = (props) => {

  return (
    <div>
      <h2>Relation</h2>
          <p>{props.itemData.relations.map((element) => element + " ")}</p>
          <h3>Dependencies</h3>
          {props.itemData.dependencies.map(dependency => <DependencyItem dependency={dependency}/>)}
    </div>
  );
};
export default RelationItem;
