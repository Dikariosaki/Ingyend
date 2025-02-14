// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar"; // Tu componente de navegación, si lo tienes

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <AppRoutes />
    </Router>
  );
};

export default App;
