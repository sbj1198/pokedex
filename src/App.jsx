import { useState } from "react";
import { AllRoutes } from "./pages/AllRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
