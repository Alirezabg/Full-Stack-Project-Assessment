import React from "react";
import "./App.css";
import Search from "./Search";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Video Recommendation</h1>
        </header>
        <main>
          <div>
            <AddVideo/>
           <Search/> 
          </div>
          <div>
            <VideoList/>
          </div>
        </main>
      </div>
      
    </>
  );
}

export default App;
