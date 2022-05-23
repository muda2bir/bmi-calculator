import "./App.css";
import Standard from "./components/Standard";
import MethodContainer from "./components/MethodContainer";
import Metric from "./components/Metric";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Calculate Your Body Mass Index (BMI)</h2>
        <MethodContainer />
        <Routes>
          <Route path="/" element={<Standard />}></Route>
          <Route path="/metric" element={<Metric />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
