import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Profile from "./pages/Profile";
import Archive from "./pages/Archive";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";
import AdminRoute from "./routes/AdminRoute";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="min-h-screen flex flex-col pb-16 px-2 md:px-4 lg:px-8 text-lemon-900">
      <Router>
        <Header />
        <main className="container flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/archive" element={<Archive />} />

            <Route path="" element={<AdminRoute />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
