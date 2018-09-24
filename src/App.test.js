import React from "react";
import ReactDOM from "react-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import flexiConfig from "./flexiConfig.json";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Dominos App", () => {
  const moutedApp = mount(<App />);
  describe("Configured Elements", () => {
    const inputTypes = new Set(["TextField", "Password", "Email", "Phone"]);
    flexiConfig.items.forEach(field => {
      it(`renders a ${field.type} with name ${field.name}`, () => {
        if (inputTypes.has(field.type)) {
          expect(moutedApp.find(`input#input${field.name}`).length).toEqual(1);
        } else if (field.type === "DropDown") {
          expect(moutedApp.find(`select#select${field.name}`).length).toEqual(
            1
          );
        } else if (field.type === "TextArea") {
          expect(
            moutedApp.find(`textarea#textarea${field.name}`).length
          ).toEqual(1);
        }
      });
    });
  });
  describe("App rendered", () => {
    it("renders all elements without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
