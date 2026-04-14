import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";

function AppLayout() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/cadastro";

  return (
    <div className={`app-shell ${isAuthPage ? "app-shell--auth" : ""}`}>
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Login />} />
          <Route path="/player/:movieId" element={<Player />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
