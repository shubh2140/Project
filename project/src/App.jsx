import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./Components/Main";
import Pic1 from "./Components/Pic1";
import Pic2 from "./Components/Pic2";
import Pic3 from "./Components/Pic3";
import Pic4 from "./Components/Pic4";

const App=()=>{
  return(
    <BrowserRouter>
        <Main/>
      <Routes>
        <Route element={<Pic1/>} path="/"/>
        <Route element={<Pic2/>} path="/pic2"/>
        <Route element={<Pic3/>} path="/pic3"/>
        <Route element={<Pic4/>} path="/pic4"/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;