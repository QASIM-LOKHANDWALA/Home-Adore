import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-min-full h-screen flex items-center justify-center">
        <h1>Welcome to Home Adore!</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
