import { React, useState } from "react";

const CreateRelations = (props) => {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [attributes, setAttributes] = useState("Unesi Atribut");
  const [dependency, setDependency] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Radi");
    props.onSubmit();
  };

  const addNewDependency = () => {
    const newDependency = { left: leftValue, right: rightValue }
    setDependency((previous) => {
      return [newDependency, ...previous];
    })
  }
  const submitAttributes = (event) => {
    let newAttributes = event.target.value.trim().split(",");
    setAttributes(newAttributes);
    console.log(attributes);
  };

  const submitRightValue = (event) => {
    setRightValue(event.target.value);
  };
  const submitLeftValue = (event) => {
    setRightValue(event.target.value);
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
          ></input>
          <label htmlFor="floatingInput">Relationa schema</label>
          <div className="col-auto">
            <span id="attributesHelpInline" className="form-text">
              Enter attributes separated by comma (,) signs.
            </span>
          </div>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Attribute:
            </label>
          </div>
          <select
            onChange={submitLeftValue}
            className="custom-select w-25 form-control"
            id="inputGroupSelect01"
          >
            {attributes.map(el => {
              return <option key={el} value={el}>{ el}</option>
            })}
          </select>
        </div>
        <p className="ml-5"> defines</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Attribute:
            </label>
          </div>
          <select
            onChange={submitRightValue}
            className="custom-select w-25 form-control"
            id="inputGroupSelect02"
          >
            {attributes.map(el => {
              return <option key={el} value={el}>{ el}</option>
            })}
          </select>
        </div>
        <button
          onClick={addNewDependency}
          className="btn btn-primary"
          id="attributeSubmitButton"
        >
          Add dependency
        </button>
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
