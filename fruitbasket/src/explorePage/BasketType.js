import { useState } from "react";
import "./RelationshipType.css";

export const types = [
    { name: "Women" },
    { name: "Men" },
    { name: "Couples" },
    { name: "Three musketeers" },
    { name: "Hates avacados" },
    { name: "Homies" },
    { name: "Watch party" },
    { name: "Friendship" },
    { name: "Casual" },
    { name: "Serious" },
    { name: "Friends with benefits" },
    { name: "Debauch" },
    { name: "Dog Walking" },
    { name: "Offensive linemen" },
    { name: "Box of crayons" },
    { name: "Long distance" }
  ];
const BasketType = () => {
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
export default BasketType;