import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Rating from "./Rating";
const VideoList = (props) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const deleteHandler =(a)=>
  {
     fetch("https://flannel-hickory-parallelogram.glitch.me/videos/delete", {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(a),
     })
       .then((response) => response.json())
       .then((data1) => {
         console.log("Success:", data1);
       })
       .catch((error) => {
         console.log(error);
       });
  }
 

  if (props.loading)
  {
    return (<h3>Loading...</h3>)
  }else{
  return (

    
    <div className="video-container">
      {props.filterData.map((a) => (
        <div>
          <p>{a.title} </p>
          <div>
            <Rating rating={a.rating} ratingId={a.id} />
          </div>
          <YouTube
            videoId={a.url.split("watch?v=")[1]}
            opts={opts}
            onReady={onPlayerReady}
          />
          <button onClick={deleteHandler(a)}>Delete</button>
        </div>
      ))}
    </div>
  )}
};

export default VideoList;
