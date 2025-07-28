import React, { useState } from "react";
import "../utils-css/addbutton.css";
import axios from "axios";

const Editbutton = () => {
  const [buttontext, setbuttontext] = useState(" Add Button ");
  const [buttonColor, setbuttonColor] = useState("#007bff");
  const [buttontype, setbuttontype] = useState(" link");
  const [buttonUrl, setbuttonUrl] = useState("");
  const [savedButton, setSavedButton] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const toggleform = () => {
    setShowForm(!showForm);
  };
  const handlesublit = (e) => {
    e.preventDefault();

    setSavedButton({
      text: buttontext,
      color: buttonColor,
      type: buttontype,
      url: buttonUrl,
    });
    setShowForm(false);
  };
  const logEdit = async (component, field, value) => {
    try {
      await axios.post("http://localhost:5000/update-section", {
        component,
        field,
        value,
      });
      console.log("Logged edit:", component, field, value);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="addedbutton1">
      {savedButton && (
        <a
          className="addedbtn"
          href={savedButton.url}
          target="_blank"
          style={{
            backgroundColor: savedButton.color,
          }}
        >
          {savedButton.text}
        </a>
      )}

      <div className="editButton">
        <button className="toggleform" onClick={toggleform}>
          {showForm ? "Close Form" : " Add Button"}
        </button>

        {showForm && (
          <form className="editform" onSubmit={handlesublit}>
            <div>
              <label className="fieldcontent" htmlFor="">
                Button Text
              </label>
              <input
                className="editField value1"
                type="text"
                value={buttontext}
                onChange={(e) => {
                  const value = e.target.value;
                  setbuttontext(value);
                  logEdit("Editbutton", "buttonText", value);
                }}
              />
            </div>
            <div>
              <label className="fieldcontent" htmlFor="">
                Button Color
              </label>
              <input
                className="editField value1"
                type="color"
                value={buttonColor}
                onChange={(e) => {
                  const value = e.target.value;
                  setbuttonColor(value);
                  logEdit("Editbutton", "buttonColor", value);
                }}
              />
            </div>
            <div>
              <label className="fieldcontent" htmlFor="">
                Button Type
              </label>
              <select
                className="editField value1"
                name=""
                id=""
                value={buttontype}
                onChange={(e) => {
                  const value = e.target.value;
                  setbuttontype(value);
                  logEdit("Editbutton", "buttonType", value);
                }}
              >
                <option value="link">Link</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label className="fieldcontent">
                {buttontype === "call"
                  ? "Phone Number"
                  : buttontype === "email"
                  ? "Email Address"
                  : "URL"}
              </label>
              <input
                className="editField value1"
                type="text"
                value={buttonUrl}
                onChange={(e) => {
                  const value = e.target.value;
                  setbuttonUrl(value);
                  logEdit("Editbutton", "buttonUrl", value);
                }}
              />
            </div>
            <button className="submiteditdata" type="submit">
              Save Button
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Editbutton;
