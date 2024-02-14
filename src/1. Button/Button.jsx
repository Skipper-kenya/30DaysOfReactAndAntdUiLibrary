import React, { useState } from "react";
import "../index.css";
import "./button.css";
//import Button component from antd library
import { Button } from "antd";
const ButtonWrapper = () => {
  const [loading, setLoading] = useState(false);
  const handleFetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="compo-wrapper">
      {/*
Primary button: indicate the main action, one primary button at most in one section.
Default button: indicate a series of actions without priority.
Dashed button: commonly used for adding more actions.
Text button: used for the most secondary action.
Link button: used for external links. */}

      {/** 
* danger: used for actions of risk, like deletion or authorization.
ghost: used in situations with complex background, home pages usually.
disabled: when actions are not available.
loading: add loading spinner in button, avoiding multiple submits too.*/}
      <Button
        className="fetch-btn"
        type="primary"
        loading={loading}
        onClick={handleFetchData}
        size="large"
      >
        Simulate Fetch Data
      </Button>
    </div>
  );
};

export default ButtonWrapper;
