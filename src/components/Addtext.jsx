import React, { useState } from "react";
import "../utils-css/addbutton.css";

const AddText = () => {
  const [edittext, setedittext] = useState("Add Your Text");
  const [isediting, setiseditingtext] = useState(false);

  const handleclicktext = function () {
    setiseditingtext(false);
  };

  return (
    <div className="textContent1">
      {isediting ? (
        <div className="editupper">
          <input
            type="text"
            className="input-textediting"
            value={edittext}
            onChange={(e) => setedittext(e.target.value)}
          />
          <button className="save-btn" onClick={handleclicktext}>
            Save
          </button>
        </div>
      ) : (
        <div className="loweredittext">
          <p>{edittext}</p>
          <button className="btnedit" onClick={() => setiseditingtext(true)}>Add</button>
        </div>
      )}
    </div>
  );
};

export default AddText;
