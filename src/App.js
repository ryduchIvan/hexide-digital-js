//CSS
import "./global.scss";
//Instruments
import {Route, Routes} from "react-router-dom";
//Components
import {Header} from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Homapage } from "./components/homepage/Homepage";
import { GoodsList } from "./features/goods/GoodsList";
function App() {
  return (
  <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Homapage/>}/>
        <Route path="/goods" element={<GoodsList/>} />
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
