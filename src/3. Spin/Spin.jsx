import React, { useState } from "react";
import { Spin, Switch } from "antd";

const Spinner = () => {
  //props to Spin component
  /**
   * size => large , small, default = medium
   * spinning = {loading} ** loading here is a state from react => a boolean
   * fullscreen => takes the entire screen
   * delay => in ms for delay in spinning
   * indicator => {<Icon />} customize the spinning icon by replacing the Icon with icon from library of your choice i.e phospor-react
   
   */

  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Spin spinning={loading} size="large" />
      <div>
        {" "}
        Load the Spinner? :{" "}
        <Switch checked={loading} onChange={() => setLoading(!loading)} />
      </div>
    </div>
  );
};

export default Spinner;
