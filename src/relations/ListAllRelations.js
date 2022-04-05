import RelationItem from './RelationItem';

const ListAllRelations = (props) => {
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
