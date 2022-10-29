import React from "react";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Googlelink = (props) => {
  console.log(props);

  const linkStyle = {
    marginTop: 0,
    marginBottom: 0,
    position: "absolute",
    right: 0,
    top: 0,
    border: "1px solid white",
    zIndex: 500,
    display: props.displayCSS.display,

  };
  return (
    <div style={linkStyle} onClick={() => openInNewTab("https://google.com")}>
      <span
        style={{
          color: "white",
          float: "right",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        Click Here to Explore the world!
      </span>
    </div>
  );
};
export default Googlelink;
