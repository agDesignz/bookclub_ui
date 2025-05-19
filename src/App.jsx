import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="container flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
      <Background />
    </div>
  );
}

export default App;
