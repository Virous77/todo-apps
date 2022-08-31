import React from "react";
import "./Main.css";

const ButtonBar = (props) => {
  return (
    <div className="button-bar">
      <div
        className={`all ${props.all ? "on" : ""}`}
        onClick={(props.onAllShow, props.onAll)}
      >
        All
      </div>

      <div
        className={`active ${props.change ? "on" : ""}`}
        onClick={(() => props.onActive, props.onChange)}
      >
        Active
      </div>
      <div
        className={`comp ${props.comp ? "on" : ""}`}
        onClick={(props.onAllComp, props.onComp)}
      >
        completed
      </div>

      <div
        className={`clear ${props.clear ? "on" : ""}`}
        onClick={(props.onAllClear, props.onClear)}
      >
        Clear Completed
      </div>
    </div>
  );
};

export default ButtonBar;
