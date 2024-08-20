import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/context";
import SkillsBadges from "./SkillBadge.jsx";
import right from "../assets/checkmark.png";

const Markdowns = () => {
  const { allData, setAllData } = useContext(AllContext);
  const [allSkill, setAllSkill] = useState(SkillsBadges);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [showToast, setToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateMarkDown = () => {
    const markdown1 = `
${name && name}
    
${subtitle && subtitle}
    
    `;

    const markdown2 = [
      project1 && `${project1}`,
      project2 && `${project2}`,
      project3 && `${project3}`,
      learning && `${learning}`,
      asking && `${asking}`,
      email && `${email}`,
      portfolio && `${portfolio}`,
      article && `${article}`,
      resume && `${resume}`,
      funfact && `${funfact}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const markdown3 = [
      facebook && `${facebook}`,
      linkedin && `${linkedin}`,
      twitter && `${twitter}`,
      insta && `${insta}`,
      youtube && `${youtube}`,
      dribble && `${dribble}`,
      kaggle && `${kaggle}`,
      hackerrank && `${hackerrank}`,
      leetcode && `${leetcode}`,
      medium && `${medium}`,
      gfg && `${gfg}`,
    ]
      .filter(Boolean)
      .join(" ");

    const markdown4 = `
${allData.selectedSkillBadge.length > 0 && allData.selectedSkillBadge.join(" ")}
    `;

    const markdown5 = `
      ${
        ContributionGraph
          ? `
## 📊 Contribution Graph
${ContributionGraph}`
          : ""
      }
    
    `;

    const markdown6 = `
    ${
      githubStatistics
        ? `
## 📈 GitHub Stats & 🔍 Used Languages
${githubStatistics}
      `
        : ""
    }
    `;

    const markdown7 = `
    ${
      githubTrophy
        ? `
## 🏆 GitHub Trophies
${githubTrophy}
      `
        : ""
    }
    `;

    const markdown8 = `
    ${
      RandomQuote
        ? `
## ✍️ Random Dev Quote  
${RandomQuote}
    `
        : ""
    }
    `;
    const markdown9 = `
    ${
      buymeacoffee || kofi
        ? `
## 💰 You can help me by Donating
${buymeacoffee && buymeacoffee}
${kofi && kofi}
      `
        : ""
    }
    `;

    return `
${markdown1}
    
${profilebadge ? profilebadge : ""}
${
  markdown2
    ? `
## 🚀 About Me
${markdown2}
    
    `
    : ""
}
${
  markdown3
    ? `
## 🌐 Socials
${markdown3}
    `
    : ""
}
    ${
      markdown4
        ? `
## 💻 Tech Stack
${markdown4}
    `
        : ""
    }
${markdown5 ? markdown5 : ""}
${markdown6 ? markdown6 : ""}
${markdown7 ? markdown7 : ""}
${markdown8 ? markdown8 : ""}
${markdown9 ? markdown9 : ""}
    `;
  };

  const formatUrl = (url) => {
    // If URL is relative, convert to absolute URL
    if (url && !url.startsWith("http") && !url.startsWith("https")) {
      return `http://${url}`;
    }
    return url;
  };

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
            ? `-${allData.worktitle}  **${allData.work.trim()}**`
            : `-${allData.worktitle} [${allData.work}](${allData.worklink})`
        }`
      : ""
  }`;

  const project1Html = `${
    allData.work.trim() !== ""
      ? `${
          allData.worklink.trim() === ""
            ? `- ${allData.worktitle}  <span class='font-semibold'>${allData.work}</span>`
            : `- ${
                allData.worktitle
              } <a class="underline text-blue-500" href="${formatUrl(
                allData.worklink
              )}" target='_blank'>${allData.work}</a>`
        }`
      : ""
  }`;

  const project2 = `${
    allData.collab.trim() !== ""
      ? `${
          allData.collablink.trim() === ""
            ? `-${allData.collabtitle}  **${allData.collab.trim()}**`
            : `-${allData.collabtitle} [${allData.collab}](${allData.collablink})`
        }`
      : ""
  }`;

  const project2Html = `${
    allData.collab.trim() !== ""
      ? `${
          allData.collablink.trim() === ""
            ? `- ${allData.collabtitle}  <span class='font-semibold'>${allData.collab}</span>`
            : `- ${
                allData.collabtitle
              } <a class="underline text-blue-500" href="${formatUrl(
                allData.collablink
              )}" target='_blank'>${allData.collab}</a>`
        }`
      : ""
  }`;

  const project3 = `${
    allData.help.trim() !== ""
      ? `${
          allData.helplink.trim() === ""
            ? `-${allData.helptitle}  **${allData.help.trim()}**`
            : `-${allData.helptitle} [${allData.help}](${allData.helplink})`
        }`
      : ""
  }`;

  const project3Html = `${
    allData.help.trim() !== ""
      ? `${
          allData.helplink.trim() === ""
            ? `- ${allData.helptitle}  <span class='font-semibold'>${allData.help}</span>`
            : `- ${
                allData.helptitle
              } <a class="underline text-blue-500" href="${formatUrl(
                allData.helplink
              )}" target='_blank'>${allData.help}</a>`
        }`
      : ""
  }`;

  const learning = `${
    allData.learn.trim() !== ""
      ? `-${allData.learntitle} **${allData.learn.trim()}**`
      : ""
  }`;

  const learningHtml = `${
    allData.learn.trim() !== ""
      ? `-${allData.learntitle} <span class='font-semibold'>${allData.learn}</span>`
      : ""
  }`;

  const asking = `${
    allData.ask.trim() !== ""
      ? `-${allData.asktitle} **${allData.ask.trim()}**`
      : ""
  }`;

  const askingHtml = `${
    allData.ask.trim() !== ""
      ? `-${allData.asktitle} <span class='font-semibold'>${allData.ask}</span>`
      : ""
  }`;

  const email = `${
    allData.email.trim() !== ""
      ? `-${allData.emailtitle}:[${allData.email}](mailto:${allData.email})`
      : ""
  }`;

  const emailHtml = `${
    allData.email.trim() !== ""
      ? `-${allData.emailtitle}: <a class="underline text-blue-500" href="mailto:${allData.email}">${allData.email}</a>`
      : ""
  }`;

  const portfolio = `${
    allData.project.trim() !== ""
      ? `-${allData.projecttitle} [${allData.project}](${allData.project})`
      : ""
  }`;

  const portfolioHtml = `${
    allData.project.trim() !== ""
      ? `-${
          allData.projecttitle
        }: <a class="underline text-blue-500" href="${formatUrl(
          allData.project
        )}">${allData.project}</a>`
      : ""
  }`;

  const article = `${
    allData.article.trim() !== ""
      ? `-${allData.articletitle} [${allData.article}](${allData.article})`
      : ""
  }`;

  const articleHtml = `${
    allData.article.trim() !== ""
      ? `-${
          allData.articletitle
        }: <a class="underline text-blue-500" href="${formatUrl(
          allData.article
        )}">${allData.article}</a>`
      : ""
  }`;

  const resume = `${
    allData.exp.trim() !== ""
      ? `-${allData.exptitle} [${allData.exp}](${allData.exp})`
      : ""
  }`;

  const resumeHtml = `${
    allData.exp.trim() !== ""
      ? `-${
          allData.exptitle
        }: <a class="underline text-blue-500" href="${formatUrl(
          allData.exp
        )}">${allData.exp}</a>`
      : ""
  }`;

  const funfact = `${
    allData.fun.trim() !== ""
      ? `-${allData.funtitle} **${allData.fun.trim()}**`
      : ""
  }`;

  const funHtml = `${
    allData.fun.trim() !== ""
      ? `-${allData.funtitle} <span class='font-semibold'>${allData.fun}`
      : ""
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
    {
      allData.programming !== "" &&
        allData.programming.forEach((skill) => {
          // Find the matching skill in allSkill
          allSkill.forEach((reSkill) => {
            if (skill === reSkill.title) {
              newSelectedSkills.push(reSkill.img);
            }
          });
        });
    }
    setAllData((prev) => ({ ...prev, selectedSkillBadge: newSelectedSkills }));
  }, []);

  //skill section Completed

  //Visitor Count Badge started
  const profilebadge = `${
    allData.github.trim() !== "" && allData.displayVisiter
      ? `![](https://visitcount.itsvg.in/api?id=${
          allData.github
        }&label=${encodeURIComponent(allData.visitorLabel)}&color=${
          allData.visitorBadgeColor
        }&icon=${allData.visitorBadgeIcon}&pretty=true)`
      : ""
  }`;
  //visitor count badge Completed

  //Github Trophy Started

  const githubTrophy = `${
    allData.github.trim() !== "" && allData.displaytrophy
      ? `![](https://github-profile-trophy.vercel.app/?username=${
          allData.github
        }&theme=${
          allData.trophyTheme
        }&no-frame=${!allData.trophyBorder}&no-bg=${!allData.trophyBackground}&margin-w=4)`
      : ""
  }`;

  //Github Trophy Completed

  //Random Quote started
  const RandomQuote = `${
    allData.github.trim() !== "" && allData.displayQuote
      ? `![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${allData.quoteTheme})`
      : ""
  }`;
  //Random quote Completed

  //Github Statistics

  const gitStat = `${
    allData.github.trim() !== "" && allData.displayStat
      ? `<img height="120px" src="https://github-readme-stats.vercel.app/api?username=${
          allData.github
        }&theme=${
          allData.statTheme
        }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${!allData.statPrivateCommit}" alt="${
          allData.github
        }'s GitHub Stats" />`
      : ""
  }`;

  const topLang = `${
    allData.github.trim() !== "" && allData.displayStat
      ? `<img height="120px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${
          allData.github
        }&theme=${
          allData.statTheme
        }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${
          allData.statPrivateCommit
        }&layout=compact" alt="${allData.github}'s Top Languages" />`
      : ""
  }`;

  const streak = `${
    allData.github.trim() !== "" && allData.displayStat
      ? `<img height="120px" src="https://github-readme-streak-stats.herokuapp.com/?user=${
          allData.github
        }&theme=${allData.statTheme}&hide_border=${!allData.statBorder}" alt="${
          allData.github
        }'s GitHub Streak" />`
      : ""
  }`;

  const githubStatistics = `${
    allData.github.trim() !== "" && allData.displayStat
      ? `
<div style="display: flex; gap: 20px;">  
${gitStat} 
${topLang}  
${streak} 
</div>
      `
      : ""
  }`;

  //Github Ststistics completed

  //Contribution Graph

  const ContributionGraph = `${
    allData.github.trim() !== "" && allData.displayActivity
      ? `![](https://github-readme-activity-graph.vercel.app/graph?username=${
          allData.github
        }&bg_color=${allData.activityBg.replace(
          "#",
          ""
        )}&color=${allData.activityText.replace(
          "#",
          ""
        )}&line=${allData.activityLine.replace(
          "#",
          ""
        )}&point=${allData.activityPoint.replace(
          "#",
          ""
        )}&area=true&hide_border=true)`
      : ""
  }`;

  //Contribution graph Completed

  function convertProfileToUrl(markdown) {
    // Match the URL part of the Markdown image syntax
    const urlMatch = markdown.match(/\!\[\]\((.*?)\)/);
    return urlMatch ? urlMatch[1] : "";
  }

  function convertSocialMarkdownToHtml(markdown) {
    // Regular expression to match Markdown badge syntax
    return markdown.replace(
      /\[!\[([^\]]+)\]\(([^)]+)\)\]\(([^)]+)\)/g,
      '<a href="$3"><img src="$2" alt="$1" /></a>'
    );
  }
  const fbContent = convertSocialMarkdownToHtml(facebook);
  const linkedinContent = convertSocialMarkdownToHtml(linkedin);
  const twitterContent = convertSocialMarkdownToHtml(twitter);
  const instaContent = convertSocialMarkdownToHtml(insta);
  const dribbleContent = convertSocialMarkdownToHtml(dribble);
  const kaggleContent = convertSocialMarkdownToHtml(kaggle);
  const hackerrankContent = convertSocialMarkdownToHtml(hackerrank);
  const mediumContent = convertSocialMarkdownToHtml(medium);
  const leetcodeContent = convertSocialMarkdownToHtml(leetcode);
  const youtubeContent = convertSocialMarkdownToHtml(youtube);
  const gfgContent = convertSocialMarkdownToHtml(gfg);

  function extractTechBadgeUrl(markdown) {
    const match = markdown.match(/\!\[.*\]\(([^)]+)\)/);
    return match ? match[1] : null;
  }

  //COPY MARKDOWN FUNCTIONALITY
  const CopyMarkdown = (event) => {
    event.preventDefault();
    // setToast(true);
    setAllData((prev) => ({ ...prev, showToast: true }));
    setTimeout(() => {
      setAllData((prev) => ({ ...prev, showToast: false }));
    }, 2000);
    console.log(allData.showToast);
    // console.log(allMarkdown);
    const allMarkdownn = generateMarkDown();
    navigator.clipboard.writeText(allMarkdownn);
  };

  const downLoadMarkdown = (e) => {
    e.preventDefault();
    const allMarkdowns = generateMarkDown();
    const blob = new Blob([allMarkdowns], { type: "text / markdown" });
    const url = URL.createObjectURL(blob);
    // Create a link element
    const a = document.createElement("a");
    a.href = url;
    a.download = "Readme.md";

    // Append the link to the body
    document.body.appendChild(a);

    // Programmatically click the link to trigger the download
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log(url);
  };

  const CreateNewReadme = (e) => {
    e.preventDefault();
    setTimeout(() => {
      location.reload();
    }, 300);
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12 relative">
      {/* Toast */}
      <div
        className={`absolute w-[260px] z-50 h-[50px] bg-green-500 text-white flex gap-2 items-center px-2 rounded-md translate-x-[350px] right-0  ${
          allData.showToast ? "translate-x-[-50px] opacity-100" : "opacity-60"
        } transition-all duration-300 `}
      >
        <img className="w-8 h-8" src={right} alt="" />
        <h1>Copied Successfully!</h1>
      </div>
      <div className="title w-full flex flex-col">
        {/* Markdown div */}
        <div className="w-full flex justify-between items-center max-w-screen-md mx-auto mb-10">
          <button
            onClick={(e) => CopyMarkdown(e)}
            className="md:px-4 md:py-2 md:border-[2px] md:font-semibold font-light px-2 py-1 border-[1px] flex gap-1 items-center text-sm border-black rounded-sm active:scale-95 transition-all duration-300 "
          >
            <h1 className="hidden sm:inline">COPY MARKDOWN</h1>

            <img
              className="w-4 h-4 sm:hidden"
              src="https://cdn-icons-png.flaticon.com/128/6642/6642181.png"
              alt=""
            />
            <h1 className="sm:hidden font-medium">Copy</h1>
          </button>
          <button
            onClick={(e) => downLoadMarkdown(e)}
            className="md:px-4 md:py-2 md:border-[2px] md:font-semibold font-light flex items-center gap-1 px-2 py-1 border-[1px] text-sm border-black rounded-sm active:scale-95 transition-all duration-300 "
          >
            <h1 className="hidden sm:inline"> DOWNLOAD MARKDOWN FILE</h1>
            <img
              className="w-4 h-4 sm:hidden"
              src="https://cdn-icons-png.flaticon.com/128/7532/7532231.png"
              alt=""
            />
            <h1 className="sm:hidden font-medium">Download</h1>
          </button>
          <button
            onClick={(e) => CreateNewReadme(e)}
            className="md:px-4 md:py-2 md:border-[2px] md:font-semibold flex gap-1 items-center font-light px-2 py-1 border-[1px] text-sm border-black rounded-sm active:scale-95 transition-all duration-300 "
          >
            <h1 className="hidden sm:inline"> CREATE NEW</h1>

            <img
              className="w-4 h-4 sm:hidden"
              src="https://cdn-icons-png.flaticon.com/128/9264/9264047.png"
              alt=""
            />
            <h1 className="sm:hidden font-medium">Create</h1>
          </button>
        </div>
        <div className="w-full flex justify-center items-center text-lg ">
          <span className="bg-black px-8 py-2 font-semibold rounded-t-md text-white">
            PREVIEW
          </span>
        </div>
        <div className="w-full border-2 border-black rounded-md px-4 py-4 flex flex-col gap-3">
          <div
            className="text-xl font-semibold"
            dangerouslySetInnerHTML={{ __html: name }}
          />
          {name && <hr className="border-[1px]" />}

          <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          <img
            className="w-[200px]"
            src={convertProfileToUrl(profilebadge)}
            alt=""
          />
          {(project1 ||
            project2 ||
            project3 ||
            learning ||
            asking ||
            email ||
            portfolio ||
            article ||
            resume ||
            funfact) && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">🚀 About Me</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="w-full flex flex-col gap-1">
                <div dangerouslySetInnerHTML={{ __html: project1Html }} />
                <div dangerouslySetInnerHTML={{ __html: project2Html }} />
                <div dangerouslySetInnerHTML={{ __html: project3Html }} />
                <div dangerouslySetInnerHTML={{ __html: learningHtml }} />
                <div dangerouslySetInnerHTML={{ __html: askingHtml }} />
                <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
                <div dangerouslySetInnerHTML={{ __html: portfolioHtml }} />
                <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
                <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
                <div dangerouslySetInnerHTML={{ __html: funHtml }} />
              </div>
            </div>
          )}

          {/* Render social media badges */}
          {(facebook ||
            linkedin ||
            twitter ||
            insta ||
            dribble ||
            kaggle ||
            hackerrank ||
            medium ||
            leetcode ||
            youtube ||
            gfg) && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">🌐 Socials</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="w-full flex gap-2 flex-wrap">
                {facebook && (
                  <div dangerouslySetInnerHTML={{ __html: fbContent }} />
                )}
                {linkedin && (
                  <div dangerouslySetInnerHTML={{ __html: linkedinContent }} />
                )}
                {twitter && (
                  <div dangerouslySetInnerHTML={{ __html: twitterContent }} />
                )}
                {insta && (
                  <div dangerouslySetInnerHTML={{ __html: instaContent }} />
                )}
                {kaggle && (
                  <div dangerouslySetInnerHTML={{ __html: kaggleContent }} />
                )}
                {dribble && (
                  <div dangerouslySetInnerHTML={{ __html: dribbleContent }} />
                )}
                {hackerrank && (
                  <div
                    dangerouslySetInnerHTML={{ __html: hackerrankContent }}
                  />
                )}
                {youtube && (
                  <div dangerouslySetInnerHTML={{ __html: youtubeContent }} />
                )}
                {medium && (
                  <div dangerouslySetInnerHTML={{ __html: mediumContent }} />
                )}
                {leetcode && (
                  <div dangerouslySetInnerHTML={{ __html: leetcodeContent }} />
                )}
                {gfg && (
                  <div dangerouslySetInnerHTML={{ __html: gfgContent }} />
                )}
              </div>
            </div>
          )}

          {/* Render Skill section */}
          {allData.selectedSkillBadge.length > 0 && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">💻 Tech Stack</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="w-full flex gap-2 flex-wrap mt-6">
                {allData.selectedSkillBadge.map((skill) => (
                  <img src={extractTechBadgeUrl(skill)} alt="tech" />
                ))}
              </div>
            </div>
          )}

          {/* Contribution Graph */}
          {ContributionGraph && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">📊 Contribution Graph</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <img
                className="w-full rounded-md mt-8"
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${
                  allData.github
                }&bg_color=${allData.activityBg.replace(
                  "#",
                  ""
                )}&color=${allData.activityText.replace(
                  "#",
                  ""
                )}&line=${allData.activityLine.replace(
                  "#",
                  ""
                )}&point=${allData.activityPoint.replace(
                  "#",
                  ""
                )}&area=true&hide_border=true`}
                alt="graph"
              />
            </div>
          )}

          {/* Render Github Stattistics */}
          {githubStatistics && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">
                📈 GitHub Stats & 🔍 Used Languages
              </h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="flex gap-5 mt-8 w-full items-center flex-wrap">
                <img
                  className="w-[500px]"
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${
                    allData.github
                  }&theme=${
                    allData.statTheme
                  }&hide_border=${!allData.statBorder}`}
                  alt="streak"
                />
                <img
                  className="w-[450px]"
                  src={`https://github-readme-stats.vercel.app/api?username=${
                    allData.github
                  }&theme=${
                    allData.statTheme
                  }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${!allData.statPrivateCommit}`}
                  alt="stats"
                />
                <img
                  className="w-[350px]"
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                    allData.github
                  }&theme=${
                    allData.statTheme
                  }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${
                    allData.statPrivateCommit
                  }&layout=compact`}
                  alt="lang"
                />
              </div>
            </div>
          )}

          {/* Render Trophy Section */}
          {githubTrophy && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">🏆 GitHub Trophies</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <img
                className="w-full mt-8"
                src={`https://github-profile-trophy.vercel.app/?username=${
                  allData.github
                }&theme=${
                  allData.trophyTheme
                }&no-frame=${!allData.trophyBorder}&no-bg=${!allData.trophyBackground}&margin-w=4`}
                alt="trophy"
              />
            </div>
          )}

          {/* Render Quote section */}
          {RandomQuote && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">✍️ Random Dev Quote</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <img
                src={`https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${allData.quoteTheme}`}
                alt="quote"
              />
            </div>
          )}

          {/* Render support section */}
          {(kofi || buymeacoffee) && (
            <div className="w-full my-4">
              <h1 className="text-2xl font-semibold ">
                💰 You can help me by Donating
              </h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="w-full flex gap-2">
                <a href={`https://buymeacoffee.com/${allData.buymeacoffee}`}>
                  <img
                    src={`https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black`}
                    alt="buymeacoffee"
                  />
                </a>

                <a href={`https://ko-fi.com/${allData.kofi}`}>
                  <img
                    src={`https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white`}
                    alt="kofi"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Markdowns;
