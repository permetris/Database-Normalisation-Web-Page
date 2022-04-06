import { useState, React } from "react";
const CreateNewDependency = (props) => {
  const [leftValue, setLeftValue] = useState([]);
  const [rightValue, setRightValue] = useState([]);

  const attributes = ["-", ...props.attributes];

  const submitRightValue = (event) => {
    setRightValue(event.target.value);
  };

  const submitLeftValue = (event) => {
    setLeftValue(event.target.value);
  };

  const addNewDependency = (event) => {
    event.preventDefault();
    const newDependency = { left: leftValue, right: rightValue };
    props.addDependency(newDependency);
  };

  return (
    <div>
      {" "}
      <div className="d-flex flex-row justify-content-evenly align-items-center">
        <div className="input-group mb-3 w-25">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Left
            </label>
          </div>
          <select
            onChange={submitLeftValue}
            className="form-select w-25 form-control"
            id="inputGroupSelect01"
          >
            {attributes.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <p className="ml-5"> defines:</p>
        <div className="input-group mb-3 w-25 ">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Right:
            </label>
          </div>
          <select
            onChange={submitRightValue}
            className="form-select w-25"
            id="inputGroupSelect02"
          >
            {attributes.map((el) => {
              return (
                <option key={el + "1"} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button
        onClick={addNewDependency}
        className="btn btn-primary"
        id="attributeSubmitButton"
      >
        Add dependency
      </button>
    </div>
  );
};

export default CreateNewDependency;
