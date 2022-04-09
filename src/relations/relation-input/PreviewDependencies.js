import DependencyItem from "../relation-listing/DependencyItem";

const PreviewDependencies = (props) => {
  return (
    <div>
      <div className="card p2 mt-4">
        <div className="card-header">Dependencies</div>
        <ul className="list-group-flush">
          {props.dependencies.map((dependency) => (
            <DependencyItem key={props.dependencies.id} dependency={dependency} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PreviewDependencies;
  