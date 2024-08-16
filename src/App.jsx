import "./App.css";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="w-full flex flex-col p-16 font-Poppins tracking-widest gap-[70px]">
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
