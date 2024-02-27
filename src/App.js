import React from "react";
// import "antd/dist/antd.css";
import "./index.css";
import ButtonWrapper from "./1. Button/Button";
import TableWrapper from "./2. Table/TableWrapper";
import Spinner from "./3. Spin/Spin";
import Carousell from "./4. carousel/Carousel";

function App() {
  return (
    <div className="compo-wrapper">
      {/* <ButtonWrapper /> */}
      {/* <TableWrapper /> */}
      {/* <Spinner /> */}
      <Carousell />
    </div>
  );
}
export default App;
