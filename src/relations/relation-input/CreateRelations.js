import { React, useState } from "react";
import InputAttributes from "./InputAttributes";
import InputNewDependency from "./InputNewDependency";
import Card from "../../card/Card";

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
    console.log(attributes);
  };

  const getAddedDependency = (newDependency) => {
    console.log(newDependency);
    setDependencies(newDependency);
    console.log(dependencies);
  };

  const submitAttributes = (event) => {
    setAttributes(event.target.value.trim().split(","));
    console.log(attributes);
  };

  return (
    
      <Card className="min-vh-100 container">
        <h1 className="fw-light mt-4 mb-3 ">Create relation</h1>
        <form className="card shadow-lg p-4" onSubmit={formSubmitHandler}>
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
            dependencies={dependencies}
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
      </Card>
    
  );
};

export default CreateRelations;
