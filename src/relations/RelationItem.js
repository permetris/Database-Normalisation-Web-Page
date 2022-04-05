import DependencyItem from "./DependencyItem";

const RelationItem = (props) => {

  return (
    <div>
      <h2>Relation</h2>
          <p>{props.itemData.relations.map((element) => element + " ")}</p>
      <h3>Dependencies</h3>
      <ul>
      {props.itemData.dependencies.map(dependency => <DependencyItem dependency={dependency}/>)}

      </ul>
    </div>
  );
};
export default RelationItem;
