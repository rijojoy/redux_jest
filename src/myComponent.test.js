// myComponent.test.js
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import myStore from "./myStore";
import MyComponent from "./myComponent";

jest.mock("./myStore", () => {
  const mockStore = {
    getState: jest.fn(() => ({ data: "mocked data" })),
    subscribe: jest.fn(),
    dispatch: jest.fn()
  };
  return mockStore;
});

describe("MyComponent", () => {
  test("renders data from store", () => {
    const { getByText } = render(
      <Provider store={myStore}>
        <MyComponent />
      </Provider>
    );

    expect(getByText("mocked data")).toBeInTheDocument();
  });
});
