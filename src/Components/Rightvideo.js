import React from "react";
// import video1 from "./Videos";
// import video3 from "/Videos/video3.mp4"

// const openInNewTab = (url) => {
//   window.open(url, "_blank", "noopener,noreferrer");
// };

const Rightvideo = (props) => {
  console.log(props);

  const linkStyle = {
    marginTop:"50px",
    marginBottom: "50px",
    position: "absolute",
    left: "21vw",
    right: "5px",
    top: 0,
    border: "1px solid white",
    zIndex: 500,
    display: props.displayCSS.display,
  };
  // const videoLink = {
  //   src: "./Videos/video3.mp4",
  // }
  const source = {
    scr: "./Videos/video3.mp4",
    type: "mp4",
  };
  
  // const onClick = {
  //   border: props.borderColor.border
  // };
    

  return (
    <>
      <div style={linkStyle} >
        <video
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
          controls
        >
    
          <source src={source.scr} />
        </video>
      </div>
    </>
  );
};

export default Rightvideo;
