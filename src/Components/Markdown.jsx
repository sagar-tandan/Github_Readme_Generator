import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/context";
import SkillsBadges from "./SkillBadge.jsx";

const Markdown = () => {
  const { allData, setAllData } = useContext(AllContext);
  const [allSkill, setAllSkill] = useState(SkillsBadges);
  const [selectedSkill, setSelectedSkill] = useState([]);

  //Hero Section start here

  const name = `${
    allData.Name.trim() !== ""
      ? `<h1 align="center">${allData.Nametitle} ${allData.Name}</h1>`
      : ""
  }`;

  const subtitle = `${
    allData.subtitle.trim() !== ""
      ? `<h3 align="center">${allData.subtitle}</h3>`
      : ""
  }`;

  const project1 = `${
    allData.work.trim() !== ""
      ? `${
          allData.worklink.trim() === ""
            ? `- ${allData.worktitle}  **${allData.work}**`
            : `- ${allData.worktitle} [${allData.work}](${allData.worklink})`
        }`
      : ""
  }`;

  const project2 = `${
    allData.collab.trim() !== ""
      ? `${
          allData.collablink.trim() === ""
            ? `- ${allData.collabtitle}  **${allData.collab}**`
            : `- ${allData.collabtitle} [${allData.collab}](${allData.collablink})`
        }`
      : ""
  }`;

  const project3 = `${
    allData.help.trim() !== ""
      ? `${
          allData.helplink.trim() === ""
            ? `- ${allData.helptitle}  **${allData.help}**`
            : `- ${allData.helptitle} [${allData.help}](${allData.helplink})`
        }`
      : ""
  }`;

  const learning = `${
    allData.learn.trim() !== ""
      ? `-${allData.learntitle} **${allData.learn}**`
      : ""
  }`;
  const asking = `${
    allData.ask.trim() !== "" ? `-${allData.asktitle} **${allData.ask}**` : ""
  }`;

  const email = `${
    allData.email.trim() !== ""
      ? `-${allData.emailtitle}:[${allData.email}](mailto:${allData.email})`
      : ""
  }`;

  const portfolio = `${
    allData.project.trim() !== ""
      ? `-${allData.projecttitle} [${allData.project}](${allData.project})`
      : ""
  }`;

  const article = `${
    allData.article.trim() !== ""
      ? `-${allData.articletitle} [${allData.article}](${allData.article})`
      : ""
  }`;

  const resume = `${
    allData.exp.trim() !== ""
      ? `-${allData.exptitle} [${allData.exp}](${allData.exp})`
      : ""
  }`;

  const funfact = `${
    allData.fun.trim() !== "" ? `-${allData.funtitle} **${allData.fun}**` : ""
  }`;

  //Hero section Completed

  //Contact Section started

  const linkedin = `${
    allData.linkedin.trim() !== ""
      ? `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${allData.linkedin})`
      : ""
  }`;

  const twitter = `${
    allData.twitter.trim() !== ""
      ? `[![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/${allData.twitter})`
      : ""
  }`;

  const facebook = `${
    allData.facebook.trim() !== ""
      ? `[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/${allData.facebook})`
      : ""
  }`;

  const insta = `${
    allData.insta.trim() !== ""
      ? `[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/${allData.insta})`
      : ""
  }`;

  const dribble = `${
    allData.dribble.trim() !== ""
      ? `[![Dribbble](https://img.shields.io/badge/Dribbble-%23E45285.svg?logo=Dribbble&logoColor=white)](https://dribbble.com/${allData.dribble})
`
      : ""
  }`;

  const kaggle = `${
    allData.kaggle.trim() !== ""
      ? `[![Kaggle](https://img.shields.io/badge/Kaggle-%23023D6D.svg?logo=Kaggle&logoColor=white)](https://kaggle.com/${allData.kaggle})
`
      : ""
  }`;

  const hackerrank = `${
    allData.hackerrank.trim() !== ""
      ? `[![HackerRank](https://img.shields.io/badge/HackerRank-%234D41C4.svg?logo=HackerRank&logoColor=white)](https://hackerrank.com/${allData.hackerrank})`
      : ""
  }`;

  const medium = `${
    allData.medium.trim() !== ""
      ? `[![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/${allData.medium})`
      : ""
  }`;

  const leetcode = `${
    allData.leetcode.trim() !== ""
      ? `[![LeetCode](https://img.shields.io/badge/LeetCode-%23F8C300.svg?logo=LeetCode&logoColor=white)](https://leetcode.com/${allData.leetcode})
`
      : ""
  }`;

  const youtube = `${
    allData.youtube.trim() !== ""
      ? `[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/${allData.youtube}) `
      : ""
  }`;
  const gfg = `${
    allData.youtube.trim() !== ""
      ? `[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-%2300A5E0.svg?logo=GeeksforGeeks&logoColor=white)](https://www.geeksforgeeks.org/${allData.GFG})
 `
      : ""
  }`;

  //contact section completed

  //Donate Section start

  const kofi = `${
    allData.kofi.trim() !== ""
      ? `[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/${allData.kofi}) `
      : ""
  }`;

  const buymeacoffee = `${
    allData.buymeacoffee.trim() !== ""
      ? `[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/${allData.buymeacoffee})`
      : ""
  }`;

  //donate section completed

  //Skill section started

  useEffect(() => {
    let newSelectedSkills = [];
    // Iterate over the programming skills
    allData.programming.forEach((skill) => {
      // Find the matching skill in allSkill
      allSkill.forEach((reSkill) => {
        if (skill === reSkill.title) {
          newSelectedSkills.push(reSkill.img);
        }
      });
    });
    setAllData((prev) => ({ ...prev, selectedSkillBadge: newSelectedSkills }));
  }, []);

  //skill section Completed


  

  console.log(
    facebook,
    linkedin,
    leetcode,
    youtube,
    hackerrank,
    twitter,
    medium,
    kaggle,
    dribble,
    insta,
    gfg
  );
  return <div>Markdown</div>;
};

export default Markdown;
