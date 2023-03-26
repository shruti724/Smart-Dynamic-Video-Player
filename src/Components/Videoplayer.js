import React from "react";
import { useState, useRef } from "react";
import Googlelink from "./Googlelink";
import Leftvideo from "./Leftvideo";
import Rightvideo from "./Rightvideo";


const Videoplayer = () => {
  const videolen = useRef(null);
  let show = {
    display:"none"
  }
  const [visibility, setVisibility] = useState(show);
  
  // if click on Rightvideo src setState(link:"video2.mp4") else click on Leftvideo src setState(link: "video3.mp4") and initially link = "video1.mp4".

  // var totalDuration = 0;
  // var ispopulated = false;
  let sourceVideo = {
    scr: './Videos/video1.mp4',
    type: 'mp4' 
  }
  // const [click, setClick] = useState(sourceVideo)
  
  // let sourceVideo2 = {
  //   scr: './Videos/video2.mp4',
  //   type: 'mp4', 
   
  // }
  // let sourceVideo3 = {
  //   scr: "./Videos/video3.mp4",
  //   type: "mp4",
  // };

  const handleLoadedMetadata = () => {
    const videoE = videolen.current;
    if (!videoE) return;
    console.log(`The video is ${videoE.duration} seconds long.`);
    // totalDuration = videoE.duration * 1000;

    // {duarion:__, curr_time: __}
    // var cur_time = meta.curr_time
    videoE.currentTime = 0;
    setInterval(Timeupdate, 1000);
    function Timeupdate() {
      videoE.currentTime = videoE.currentTime + 1;

      console.log(videoE.currentTime);
      if (videoE.currentTime === Math.round(videoE.duration / 2)) {
        setVisibility({ display: "inline" });
      }
    }
  };

  const mainDivStyle = {
    width: "450px",
    height: "253px",
    position: "relative",
  };

  const handleProgress = (changeState) => {
    console.log(changeState);
    //   // Convert duration to miliseconds
    //   const halfVideo = totalDuration / 2;
    //   console.log("current duration =", changeState.timeStamp);
    //   console.log("half duration=", halfVideo);
    //   if (halfVideo <= changeState.timeStamp && !ispopulated && halfVideo != 0) {
    //     alert("hey! its half the video");
    //     ispopulated = true;
    //   }
  };
  // const link ={
  //   // setClick()
  //   console.log("apple")
  // }
  // const print= ()=> {
  //   console.log("hello")
  // }
 
  return (
    <>
      <div className="container my-4">
        <div className="main" style={mainDivStyle}>
          <div>
            <Googlelink displayCSS={visibility} />
          </div>
          <div>
            <Leftvideo displayCSS={visibility} />
          </div>
          <div>
            <Rightvideo displayCSS={visibility} />
          </div>
          {/* By default it is false, when 50% is reached updated the state to "inline" and when the component updates, the diplay will get inline*/}
          <video
            onProgress={handleProgress}
            style={{ width: "100%", height: "100%" }}
            ref={videolen}
            onLoadedMetadata={handleLoadedMetadata}
            controls
          >
            <source src={sourceVideo.scr} />
          </video>
        </div>
      </div>
    </>
  );
};

export default Videoplayer;
