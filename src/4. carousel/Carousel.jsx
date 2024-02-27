import React from "react";

import { Button, Carousel } from "antd";
import { useRef } from "react";

const Carousell = () => {
  const ref = useRef();
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "rgb(66,63,83)",
        }}
      >
        <Carousel
          ref={ref}
          style={{ width: "100%", height: "300px", textAlign: "center" }}
          autoplay
          draggable
          pauseOnHover={true}
          pauseOnDotsHover={true}
          effect="fade"
        >
          <div>
            <h1
              style={{
                backgroundColor: "red",
                width: "300px",
                height: "300px",
              }}
            >
              HTML5
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "yellow",
                width: "300px",
                height: "300px",
              }}
            >
              CSS
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "purple",
                width: "300px",
                height: "300px",
              }}
            >
              JAVASCRIPT
            </h1>
          </div>
        </Carousel>
        <div>
          <Button onClick={() => ref.current.prev()}>Prev</Button>
          <Button onClick={() => ref.current.goTo(0)}>reset</Button>
          <Button onClick={() => ref.current.next()}>next</Button>
        </div>
      </div>
    </>
  );
};

export default Carousell;
