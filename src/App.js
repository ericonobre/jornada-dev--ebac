import "./App.css";
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={637}
          messages={359}
          shares={298}
          name="erico.ns"
          description="Gato pulando"
          music="Jason M Norwood - Talking in Isolation, Pt. 4"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video 
          likes={432}
          messages={321}
          shares={212}
          name="erico.ns"
          description="Gato cheirando"
          music="Clap your Hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        
      </div>
    </div>
  );
}

export default App;
