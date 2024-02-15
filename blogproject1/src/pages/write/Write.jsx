import React from "react";
import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img
        src="https://www.themarysue.com/wp-content/uploads/2023/05/one-piece-1081-color-spread-luffy-sanji-usopp-brook-zoro-chopper-franky.jpg?w=1200&resize=1200%2C676"
        className="writeImg"
        alt=""
        />
      <form  className="writeForm">
        <div className="writeFormGroup">
          <lable htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </lable>
          <input type="file" id="fileInput" style={{ display: "none" }}/>
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
            <textarea className="writeInput writeText"
            type="text"
            placeholder="Tell your story">
            </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
