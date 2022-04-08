import DependencyItem from "../relation-listing/DependencyItem";

const PreviewDependencies = (props) => {
  console.log(props.dependencies);
  return (
    <div>
      <div className="card p2 mt-4">
        <div className="card-header">Dependencies</div>
        <ul className="list-group-flush">
          {props.dependencies.map((dependency) => (
            <DependencyItem dependency={dependency} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PreviewDependencies;
