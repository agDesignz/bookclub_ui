import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Background />
    </>
  );
}

export default App;
