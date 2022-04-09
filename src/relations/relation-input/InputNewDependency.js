import { useState, React } from "react";
import PreviewDependencies from "./PreviewDependencies";
const InputNewDependency = (props) => {
  const [leftValue, setLeftValue] = useState();
  const [rightValue, setRightValue] = useState();
  const [showPreview, setShowPreview] = useState(false);

  const attributes = ["Choose", ...props.attributes];

  const submitValue = (event) => {
    let result = [];
    let options = event.target.options;
    let opt;

    for (let i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }

    event.target.id === "left" ? setLeftValue(result) : setRightValue(result);
  };

  const addDependency = (event) => {
    const newDependency = {
      id: Math.random(),
      left: leftValue,
      right: rightValue,
    };
    setShowPreview(true);
    props.submitNewDependency(newDependency);
    event.preventDefault();
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
            onChange={submitValue}
            className="form-select w-25 form-control"
            id="left"
            multiple
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
            onChange={submitValue}
            className="form-select"
            id="right"
            multiple
          >
            {attributes.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </div>
      </div>
      {showPreview && <PreviewDependencies dependencies={props.dependencies} />}
      <button
        type="button"
        onClick={addDependency}
        className="btn btn-primary w-25 align-self-center mt-4"
      >
        Add dependency
      </button>
    </div>
  );
};

export default InputNewDependency;
