import { useState } from "react";
import "./RelationshipType.css";

export const types = [
  { name: "Women" },
  { name: "Men" },
  { name: "Man + Woman couple" },
  { name: "Gender Fluid" },
  { name: "Pangender" },
  { name: "Non-binary" },
  { name: "Androgynous" },
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
      <h3>Select Basket Types Interested in</h3>
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