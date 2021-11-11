import { useState } from "react";
import "./RelationshipType.css";

export const types = [
    { name: "Women" },
    { name: "Men" },
    { name: "Couples" },
    { name: "Group" },
    { name: "Gender Fluid" },
    { name: "Pangender" },
    { name: "Non-binary" },
    { name: "Friendship" },
    { name: "Casual" },
    { name: "Serious" },
    { name: "Friends with benefits" },
    { name: "Monogamous" },
    { name: "Debauch" },
    { name: "Rebound" },
    { name: "Pet sitter" },
    { name: "Chef" },
    { name: "Pick-up basketball" },
    { name: "Fitchecks" }
  ];
const RelationshipType = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(types.length).fill(true)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

  };

  return (
    <div>
      <h3>Select Relationship Types Interested in</h3>
      <ul className="types-list">
        {types.map(({name}, index) => {
          return (
            <li key={index}>
              <div className="types-list-item" id="hor">
                <div className="left-section" >
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default RelationshipType;