import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/context";
import SkillsBadges from "./SkillBadge.jsx";

const Markdowns = () => {
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

  function convertMarkdownToUrl(markdown) {
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

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-12">
      <div className="title w-full flex flex-col">
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
          <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          <hr className="border-[1px]" />
          <img
            className="w-[200px] mb-2"
            src={convertMarkdownToUrl(profilebadge)}
            alt=""
          />
          {/* <h1 className="text-2xl font-semibold">🚀 About Me</h1>
          <hr className="border-[1px]" /> */}

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
              <div className="w-full flex gap-1">
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
              <div className="w-full flex gap-1">
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
                className="w-full rounded-md "
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
              <h1 className="text-2xl font-semibold ">🏆 GitHub Trophies</h1>
              <hr className="border-[1px] mt-1 mb-5" />
              <div className="flex gap-5 mt-8 w-full items-center">
                <img
                  // className="w-full"
                  className="w-[550px]"
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${
                    allData.github
                  }&theme=${
                    allData.statTheme
                  }&hide_border=${!allData.statBorder}`}
                  alt="streak"
                />
                <img
                  // className="w-full"
                  className="w-[500px]"
                  src={`https://github-readme-stats.vercel.app/api?username=${
                    allData.github
                  }&theme=${
                    allData.statTheme
                  }&hide_border=${!allData.statBorder}&include_all_commits=${!allData.statLifeTimeCommit}&count_private=${!allData.statPrivateCommit}`}
                  alt="stats"
                />
                <img
                  // className="w-full"
                  className="w-[400px]"
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
                className="w-full"
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
        </div>
      </div>
    </div>
  );
};

export default Markdowns;
