import './App.css';
import Wrapper from './components/Wrapper.js';

const quotes = [{ author: "Arthur Ashe", quote: "Start where you are. Use what you have. Do what you can." },
{ author: "Mae Jemison", quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live." },
{ author: "Les Brown", quote: "Too many of us are not living our dreams because we are living our fears." },
{ author: "George Addair", quote: "Everything you’ve ever wanted is on the other side of fear." }]

function App() {
  return (
    <div className="App">
      <Wrapper quotes={quotes}></Wrapper>
    </div>
  );
}

export default App;
