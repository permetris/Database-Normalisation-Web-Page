import DependencyItem from "../relation-listing/DependencyItem";
import { useState, React } from "react";
const InputNewDependency = (props) => {
  const [leftValue, setLeftValue] = useState([]);
  const [rightValue, setRightValue] = useState([]);
  const [dependencies, setDependencies] = useState([]);

  const attributes = ["-", ...props.attributes];

  const submitRightValue = (event) => {
    setRightValue(event.target.value);
  };

  const submitLeftValue = (event) => {
    setLeftValue(event.target.value);
  };

  const addNewDependency = (event) => {
    event.preventDefault();
    const newDependency = {
      id: Math.random(),
      left: leftValue,
      right: rightValue,
    };
    console.log("ovo trenutno debugas majmune", newDependency);

    setDependencies((prev) => {
      return [...prev, newDependency];
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center">
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
        <p className="ml-5 fw-light fs-1">-&gt;</p>
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
        className="btn btn-primary w-25 align-self-center"
        id="attributeSubmitButton"
      >
        Add dependency
      </button>
      

    </div>
  );
};

export default InputNewDependency;
