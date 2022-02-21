import { useState } from "react";

function DropDown(props) {
  const [toggle, setToggle] = useState(true);


  return (
    <div
      className={"dropdown " + (toggle ? "" : "is-active")}
      style={{ float: "right" }}
    >
      <div className="select">
        <select onChange={props.changeFiat} >
          <option value="USD">USD</option>
          <option value="THB">THB</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
