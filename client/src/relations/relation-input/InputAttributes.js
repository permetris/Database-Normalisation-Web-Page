import Card from "../../card/Card";
const InputAttributes = (props) => {
  return (
    <Card>
      <div className="form-floating mb-3">
        <input
          value={props.attributes}
          onChange={props.submitAttributes}
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Attributes"
          disabled={props.showAttributesInput}
        ></input>
        <label htmlFor="floatingInput">Relationa schema</label>
        <div className="col-auto">
          <span id="attributesHelpInline" className="form-text">
            Enter attributes separated by comma (,) signs.
          </span>
        </div>
        <button
          className="btn btn-primary mt-4"
          onClick={props.lockRelationInput}
          type="button"
        >
          Lock
        </button>
      </div>
    </Card>
  );
};

export default InputAttributes;
