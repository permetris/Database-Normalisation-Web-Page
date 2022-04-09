import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import InputAttributes from "./InputAttributes";
import InputNewDependency from "./InputNewDependency";
import Card from "../../card/Card";

const CreateRelations = (props) => {
  const [attributes, setAttributes] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [showAttributesInput, setShowAttributesInput] = useState(false);

  const formSubmitHandler = (event) => {
    const newEntry = {
      id: Math.random(),
      attributes: attributes,
      dependencies: dependencies,
    };
    props.addNewRelationSchema(newEntry);
    return <Navigate to="/" />;
  };
  // Passed into InputAttributes component to get attributes from input field
  const submitAttributes = (event) => {
    setAttributes(event.target.value.trim().split(","));
  };

  // Passed into InputAttributes copmonent to lock input, and display dependency selection
  const onLockRelationInput = (newAttributes) => {
    setShowAttributesInput(true);
  };

  // Passed into InputNewDependency component to submit new values
  const submitNewDependency = (newDependency) => {
    setDependencies((previous) => {
      return [newDependency, ...previous];
    });
  };

  return (
    <Card className="min-vh-100 container">
      <h1 className="fw-light mt-4 mb-3 ">Create relation</h1>
      <form className="card shadow-lg p-4">
        <InputAttributes
          attributes={attributes}
          submitAttributes={submitAttributes}
          lockRelationInput={onLockRelationInput}
        />
        {showAttributesInput && (
          <InputNewDependency
            submitNewDependency={submitNewDependency}
            dependencies={dependencies}
            attributes={attributes}
          />
        )}
        <button
          type="button"
          className="btn btn-primary mt-3"
          id="attributeSubmitButton"
          onClick={formSubmitHandler}
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default CreateRelations;
