import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/video"
import db from "./config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setVideos] = useState([])

  async function getVideos(){
    const videoCollection = collection(db, 'videos')
    const videoSnap = await getDocs(videoCollection)
    const videoList = videoSnap.docs.map(doc => doc.data())
    setVideos(videoList)
  }
    
  useEffect (()=>{
    getVideos ();
  }, []) //colchetes para não criar um loop

  return (
    <div className="App">
      <div className="app__videos">

        { videos.map((item)=>{
          return (
            <Video 
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />  
          )
        }) }

      </div>
    </div>
  );
}

export default App;