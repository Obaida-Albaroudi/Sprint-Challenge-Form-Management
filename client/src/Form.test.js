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

  it("renders strike numbers", () => {
    let { findAllByText, getByText }= render(<ClientFormik />);
    let { getAllByTestId } = render(<User />);
    let button = getByText(/Submit/)
    let Food =getAllByTestId(/Food/)
    
    fireEvent.click(button);
    expect(User).toHaveLength(Food.length)

  });
  it("should render a list of players provided on props", () => {
    let { getAllByTestId, getByText } = render(<User />);

    const element = getByText(/ Pending.../i);
    expect(User).toBe(element);
  });

  
  
});