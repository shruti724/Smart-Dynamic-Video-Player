import React from "react";

const Leftvideo = (props) => {
  console.log(props);

  const linkStyle = {
    marginTop: "50px",
    marginBottom: "50px",
    position: "absolute",
    left: "5px",
    right: "50vw",
    top: 0,
    border: "1px solid white",
    zIndex: 501,
    display: props.displayCSS.display,
  };
  return (
    <>
      <div style={linkStyle}>
        <video style={{ width: "100%", height: "100%" }} controls>
          <source src="/Videos/video2.mp4" />
        </video>
      </div>
    </>
  );
};

export default Leftvideo;
