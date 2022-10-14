import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/login", { replace: true });
  });

  return (
    <div>
      <h1>Home Screen</h1>
    </div>
  );
}

export default App;
