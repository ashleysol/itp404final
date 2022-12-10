import ChecklistItem from "./ChecklistItem";
import { useState, useRef, useEffect } from "react";

export default function DeleteChecklist(props) {
  const items = props.items.concat({ id: "600" });
  const [isBoxChecked, setIsBoxChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  //   const [isIndeterminate, setIsIndeterminate] = useState(true);
  //   const checkboxRef = useRef();
  //   let isIndeterminate = false;
  //   useEffect(() => {
  //     checkboxRef.current.indeterminate = isIndeterminate;
  //   }, [isIndeterminate]);

  //   useEffect(() => {
  //     isBoxChecked.length !== 0
  //       ? (isIndeterminate = true)
  //       : (isIndeterminate = false);
  //   }, [isBoxChecked]);
  let checklist = [];
  let button = "";
  if (isBoxChecked.length !== 0) {
    // isIndeterminate = true;
    button = (
      <button className="btn btn-primary col-3 mt-2" onClick={clickHandler}>
        Submit
      </button>
    );
  } else {
    // isIndeterminate = false;
    button = "";
  }

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsBoxChecked(items.map((item) => item.id));
    if (isCheckAll) {
      setIsBoxChecked([]);
    }
  };

  props.items.forEach((item, index) => {
    var label;
    if (item.title) {
      label = item.title;
    } else {
      label = item.name;
    }
    checklist.push(
      <ChecklistItem
        key={index}
        id={item.id}
        label={label}
        checked={isBoxChecked.includes(item.id)}
        onChange={(isChecked) => {
          if (isChecked) {
            setIsBoxChecked(isBoxChecked.concat(item.id));
          } else {
            setIsBoxChecked(
              isBoxChecked.filter((entry) => {
                return entry !== item.id;
              })
            );
          }
        }}
      />
    );
  });

  const masterCheckbox = (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={"600"}
        // ref={checkboxRef}
        checked={isBoxChecked.includes("600")}
        onChange={(isChecked) => {
          handleSelectAll();
        }}
      />
      <label className="form-check-label" htmlFor="600">
        Select All
      </label>
    </div>
  );
  function clickHandler() {
    let selectedItems = isBoxChecked.filter((entry) => {
      return entry !== "600";
    });
    props.onClick(selectedItems.toString());
  }
  return (
    <div style={{ color: `${props.color}` }}>
      <h3>Delete {props.title}</h3>
      {masterCheckbox}
      <br></br>
      {checklist}
      {button}
    </div>
  );
}
