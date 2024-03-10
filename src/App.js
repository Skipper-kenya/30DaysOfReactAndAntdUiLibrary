import React from "react";
// import "antd/dist/antd.css";
import "./index.css";
import ButtonWrapper from "./1. Button/Button";
import TableWrapper from "./2. Table/TableWrapper";
import Spinner from "./3. Spin/Spin";
import Carousell from "./4. carousel/Carousel";
import Qr from "./5. QRcode/Qr";

function App() {
  return (
    <div className="compo-wrapper">
      {/* <ButtonWrapper /> */}
      {/* <TableWrapper /> */}
      {/* <Spinner /> */}
      {/* <Carousell /> */}
      <Qr />
    </div>
  );
}
export default App;
