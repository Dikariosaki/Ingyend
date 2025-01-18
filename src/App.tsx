import { DarkThemeToggle } from "flowbite-react";
import Navbar from './components/Navbar/Navbar';
import { Component } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the App</h1>
      </main>
      <Component/>
    </div>
  );
}

export default App;
