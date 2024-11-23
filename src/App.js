import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
// import StarRating from "./star-rating";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import LightDarkMode from "./components/light-dark-mode";
import TicTacToe from "./components/tic-tact-toe";





function App() {
  return (
    <div className="App">
      {/* This is a Accordian Component */}
      <Accordian />

      {/* Random color Component */}
      <RandomColor/>

      {/* star rating */}
      {/* <StarRating/>  */}

      {/* imageslidercomponent */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <ModalTest/>

      <GithubProfileFinder/>

      <LightDarkMode/>

      <TicTacToe/>

      
    </div>
  );
}

export default App;
