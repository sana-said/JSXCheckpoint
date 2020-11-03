import "./App.css";
import "./style.css";
import image from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className={"title red"}> Votre nom ici </h1>
          <br />
          <img src = {image} alt="image d'ecran d'ordinateur"/>
          <br />
          <img src = "/imageInPublic.jpg" alt="image d'ordinateur"/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
