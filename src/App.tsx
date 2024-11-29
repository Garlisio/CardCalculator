import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Poker from "./pages/Poker/Poker";
import Blackjack from "./pages/Blackjack/Blackjack";
import Cards from "./pages/CardsBlackjack/Cards";
import CardsColor from "./pages/CardsPoker/CardsColor";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/Poker" element={<Poker />} />
        <Route path="/Blackjack" element={<Blackjack />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/CardsColor" element={<CardsColor />} />
      </Routes>
    </Router>
  );
}

export default App;
