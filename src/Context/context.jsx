import React, { createContext, useState } from "react";

const AllContext = createContext();

const ContextProvider = ({ children }) => {
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
    programming: [],
    facebook: "",
    github: "",
    linkedin: "",
    insta: "",
    GFG: "",
    medium: "",
    twitter: "",
    youtube: "",
    leetcode: "",
    hackerrank: "",
    dribble: "",
    kaggle: "",
    displayPstats: false,
    displayTopSkill: false,
    displayStreakSkill: false,
    //visitorBadge
    displayVisiter: false,
    visitorLabel: "Profile Views",
    visitorBadgeColor: "0",
    visitorBadgeIcon: "0",

    //Trophy
    displaytrophy: false,
    trophyTheme: "radical",
    trophyBorder: true,
    trophyBackground: true,

    //random quote
    displayQuote: false,
    quoteTheme: "",

    displayTopRepo: false,
  });

  console.log(allData);
  return (
    <AllContext.Provider value={{ allData, setAllData }}>
      {children}
    </AllContext.Provider>
  );
};

export { AllContext, ContextProvider };
