import LandingPage from "./page/landing-page";
import WorkFlowPage from "./page/workflow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/work" element={<WorkFlowPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
