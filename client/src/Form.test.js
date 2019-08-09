import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import ClientFormik from './Form.js';
import User from "./User.js"

describe("<Display />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ClientFormik />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    render(<ClientFormik />);
  });

  it("should render a list of players provided on props", () => {
    let { FindAllByText, getAllByText } = render(<ClientFormik />);

    FindAllByText(/Client Form /i);
    
  });

  it("renders strike numbers", () => {
    let { FindAllByText, getByText }= render(<ClientFormik />);
    let button = getByText(/Submit/)

    
    fireEvent.click(button);
    FindAllByText(/Username is needed!/)

  });


  
  
});