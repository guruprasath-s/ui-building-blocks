import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "./components/Buttons";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import TextInput from "./components/TextInput";
import { uniqueId } from "./helpers";
import "./App.css";

function App() {
  const [checkbox, setCheckbox] = useState({ react: false, angular: false });
  const [radiovalue, setRadioValue] = useState("");
  const handleCheckBox = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };
  const handleRadioChange = (event) => {
    setRadioValue(event.target.name);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section>
          <h5>Button API</h5>
          <Button size={"xl"} kind={"primary"}>
            Primary
          </Button>
          <Button size={"xl"} kind={"secondary"}>
            Secondary
          </Button>
          <Button size={"xl"} disabled kind={"secondary"}>
            disabled
          </Button>
        </section>
        <section>
          <h5>Checkbox API</h5>
          <Checkbox
            checked={checkbox.react}
            labelText={"React"}
            name={"react"}
            onChange={(e) => {
              handleCheckBox(e);
            }}
            id={uniqueId()}
          />
          <Checkbox
            checked={checkbox.angular}
            labelText={"Angular"}
            name={"angular"}
            onChange={(e) => {
              handleCheckBox(e);
            }}
            id={uniqueId()}
          />
          <Checkbox
            labelText={"Hide Label"}
            hideLabel
            name={"hideLabel"}
            onChange={(e) => {
              handleCheckBox(e);
            }}
            id={uniqueId()}
          />
          <Checkbox
            labelText={"Disabled"}
            disabled
            name={"Disabled"}
            onChange={(e) => {
              handleCheckBox(e);
            }}
            id={uniqueId()}
          />
        </section>
        <section>
          <h5>Radio API</h5>
          <Radio
            checked={radiovalue === "male"}
            labelText={"Male"}
            name={"male"}
            id={uniqueId()}
            onChange={(event) => {
              handleRadioChange(event);
            }}
          />
          <Radio
            checked={radiovalue === "female"}
            labelText={"Female"}
            name={"female"}
            id={uniqueId()}
            onChange={(event) => {
              handleRadioChange(event);
            }}
          />
          <Radio
            checked={radiovalue === "others"}
            labelText={"Others"}
            name={"others"}
            disabled
            id={uniqueId()}
            onChange={(event) => {
              handleRadioChange(event);
            }}
          />
        </section>
        <section>
          <h5>TextInput API</h5>
          <div>
            <TextInput
              helperText={"Input your name"}
              labelText={"Name"}
              placeholder={"Your Name"}
              id={uniqueId()}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
