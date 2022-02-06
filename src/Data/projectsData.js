const projectsData = [
  {
    id: 1,
    title: "Youtuby",
    description: "User interface similar to YouTube, View videos, comments and more.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/21428925-4a8fd1a8a72929befa9ea792c78b5253_cxtuhj_hzm5fn.png",
    imgAlt: "User interface similar to YouTube",
    tags: [
      {
        id: 2,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap4"],
      },
    ],
    repoLink: "https://azmitammam.github.io/Youtuby/",
  },
  {
    id: 3,
    title: "Product Landing Page",
    description: "Product LandingPage user interface, To view a product and its specifications.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144424/imgPortfolioNew/Product_sctkdu_l7jiac.png",
    imgAlt: "product user interface",
    tags: [
      {
        id: 4,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap4"],
      },
    ],
    repoLink: "https://azmitammam.github.io/product/index.html",
  },
  {
    id: 5,
    title: "Arabic Store",
    description: "Online store, The user can purchase products according to their categories.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/7885213-ab3b744d0b0e784f67a1a5737a5543fa_rmf4fn_uejb1b.png",
    imgAlt: "User interface of an online store",
    tags: [
      {
        id: 6,
        tagss: ["JavaScript", "HTML5", "Bootstrap5", "SASS"],
      },
    ],
    repoLink: "https://github.com/AzmiTammam/OnlineStore",
  },
  {
    id: 7,
    title: "Coming soon page",
    description: "The user interface of the Coming soon page.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144424/imgPortfolioNew/Mobile_Application_Lnading_Page_ittbwe_crq31w.png",
    imgAlt: "The user interface of the Coming soon page",
    tags: [
      {
        id: 8,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink: "https://azmitammam.github.io/coming-soon/",
  },
  {
    id: 9,
    title: "Company Landing Page",
    description:
      "User interface for a real company website with a lot of features.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/Agency_hwdxgn_jbjkii.png",
    imgAlt: "User interface for a real company website with a lot of features",
    tags: [
      {
        id: 10,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink: "https://azmitammam.github.io/Agency/",
  },
  {
    id: 11,
    title: "Azmi Portfolio",
    description:
      "Portfolio through which the user can view his experiences and services.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/Azmi_zn64wc_u4ty33.png",
    imgAlt:
      "Portfolio through which the user can view his experiences and services, as well as ways to communicate with him",
    tags: [
      {
        id: 12,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink:
      "https://azmitammam.github.io/projectOne-Portfolio/SourceCode/index.html",
  },
  {
    id: 13,
    title: "Publisher",
    description:
      "publishing house that contains books for programming, You can get books through.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/%D9%83%D8%AA%D8%A8%D9%83_jzix5b_ecldju.png",
    imgAlt:
      "publishing house that contains books for programming and development for all areas of programming. You can get books through",
    tags: [
      {
        id: 14,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink: "https://azmitammam.github.io/publisher/dist/index.html",
  },
  {
    id: 15,
    title: "QuizSystem",
    description:
      "QuizSystem is an intelligent prototype developed as a multiple choice question.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144424/imgPortfolioNew/Quiz_System_ixxts2_nsqvf8.png",
    imgAlt: "User interface for a real company website with a lot of features",
    tags: [
      {
        id: 16,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink: "https://azmitammam.github.io/QuizSystem/index.html#",
  },
  {
    id: 17,
    title: "iCap React eCommerce",
    description: "iCap React eCommerce for selling caps and products.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/iCAP_r48wku_isvxzf.png",
    imgAlt: "User interface for a real company website with a lot of features",
    tags: [
      {
        id: 18,
        tagss: ["JavaScript", "ReactJS", "CSS3", "Bootstrap5"],
      },
    ],
    repoLink: "https://github.com/AzmiTammam/eCommerce-",
  },
  {
    id: 19,
    title: "Guess My Number!",
    description: "Guess My Number Game, The user can guess the number through it.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144424/imgPortfolioNew/Guess_My_Number_wjcbpm_hcxxfp.png",
    imgAlt: "User interface for a real company website with a lot of features",
    tags: [
      {
        id: 20,
        tagss: ["JavaScript", "HTML5", "CSS3"],
      },
    ],
    repoLink: "https://azmitammam.github.io/GuessNumber-Game/index.html",
  },
  {
    id: 21,
    title: "Hunger Road",
    description: "Hunger Road is a System For Ordering Food Online.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144424/imgPortfolioNew/HUNGER_ROAD_ei1ze0_t96vww.png",
    imgAlt: "Hunger Road is a System For Ordering Food Online",
    tags: [
      {
        id: 22,
        tagss: ["JavaScript", "ReactJS", "HTML5", "SASS"],
      },
    ],
    repoLink: "https://serene-aryabhata-c67d34.netlify.app/home",
  },
  {
    id: 23,
    title: "Educational site",
    description: "An educational site that sells educational courses.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/EDU_rervlj_pbi8bk.png",
    imgAlt: "An educational site that sells educational courses",
    tags: [
      {
        id: 24,
        tagss: ["JavaScript", "ReactJS", "HTML5", "CSS3"],
      },
    ],
    repoLink: "https://vigorous-thompson-1fb4ec.netlify.app/",
  },
  {
    id: 25,
    title: "Furniture eCommerce",
    description:
      "An e-commerce that sells product, Each product has name, price and description.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144426/imgPortfolioNew/Furnitica_-_Minimalist_Furniture_HTML_Template_hcrfmn_hginaj.png",
    imgAlt:
      "An e-commerce Website that sells furniture, Each product has name, price and description.",
    tags: [
      {
        id: 26,
        tagss: ["PHP", "MySQL", "JavaScript", "Bootstrap5"],
      },
    ],
    repoLink: "https://github.com/AzmiTammam/FurnitureApp",
  },
  {
    id: 27,
    title: "Portfolio",
    description: "User interface for Portfolio! To display a person's information.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/Azmi___Portfolio_rl2vkd_aziksq.png",
    imgAlt: "User interface for Portfolio!",
    tags: [
      {
        id: 28,
        tagss: ["JavaScript", "HTML5", "CSS3", "Bootstrap4"],
      },
    ],
    repoLink: "https://github.com/AzmiTammam/Portfolio2",
  },
  {
    id: 29,
    title: "React Portfolio",
    description: "Portfolio through which the user can view his experiences and services.",
    img: "https://res.cloudinary.com/durpirilj/image/upload/v1644144425/imgPortfolioNew/21454994-290f29538e95ff33ca20098a7cc0b41b_s0ezmi_ge1trf.png",
    imgAlt: "User interface for Portfolio!",
    tags: [
      {
        id: 30,
        tagss: ["JavaScript", "ReactJS", "HTML5", "CSS3"],
      },
    ],
    repoLink: "https://vigilant-sinoussi-aa6096.netlify.app/",
  },
];

export default projectsData;
