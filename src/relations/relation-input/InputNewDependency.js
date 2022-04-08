import { useState, React } from "react";
import PreviewDependencies from "./PreviewDependencies";
const InputNewDependency = (props) => {
  const [leftValue, setLeftValue] = useState();
  const [rightValue, setRightValue] = useState();
  const [dependencies, setDependencies] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const attributes = ["-", ...props.attributes];

  const submitRightValue = (event) => {
    setRightValue(event.target.value);
  };

  const submitLeftValue = (event) => {
    setLeftValue(event.target.value);
  };

  const addNewDependency = () => {
    const newDependency = {
      id: Math.random(),
      left: leftValue,
      right: rightValue,
    };
    setDependencies((previousData) => {
      return [
        ...previousData,
        newDependency
      ];
    });
    console.log(dependencies);
    setShowPreview(true);
    props.addDependency(dependencies);
  };

  return (
    <div className="d-flex flex-column justify-content-center mt-5">
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
                <option key={el} defaultValue={el}>
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
                <option key={el + "1"} defaultValue={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {showPreview && <PreviewDependencies dependencies={props.dependencies} />}
      <button
        onClick={addNewDependency}
        className="btn btn-primary w-25 align-self-center mt-4"
        id="attributeSubmitButton"
      >
        Add dependency
      </button>
    </div>
  );
};

export default InputNewDependency;
