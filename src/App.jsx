import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Background from "./components/Background";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { MeetingProvider } from "./context/MeetingContext";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MeetingProvider>
        <Router>
          <Header />
          <main className="container flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </Router>
      </MeetingProvider>
      <Background />
    </div>
  );
}

export default App;
