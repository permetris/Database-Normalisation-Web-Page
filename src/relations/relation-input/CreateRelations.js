import { React, useState } from "react";
import InputAttributes from "./InputAttributes";
import InputNewDependency from "./InputNewDependency";

const CreateRelations = (props) => {
  const [attributes, setAttributes] = useState([]);
  const [dependencies, setDependencies] = useState();
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
      <form className="card shadow-lg p-4"onSubmit={formSubmitHandler}>
        <InputAttributes
          submitAttributes={submitAttributes}
          showAttributesInput={showAttributesInput}
          lockRelationInput={lockRelationInput}
          attributes={attributes}
        />
        {showAttributesInput && (
          <InputNewDependency
            addDependency={getAddedDependency}
            attributes={attributes}
          />
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          id="attributeSubmitButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRelations;
