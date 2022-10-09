import { createElement } from 'react';
import { render, screen } from "@testing-library/react";
// import App from "../App";
import Header from "../components/header/header";
import Results from "../components/results/results";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";


describe("App Header", () => {
  it("can render a header", () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.getAllByText("RESTy-Sure")).toBeTruthy();
  });

  it("can render a footer", () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy();
  });

  it("can render a form component", () => {
    let forms = createElement(Form);
    render(forms);
    expect(forms).toBeTruthy();
  });
  it("can render a the results from the form completion ", () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy();
  });
});

// .getBy -> returns element OR throws error if not found
// .queryBy -> returns the first element, or null
// .findBy -> returns a promise, waits up to 1000ms, and then does getBy

// getAllBy -> Array or throw error if none
// queryAllBy -> Array or empty array if non
// findAllBy -> Promise, then getAllBy

// https://testing-library.com/docs/queries/about
// byRole
// ByLabelText - inputs, etc
// ByPlaceholderText -> input
// etc
// ByText -> Literal displayed text
// ByTestId -> Looks for data-testid things in your code.
