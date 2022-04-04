import { React, useState } from "react";
const CreateRelation = (props) => {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [attributes, setAttributes] = useState([0]);

  const dependenciesSubmitHandler = (event) => {
    event.preventDefault();
  };
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
      <form>
        <div class="form-floating mb-3">
          <input
            value={attributes}
            onChange={submitAttributes}
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Attribute"
          ></input>
          <label htmlFor="floatingInput">Relationa schema</label>
          <div class="col-auto">
            <span id="attributesHelpInline" class="form-text">
              Enter attributes separated by comma (,) signs.
            </span>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            id="attributeSubmitButton"
          >
            Submit
          </button>
        </div>
      </form>
      <form onSubmit={dependenciesSubmitHandler}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" htmlFor="inputGroupSelect01">
              Attribute:
            </label>
          </div>
          <select
            onChange={submitLeftValue}
            class="custom-select w-25 form-control"
            id="inputGroupSelect01"
          >
            <option selected>Choose...</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>
        </div>
        <p className="ml-5"> defines</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" htmlFor="inputGroupSelect01">
              Attribute:
            </label>
          </div>
          <select
            onChange={submitRightValue}
            class="custom-select w-25 form-control"
            id="inputGroupSelect01"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateRelation;
