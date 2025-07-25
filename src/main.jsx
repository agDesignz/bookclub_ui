import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Background from "./components/layout/Background.jsx";
import { MeetingProvider } from "./context/meeting/MeetingContext.jsx";
import { AuthProvider } from "./context/auth/AuthContext.jsx";
import { BooksProvider } from "./context/books/BooksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background />
    <AuthProvider>
      <BooksProvider>
        <MeetingProvider>
          <App />
        </MeetingProvider>
      </BooksProvider>
    </AuthProvider>
  </StrictMode>
);
