import { React, useState } from "react";
import DependencyItem from "./DependencyItem";
import CreateNewDependency from "./CreateNewDependency";

const CreateRelations = (props) => {
  const [attributes, setAttributes] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [showAttributesInput, setShowAttributesInput] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newEntry = {
      id: Math.random(),
      attributes: attributes,
      dependencies: dependencies,
    };
    console.log("Novi unos u parentu ", newEntry);
    props.addNewData(newEntry);
  };
  const lockRelationInput = () => {
    setShowAttributesInput(true);
  };

  const getAddedDependency = (newDependency) => {
    console.log(newDependency);
    setDependencies((previous) => {
      return [newDependency, ...previous];
    });
    console.log(dependencies);
  };

  const submitAttributes = (event) => {
    setAttributes(event.target.value.trim().split(","));
    console.log(attributes);
  };

  return (
    <div className="container d-flex flex-column">
      <h1 className="mt-4">CreateRelation</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="form-floating mb-3">
          <input
            value={attributes}
            onChange={submitAttributes}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Attribute"
            disabled={showAttributesInput}
          ></input>
          <label htmlFor="floatingInput">Relationa schema</label>
          <div className="col-auto">
            <span id="attributesHelpInline" className="form-text">
              Enter attributes separated by comma (,) signs.
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={lockRelationInput}
            type="button"
          >
            Lock
          </button>
        </div>
        {showAttributesInput && (
          <CreateNewDependency
            addDependency={getAddedDependency}
            attributes={attributes}
          />
        )}

        <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          id="attributeSubmitButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRelations;
