import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Signonpage} from "../src/Pages/Signonpage"
import { Signuppage } from './Pages/Signinpage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signonpage />}/>
      <Route path="registerationform" element={<Signuppage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
