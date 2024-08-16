import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../Context/context";

const prograamLang = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    title: "c",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    title: "c++",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    title: "csharp",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
    title: "go",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    title: "java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "javascript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "typescript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg",
    title: "coffeescript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    title: "php",
  },
  {
    img: "https://api.iconify.design/logos-perl.svg",
    title: "perl",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    title: "ruby",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
    title: "scala",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    title: "python",
  },
  {
    img: "https://vectorlogo.zone/logos/erlang/erlang-official.svg",
    title: "erlang",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
    title: "clojure",
  },
  {
    img: "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg",
    title: "elixir",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    title: "swift",
  },
  {
    img: "https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg",
    title: "nim",
  },
  {
    img: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
    title: "rust",
  },
];

const frontend = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    title: "vuejs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "react",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    title: "Svelte",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
    title: "angularjs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg",
    title: "backbonejs",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    title: "bootstrap",
  },
  {
    img: "https://bestofjs.org/logos/vuetify.svg",
    title: "vuetify",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    title: "css3",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    title: "html5",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/pug.svg",
    title: "pug",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
    title: "gulp",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    title: "sass",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "redux",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
    title: "webpack",
  },
  {
    img: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    title: "babeljs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    title: "tailwindcss",
  },
  {
    img: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
    title: "materialize",
  },
  {
    img: "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
    title: "bulma",
  },
];

const backend = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    title: "nodejs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    title: "spring",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    title: "express",
  },
  {
    img: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    title: "graphql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
    title: "nginx",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
    title: "hadoop",
  },
  {
    img: "https://openresty.org/images/logo.png",
    title: "openresty",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    title: "kafka",
  },
];

const android = [
  {
    img: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    title: "flutter",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
    title: "android",
  },
  {
    img: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    title: "dart",
  },
  {
    img: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
    title: "kotlin",
  },
  {
    img: "https://reactnative.dev/img/header_logo.svg",
    title: "reactnative",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
    title: "ionic",
  },
  {
    img: "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
    title: "nativescript",
  },
];

const ai = [
  {
    img: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    title: "tensorflow",
  },
  {
    img: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    title: "pytorch",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
    title: "pandas",
  },
  {
    img: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    title: "seaborn",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    title: "Scikit_learn",
  },
  {
    img: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
    title: "opencv",
  },
];

const db = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    title: "mongodb",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    title: "mysql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    title: "postgresql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
    title: "redis",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
    title: "oracle",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
    title: "cassandra",
  },
  {
    img: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
    title: "hive",
  },
  {
    img: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    title: "sqlserver",
  },
  {
    img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    title: "sqlite",
  },
];

const dataVis = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
    title: "d3js",
  },
  {
    img: "https://www.chartjs.org/media/logo-title.svg",
    title: "chartjs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
    title: "kibana",
  },
  {
    img: "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
    title: "canvasjs",
  },
];

const devops = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "aws",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    title: "docker",
  },
  {
    img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    title: "gcp",
  },
  {
    img: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
    title: "bash",
  },
  {
    img: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    title: "azure",
  },
  {
    img: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    title: "kubernetes",
  },
  {
    img: "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
    title: "travis",
  },
  {
    img: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    title: "jenkins",
  },
];

const baas = [
  {
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    title: "firebase",
  },
  {
    img: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    title: "heroku",
  },
  {
    img: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
    title: "appwriteio",
  },
  {
    img: "https://docs.amplify.aws/assets/logo-dark.svg",
    title: "amplify",
  },
];

const framework = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
    title: ".net",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/django.svg",
    title: "django",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
    title: "electron",
  },
  {
    img: "https://laravel.com/img/logomark.min.svg",
    title: "laravel",
  },
  {
    img: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
    title: "flask",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
    title: "codeigniter",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
    title: "rails",
  },
];

const testing = [
  {
    img: "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
    title: "cypress",
  },
  {
    img: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
    title: "puppeteer",
  },
  {
    img: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
    title: "mochajs",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png",
    title: "selenium",
  },
];

const software = [
  {
    img: "https://vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "postman",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
    title: "photoshop",
  },
  {
    img: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    title: "illustrator",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
    title: "adobe-xd",
  },
  {
    img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    title: "figma",
  },
  {
    img: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
    title: "sketchapp",
  },
  {
    img: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
    title: "blender",
  },
  {
    img: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    title: "framer",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    title: "Matlab",
  },
];

const staticSite = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    title: "nextjs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
    title: "nuxtjs",
  },
  {
    img: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
    title: "gatsby",
  },
  {
    img: "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
    title: "sculpin",
  },
  {
    img: "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
    title: "middleman",
  },
  {
    img: "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
    title: "scullyio",
  },
  {
    img: "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
    title: "jekyllrb",
  },
];

const gameEngine = [
  {
    img: "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
    title: "unreal",
  },
  {
    img: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
    title: "unity",
  },
];
const other = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    title: "arduino",
  },
  {
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    title: "git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    title: "linux",
  },
];
const Skills = () => {
  const [search, setSearch] = useState("");
  const [showText, setShowText] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const { allData, setAllData } = useContext(AllContext);

  const [filteredLangs, setFilteredLangs] = useState(prograamLang);
  const [filteredFrontend, setFilteredFrontend] = useState(frontend);
  const [filteredBackend, setFilteredBackend] = useState(backend);
  const [filteredAndroid, setFilteredAndroid] = useState(android);
  const [filteredAi, setFilteredAi] = useState(ai);
  const [filteredDb, setFilteredDb] = useState(db);
  const [filteredDv, setFilteredDv] = useState(dataVis);
  const [filteredDevops, setFilteredDevops] = useState(devops);
  const [filteredBaas, setFilteredBaas] = useState(baas);
  const [filteredFramework, setFilteredFramework] = useState(framework);
  const [filteredTest, setFilteredTest] = useState(testing);
  const [filteredSoftware, setFilteredSoftware] = useState(software);
  const [filteredStatic, setFilteredStatic] = useState(staticSite);
  const [filteredGame, setFilteredGame] = useState(gameEngine);
  const [filteredOther, setFilteredOther] = useState(other);

  const handleChange = (e) => {
    const searchValue = e.toLowerCase();
    setSearch(searchValue); // Update search state

    // Filter each array based on search input
    setFilteredLangs(
      prograamLang.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      )
    );
    setFilteredFrontend(
      frontend.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredBackend(
      backend.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredAndroid(
      android.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredAi(
      ai.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredDb(
      db.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredDv(
      dataVis.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredDevops(
      devops.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredBaas(
      baas.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredFramework(
      framework.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredTest(
      testing.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredSoftware(
      software.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
    setFilteredStatic(
      staticSite.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      )
    );
    setFilteredGame(
      gameEngine.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      )
    );
    setFilteredOther(
      other.filter((item) => item.title.toLowerCase().includes(searchValue))
    );
  };

  const handleClick = (skill) => {
    setSelectedSkills((prev) => {
      // Toggle skill in selectedSkills array
      if (prev.includes(skill)) {
        return prev.filter((item) => item !== skill); // Remove skill if already selected
      } else {
        return [...prev, skill]; // Add skill if not selected
      }
    });
  };

  // Update context data with selected skills
  useEffect(() => {
    setAllData((prev) => ({
      ...prev,
      programming: [selectedSkills],
    }));
  }, [selectedSkills]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-1">
      <div className="title w-full flex justify-between">
        <h1 className="w-full text-2xl font-semibold">Skills</h1>
        <div className="w-[250px] border-2 border-black rounded-md flex items-center pr-2">
          <input
            className="w-[200px] m-2 border-none outline-none text-lg"
            type="text"
            name="search"
            value={search}
            placeholder="Search skills"
            onChange={(e) => handleChange(e.target.value)}
          />
          {search === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          ) : (
            <svg
              onClick={(e) => handleChange("")}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </div>
      </div>
      {/* Programming language */}
      {filteredLangs.length > 0 && (
        <div className="programming w-full flex flex-col">
          <h1 className="w-full text-xl">Programming Languages</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredLangs.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {filteredFrontend.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Frontend Development</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredFrontend.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Backend Development */}
      {filteredBackend.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Backend Development</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredBackend.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Mobile App Development */}
      {filteredAndroid.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Mobile App Development</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredAndroid.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* ai Development */}
      {filteredAi.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">AI / ML Development</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredAi.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* database */}
      {filteredDb.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Database</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredDb.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* software */}
      {filteredSoftware.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Software</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredSoftware.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/*Data Visualization */}
      {filteredDv.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Data Visualization</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredDv.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* DevOps */}
      {filteredDevops.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">DevOps</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredDevops.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* baas */}
      {filteredBaas.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Backend as a Service(BaaS)</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredBaas.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* framework */}
      {filteredFramework.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Frameworks</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredFramework.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* testing */}
      {filteredTest.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Testing</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredTest.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* staticSite */}
      {filteredStatic.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Static Site Generators</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredStatic.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* gameEngine */}
      {filteredGame.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Game Engine</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredGame.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* others */}
      {filteredOther.length > 0 && (
        <div className="programming w-full flex flex-col mt-10">
          <h1 className="w-full text-xl">Other</h1>
          <hr className="w-full mt-1 border-[1px] border-[#d3d3d3]" />

          <div className="w-full grid grid-cols-4 mt-10 gap-12">
            {filteredOther.map((skill, index) => (
              <div
                key={index}
                className="w-full flex gap-5 items-center oneelement"
              >
                <div
                  onClick={() => handleClick(skill.title)}
                  className={`checkbox border-[2px] rounded-sm w-6 h-6 border-black bg-white flex p-1`}
                >
                  <div
                    className={`w-full ${
                      selectedSkills.includes(skill.title)
                        ? "bg-purple-600 rounded-sm"
                        : "bg-white"
                    }`}
                  ></div>
                </div>
                <img
                  onClick={() => handleClick(skill.title)}
                  onMouseEnter={() => setShowText(skill.title)}
                  onMouseLeave={() => setShowText("")}
                  className="w-10 h-10"
                  src={skill.img}
                  alt={skill.title}
                />
                <h1
                  className={`px-4 py-1 bg-black text-white transform transition-opacity duration-500 ${
                    showText === skill.title ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {skill.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
