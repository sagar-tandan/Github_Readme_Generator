import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero";

function App() {
  const [allData, setAllData] = useState({
    Nametitle: "Hi 👋, I'm",
    Name: "",
    subtitle: "A passionate frontend developer from Nepal",
    worktitle: "🔭 I’m currently working on",
    work: "",
    worklink: "",
    collabtitle: "👯 I’m looking to collaborate on",
    collab: "",
    collablink: "",
    helptitle: "🤝 I’m looking for help with",
    help: "",
    helplink: "",
    learntitle: "🌱 I’m currently learning",
    learn: "",
    asktitle: "💬 Ask me about",
    ask: "",
    emailtitle: "📫 How to reach me",
    email: "",
    projecttitle: "👨‍💻 All of my projects are available at",
    project: "",
    articletitle: "📝 I regularly write articles on",
    article: "",
    exptitle: "📄 Know about my experiences",
    exp: "",
    funtitle: "⚡ Fun fact",
    fun: "",
  });
  console.log(allData);

  return (
    <div className="w-full flex flex-col p-16 font-Poppins tracking-widest">
      <Hero setAllData={setAllData} allData={allData} />
    </div>
  );
}

export default App;
