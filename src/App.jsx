import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Profile from "./pages/Profile";
import { MeetingProvider } from "./context/meeting/MeetingContext";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="min-h-screen flex flex-col pb-16 px-2 md:px-4 lg:px-8 text-lemon-900">
      <MeetingProvider>
        <Router>
          <Header />
          <main className="container flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </main>
        </Router>
      </MeetingProvider>
    </div>
  );
}

export default App;
