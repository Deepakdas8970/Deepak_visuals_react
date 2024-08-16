import Container from "./components/Container";
import AppRouter from "./routes/AppRouter";
import React, { useEffect } from "react";
import WOW from "wow.js";
import "animate.css/animate.min.css";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animate__animated", // default
      offset: 0, // default
      mobile: true, // default
      live: false, // Disable MutationObserver if not needed
    });
    wow.init();
  }, []);

  return (
    <Container>
      <AppRouter />
    </Container>
  );
}

export default App;
