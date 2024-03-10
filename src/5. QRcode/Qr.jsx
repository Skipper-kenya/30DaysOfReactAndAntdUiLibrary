import React, { useState } from "react";
import { QRCode } from "antd";

const Qr = () => {
  const [status, setStatus] = useState("expired");
  return (
    <div>
      <QRCode
        value="https://twitter.com/Skipper_Ke"
        size={250}
        status={status}
        onRefresh={() => {
          setStatus("active");
        }}
      />
    </div>
  );
};

export default Qr;
