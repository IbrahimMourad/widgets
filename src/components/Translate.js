import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Afrikaans",
    value: "af",
  },

  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Russian",
    value: "ru",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        colorTextTest={null}
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
