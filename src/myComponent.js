// myComponent.js
import React from "react";
import { useSelector } from "react-redux";
import myStore from "./myStore";

function MyComponent() {
  const data = useSelector((state) => state.data);

  return <div>{data}</div>;
}

export default MyComponent;
