//CSS
import "./global.scss";
//Instruments
import {Route, Routes} from "react-router-dom";
//Components
import {Header} from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Homapage } from "./components/homepage/Homepage";
//import { GoodsList } from "./features/goods/GoodsList";
import { Catalog } from "./pages/catalog/Catalog";
import { NotFound } from "./pages/NotFound/NotFound";
function App() {
  return (
  <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Homapage/>}/>
        <Route path="/goods" element={<Catalog/>} >
          <Route path="/goods/:category" element={<Catalog/>}/>
          <Route path="/goods/:category/path/:numberOfPage" element={<Catalog/>}/>
          <Route path="/goods/path/:numberOfPage" element={<Catalog/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
